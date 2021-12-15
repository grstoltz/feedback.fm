import { MyContext } from "src/types";
import {
	Resolver,
	UseMiddleware,
	Mutation,
	Arg,
	Field,
	Ctx,
	InputType,
	FieldResolver,
	Root,
	Subscription,
	PubSub,
	PubSubEngine,
	Query,
	Int,
} from "type-graphql";
import { Notification } from "../generated/type-graphql/models/Notification";
import { User } from "../generated/type-graphql/models/User";

import { isAuth } from "../middleware/isAuth";

import {
	NotificationType,
	NotificationUrlType,
} from "../generated/type-graphql";

@InputType()
class NotificationInput {
	@Field()
	receiverId!: number;

	@Field()
	body!: string;

	@Field()
	type!: NotificationType;

	@Field()
	url!: string;

	@Field()
	urlType!: NotificationUrlType;

	@Field()
	parentId: number;
}

@Resolver(Notification)
export class NotificationResolver {
	@Subscription({
		topics: "NOTIFICATIONS", // single topic
	})
	newNotification(@Root() notification: Notification): Notification {
		return notification;
	}

	// Subscription: {
	// 	newNotification: {
	// 	  subscribe: () => pubSub.asyncIterator(["NOTIFICATIONS"]),
	// 	},
	//   }

	@Mutation(() => Notification)
	@UseMiddleware(isAuth)
	async createNotification(
		@Arg("input") input: NotificationInput,
		@Ctx() { req, prisma }: MyContext,
		@PubSub() pubSub: PubSubEngine
	): Promise<Notification> {
		const notification = await prisma.notification.create({
			data: {
				read: false,
				senderId: req.session.userId,
				...input,
			},
		});

		await pubSub.publish("NOTIFICATIONS", notification);

		return notification;
	}

	@Query(() => [Notification], { nullable: true })
	@UseMiddleware(isAuth)
	async getNotifications(
		@Arg("skip", () => Int) skip: number,
		@Ctx() { req, prisma }: MyContext
	): Promise<Notification[] | null> {
		return prisma.notification.findMany({
			where: {
				receiverId: req.session.userId,
			},
			skip,
			take: 15,
			orderBy: {
				createdAt: "desc",
			},
		});
	}

	@Query(() => Boolean)
	@UseMiddleware(isAuth)
	async unreadNotifications(
		@Ctx() { req, prisma }: MyContext
	): Promise<Boolean> {
		const notifications = await prisma.notification.findMany({
			where: {
				receiverId: req.session.userId,
				read: false,
			},
		});

		if (notifications.length > 0) {
			return true;
		}

		return false;
	}

	@FieldResolver(() => User)
	receiver(@Root() notificaion: Notification, @Ctx() { prisma }: MyContext) {
		return prisma.user.findUnique({
			where: {
				id: notificaion.receiverId,
			},
		});
	}
}
