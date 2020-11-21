import { MyContext } from "src/types";
import {
	Resolver,
	UseMiddleware,
	Mutation,
	Arg,
	Field,
	Ctx,
	InputType,
} from "type-graphql";
import { Notification } from "../entities/Notification";

import { isAuth } from "../middleware/isAuth";

@InputType()
class NotificationInput {
	@Field()
	receiverId!: number;

	@Field()
	senderId!: number;

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
}
