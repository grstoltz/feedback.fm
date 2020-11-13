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

import { Comment } from "../entities/Comment";
import { User } from "../entities/User";
import { Song } from "../entities/Song";

import { MyContext } from "../types";

import { isAuth } from "../middleware/isAuth";

@InputType()
class CommentInput {
	@Field()
	parentId: number;

	@Field()
	receiverId: number;

	@Field()
	senderId: number;

	@Field()
	body: string;
}

@Resolver(Comment)
export class CommentResolver {
	@Query(() => [Comment])
	async comments(
		@Arg("id", () => Int) id: number
	): Promise<Comment[] | undefined> {
		return Comment.find({ parentId: id });
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
	parent(@Root() comment: Comment) {
		return Song.findOne(comment.parentId);
	}

	@Query(() => Comment, { nullable: true })
	comment(@Arg("id", () => Int) id: number): Promise<Comment | undefined> {
		return Comment.findOne(id);
	}

	@Mutation(() => Comment)
	@UseMiddleware(isAuth)
	async createComment(
		@Arg("input") input: CommentInput,
		@Ctx() { req }: MyContext
	): Promise<Comment> {
		return Comment.create({
			...input,
			senderId: req.session.userId,
		}).save();
	}

	@Mutation(() => Boolean)
	@UseMiddleware(isAuth)
	async deleteComment(
		@Arg("id", () => Int) id: number,
		@Ctx() { req }: MyContext
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
		await Comment.delete({ id, senderId: req.session.userId });
		return true;
	}
}
