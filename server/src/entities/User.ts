import { ObjectType, Field } from "type-graphql";
import { Song } from "./Song";
import { Comment } from "./Comment";
import { Notification } from "./Notification";

@ObjectType()
export class User {
	@Field()
	id!: number;

	@Field()
	username!: string;

	@Field()
	email!: string;

	password!: string;

	@Field()
	avatarURL: string;

	@Field()
	balance: number;

	notifications: Notification[];

	songs: Song[];

	sentComments: Comment[];

	receivedComments: Comment[];

	@Field(() => String)
	createdAt: Date;

	@Field(() => String)
	updatedAt: Date;
}
