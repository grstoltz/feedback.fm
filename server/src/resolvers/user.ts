import {
	Resolver,
	Mutation,
	Arg,
	Field,
	ObjectType,
	Query,
	Ctx,
	FieldResolver,
	Root,
	Int,
} from "type-graphql";
import argon2 from "argon2";
import { v4 } from "uuid";

import { MyContext } from "../types";

import { UsernamePasswordInput } from "./UsernamePasswordInput";
import { validateRegister } from "../utils/validateRegister";
import { sendEmail } from "../utils/sendEmail";
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from "../constants";

import { User } from "../generated/type-graphql/models/User";

import { Song } from "../generated/type-graphql/models/Song";
import { Comment } from "../generated/type-graphql/models/Comment";
import { Notification } from "../generated/type-graphql/models/Notification";

@ObjectType()
class FieldError {
	@Field()
	field: string;
	@Field()
	message: string;
}

@ObjectType()
class UserResponse {
	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[];

	@Field(() => User, { nullable: true })
	user?: User;
}

@Resolver(User)
export class UserResolver {
	@Query(() => User, { nullable: true })
	async admin(
		@Ctx() { req, prisma }: MyContext
	): Promise<User | undefined | null> {
		if (!req.session.userId) {
			return undefined;
		}

		const user = await prisma.user.findUnique({
			where: { id: req.session.userId },
		});
		return user;
	}

	@Query(() => User, { nullable: true })
	async user(
		@Ctx() { prisma }: MyContext,
		@Arg("id", () => Int) id: number
	): Promise<User | null> {
		const user = await prisma.user.findUnique({
			where: { id },
		});
		return user;
	}

	@Mutation(() => Boolean)
	async forgotPassword(
		@Arg("email") email: string,
		@Ctx() { redis, prisma }: MyContext
	) {
		const user = await prisma.user.findUnique({
			where: { email },
		});
		if (!user) {
			// the email is not in the db
			return true;
		}

		const token = v4();

		await redis.set(
			FORGET_PASSWORD_PREFIX + token,
			user.id,
			"ex",
			1000 * 60 * 60 * 24 * 3
		); // 3 days

		await sendEmail(
			email,
			`<a href="http://localhost:3000/change-password/${token}">reset password</a>`
		);

		return true;
	}

	@Mutation(() => UserResponse)
	async changePassword(
		@Arg("token") token: string,
		@Arg("newPassword") newPassword: string,
		@Ctx() { prisma, redis, req }: MyContext
	): Promise<UserResponse> {
		if (newPassword.length <= 2) {
			return {
				errors: [
					{
						field: "newPassword",
						message: "length must be greater than 2",
					},
				],
			};
		}

		const key = FORGET_PASSWORD_PREFIX + token;
		const userId = await redis.get(key);
		if (!userId) {
			return {
				errors: [
					{
						field: "token",
						message: "token expired",
					},
				],
			};
		}

		const userIdNum = parseInt(userId);
		const user = await prisma.user.findUnique({
			where: { id: userIdNum },
		});

		if (!user) {
			return {
				errors: [
					{
						field: "token",
						message: "user no longer exists",
					},
				],
			};
		}

		await prisma.user.update({
			where: {
				id: userIdNum,
			},
			data: {
				password: await argon2.hash(newPassword),
			},
		});

		await redis.del(key);

		// log in user after change password
		req.session.userId = user.id;

		return { user };
	}

	@FieldResolver(() => String)
	email(@Root() user: User, @Ctx() { req }: MyContext): string {
		// this is the current user and its ok to show them their own email
		if (req.session.userId === user.id) {
			return user.email;
		}
		// current user wants to see someone elses email
		return "";
	}

	@FieldResolver(() => Number)
	async balance(
		@Root() user: User,
		@Ctx() { req, prisma }: MyContext
	): Promise<number> {
		// this is the current user and its ok to show them their own balance
		if (req.session.userId === user.id) {
			const transaction = await prisma.transaction.findFirst({
				where: {
					userId: user.id,
				},
				orderBy: {
					createdAt: "desc",
				},
			});

			let balance;

			transaction
				? (balance =
						transaction.openingBalance + transaction.transactionAmount)
				: (balance = 0);

			// return balance as number
			return balance;
		}
		// current user wants to see someone elses account balance
		return 0;
	}

	@FieldResolver(() => [Song], { nullable: true })
	async songs(
		//@Root() user: User,
		@Ctx() { prisma, req }: MyContext
	): Promise<Song[] | null> {
		return prisma.song.findMany({ where: { ownerId: req.session.userId } });
	}

	@FieldResolver(() => [Notification], { nullable: true })
	async notifications(
		@Root() user: User,
		@Arg("skip", () => Number) skip: number,
		@Ctx() { req, prisma }: MyContext
	): Promise<Notification[] | null> {
		if (req.session.userId === user.id) {
			return prisma.notification.findMany({
				where: {
					receiverId: user.id,
				},
				skip,
				take: 15,
				orderBy: {
					createdAt: "desc",
				},
			});
		} else {
			return null;
		}
	}

	@FieldResolver(() => [Comment], { nullable: true })
	async receivedComments(
		@Root() user: User,
		@Ctx() { prisma, req }: MyContext
	): Promise<Comment[]> {
		if (req.session.userId === user.id) {
			return prisma.comment.findMany({
				where: { receiverId: req.session.userId },
			});
		}

		throw new Error("Not logged in");
	}

	@FieldResolver(() => [Comment], { nullable: true })
	async sentComments(
		@Root() user: User,
		@Ctx() { req, prisma }: MyContext
	): Promise<Comment[]> {
		if (req.session.userId === user.id) {
			return prisma.comment.findMany({
				where: { senderId: req.session.userId },
			});
		}

		throw new Error("Not logged in");
	}

	@Query(() => User, { nullable: true })
	async me(@Ctx() { prisma, req }: MyContext) {
		if (!req.session.userId) {
			return null;
		}

		const user = await prisma.user.findUnique({
			where: { id: req.session.userId },
		});
		return user;
	}

	@Mutation(() => UserResponse)
	async register(
		@Arg("options") options: UsernamePasswordInput,
		@Ctx() { prisma, req }: MyContext
	): Promise<UserResponse> {
		const errors = validateRegister(options);
		if (errors) {
			return { errors };
		}

		const hashedPassword = await argon2.hash(options.password);

		let user;

		try {
			user = await prisma.user.create({
				data: {
					username: options.username,
					email: options.email,
					password: hashedPassword,
					avatarURL:
						"https://res.cloudinary.com/dedeo0s30/image/upload/v1605156898/default-profile-icon-16.png",
				},
			});
		} catch (err) {
			//|| err.detail.includes("already exists")) {
			// duplicate username error
			if (err.code === "23505") {
				return {
					errors: [
						{
							field: "username",
							message: "username already taken",
						},
					],
				};
			}
		}

		// store user id session
		// this will set a cookie on the user
		// keep them logged in
		if (user) {
			req.session.userId = user.id;
		}

		return { user };
	}

	@Mutation(() => UserResponse)
	async login(
		@Arg("usernameOrEmail") usernameOrEmail: string,
		@Arg("password") password: string,
		@Ctx() { prisma, req }: MyContext
	): Promise<UserResponse> {
		const user = await prisma.user.findUnique({
			where: usernameOrEmail.includes("@")
				? { email: usernameOrEmail }
				: { username: usernameOrEmail },
		});
		if (!user) {
			return {
				errors: [
					{
						field: "usernameOrEmail",
						message: "that username doesn't exist",
					},
				],
			};
		}
		const valid = await argon2.verify(user.password, password);
		if (!valid) {
			return {
				errors: [
					{
						field: "password",
						message: "incorrect password",
					},
				],
			};
		}

		req.session.userId = user.id;

		return {
			user,
		};
	}

	@Mutation(() => Boolean)
	logout(@Ctx() { req, res }: MyContext) {
		return new Promise((resolve) =>
			req.session.destroy((err: any) => {
				res.clearCookie(COOKIE_NAME);
				if (err) {
					console.log(err);
					resolve(false);
					return;
				}

				resolve(true);
			})
		);
	}
}
