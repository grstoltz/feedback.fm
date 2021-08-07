import { ObjectType, Field } from "type-graphql";
import { User } from "./User";
import { Comment } from "./Comment";

@ObjectType()
export class Song {
	@Field()
	id!: number;

	@Field()
	title!: string;

	@Field()
	mediaUrl!: string;

	@Field()
	mediaType!: string;

	@Field()
	genre: string;

	@Field()
	ownerId: number;

	@Field(() => User)
	owner: User;

	@Field(() => Comment)
	comments: Comment[];

	@Field(() => String)
	createdAt: Date;

	@Field(() => String)
	updatedAt: Date;
}
