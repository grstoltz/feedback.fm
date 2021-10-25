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
} from "type-graphql";
import { Notification } from "../generated/type-graphql/models/Notification";
import { User } from "../generated/type-graphql/models/User";

import { isAuth } from "../middleware/isAuth";

@InputType()
class NotificationInput {
	@Field()
	receiverId!: number;

	@Field()
	body!: string;

	// @Field()
	// parentId!: number;

	@Field()
	type!: string;

	@Field()
	url: string;
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
	//@UseMiddleware(isAuth)
	async createNotification(
		@Arg("input") input: NotificationInput,
		@Ctx() { prisma }: MyContext,
		@PubSub() pubSub: PubSubEngine
	): Promise<Notification> {
		const notification = await prisma.notification.create({
			data: {
				read: false,
				...input,
			},
		});

		await pubSub.publish("NOTIFICATIONS", notification);

		return notification;
	}

	// Create a query which returns 15 notifications for a user using a cursor for pagination
	@FieldResolver(() => [Notification])
	async notifications(
		@Root() user: User,
		@Arg("skip", () => Number) skip: number,
		@Ctx() { prisma }: MyContext
	): Promise<Notification[]> {
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
