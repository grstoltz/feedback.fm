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

	@Field()
	parentId!: number;

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
	newNotification(@Root() payload: string): string {
		return payload;
	}

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

	// @FieldResolver(() => User)
	// sender(@Root() notificaion: Notification, @Ctx() { userLoader }: MyContext) {
	// 	return userLoader.load(notificaion.senderId);
	// }

	@FieldResolver(() => User)
	receiver(@Root() notificaion: Notification, @Ctx() { prisma }: MyContext) {
		return prisma.user.findUnique({
			where: {
				id: notificaion.receiverId,
			},
		});
	}
}
