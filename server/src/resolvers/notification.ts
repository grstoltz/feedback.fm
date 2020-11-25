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
} from "type-graphql";
import { Notification } from "../entities/Notification";
import { User } from "../entities/User";

import { isAuth } from "../middleware/isAuth";

@InputType()
class NotificationInput {
	@Field()
	receiverId!: number;

	@Field()
	message!: string;
}

@Resolver(Notification)
export class NotificationResolver {
	@Mutation(() => Notification)
	@UseMiddleware(isAuth)
	async createNotification(
		@Arg("input") input: NotificationInput,
		@Ctx() { req }: MyContext
	): Promise<Notification> {
		return Notification.create({
			...input,
			senderId: req.session.userId,
		}).save();
	}

	@FieldResolver(() => User)
	sender(@Root() notificaion: Notification, @Ctx() { userLoader }: MyContext) {
		return userLoader.load(notificaion.senderId);
	}

	@FieldResolver(() => User)
	receiver(
		@Root() notificaion: Notification,
		@Ctx() { userLoader }: MyContext
	) {
		return userLoader.load(notificaion.receiverId);
	}
}
