import {
	Resolver,
	Query,
	Arg,
	Int,
	Mutation,
	InputType,
	Field,
	FieldResolver,
	Root,
	Ctx,
	UseMiddleware,
} from "type-graphql";

import { Song } from "../generated/type-graphql/models/Song";
import { Message } from "../generated/type-graphql/models/Message";
import { User } from "../generated/type-graphql/models/User";
import { Approval } from "../generated/type-graphql/models/Approval";

import { MyContext } from "../types";

import { isAuth } from "../middleware/isAuth";

@InputType()
class CommentInput {
	@Field()
	parentId: number;

	@Field()
	receiverId: number;

	@Field()
	body: string;
}

@Resolver(Comment)
export class CommentResolver {
	@Query(() => [Comment])
	async comments(
		@Arg("id", () => Int) id: number,
		@Ctx() { prisma }: MyContext
	): Promise<Comment[] | undefined> {
		return prisma.comment.findMany({ where: { parentId: id } });
	}

	@FieldResolver(() => User)
	sender(@Root() comment: Comment, @Ctx() { userLoader }: MyContext) {
		return userLoader.load(comment.senderId);
	}

	@FieldResolver(() => User)
	receiver(@Root() comment: Comment, @Ctx() { userLoader }: MyContext) {
		return userLoader.load(comment.receiverId);
	}

	@FieldResolver(() => Song, { nullable: true })
	song(@Root() comment: Comment, @Ctx() { prisma }: MyContext) {
		return prisma.song.findUnique({ where: { id: comment.parentId } });
	}

	@Query(() => Comment, { nullable: true })
	comment(
		@Arg("id", () => Int) id: number,
		@Ctx() { prisma }: MyContext
	): Promise<Comment | null> {
		return prisma.comment.findUnique({ where: { id } });
	}

	@FieldResolver(() => Approval, { nullable: true })
	approval(@Root() comment: Comment, @Ctx() { prisma }: MyContext) {
		// if (!comment.approvalId) {
		// 	return null;
		// }
		return prisma.approval.findUnique({
			where: { commentId: comment.id },
		});
	}

	@Mutation(() => Comment)
	@UseMiddleware(isAuth)
	async createComment(
		@Arg("input") input: CommentInput,
		@Ctx() { prisma, req }: MyContext
	): Promise<Comment> {
		return prisma.comment.create({
			data: {
				...input,
				active: true,
				senderId: req.session.userId,
			},
		});
	}

	@Mutation(() => Approval)
	@UseMiddleware(isAuth)
	async updateApproval(
		@Ctx() { prisma }: MyContext,
		@Arg("status", () => String) status: string,
		@Arg("commentId", () => Int) commentId: number,
		@Arg("id", () => Int, { nullable: true }) id?: number | undefined
	): Promise<Approval> {
		let upsertApproval;
		if (id) {
			upsertApproval = await prisma.approval.upsert({
				where: {
					id,
				},
				update: {
					status,
				},
				create: {
					status,
					commentId,
				},
			});
		} else {
			upsertApproval = await prisma.approval.create({
				data: {
					status,
					commentId,
				},
			});
		}

		return upsertApproval;
	}

	@Mutation(() => Boolean)
	@UseMiddleware(isAuth)
	async deleteComment(
		@Arg("id", () => Int) id: number,
		@Ctx() { prisma, req }: MyContext
	): Promise<boolean> {
		// not cascade way
		// const post = await Post.findOne(id);
		// if (!post) {
		//   return false;
		// }
		// if (post.creatorId !== req.session.userId) {
		//   throw new Error("not authorized");
		// }

		// await Updoot.delete({ postId: id });
		// await Post.delete({ id });

		//CHANGE TO AFTER AUTH:
		await prisma.comment.deleteMany({
			where: { id, senderId: req.session.userId },
		});
		return true;
	}
}
