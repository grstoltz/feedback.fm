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
import { Song } from "../entities/Song";
import { User } from "../entities/User";

import { getConnection } from "typeorm";
import { MyContext } from "../types";

import { isAuth } from "../middleware/isAuth";

interface File {
	id: Number;
	filename: String;
	mimetype: String;
	path: String;
}

@InputType()
class SongInput {
	@Field()
	title: string;

	@Field()
	mediaUrl?: string;

	@Field()
	file?: File;

	@Field()
	mediaType: string;

	@Field()
	genre: string;
}

@Resolver(Song)
export class SongResolver {
	@Query(() => [Song])
	async songs(): Promise<Song[]> {
		return Song.find();
	}

	@FieldResolver(() => User)
	owner(@Root() song: Song, @Ctx() { userLoader }: MyContext) {
		return userLoader.load(song.ownerId);
	}

	@Query(() => Song, { nullable: true })
	song(@Arg("id", () => Int) id: number): Promise<Song | undefined> {
		return Song.findOne(id);
	}

	@Mutation(() => Song)
	@UseMiddleware(isAuth)
	createSong(
		@Arg("input") input: SongInput,
		@Ctx() { req }: MyContext
	): Promise<Song> {
		if (input.file) {
			//Upload file
			//update mediaURL field
			input.mediaUrl;
			//set as audio file
			input.mediaType = "file";
			//create song
			return Song.create({
				ownerId: req.session.userId,
				//active: true,
				...input,
			}).save();
		} else if (input.mediaUrl) {
			return Song.create({
				ownerId: req.session.userId,
				//active: true,
				...input,
			}).save();
		} else {
			throw new Error("No file or URL provided.");
		}
	}

	@Mutation(() => Song, { nullable: true })
	@UseMiddleware(isAuth)
	async updateSong(
		@Arg("id", () => Int) id: number,
		@Arg("title") title: string,
		@Arg("mediaUrl") mediaUrl: string,
		@Arg("genre") genre: string,
		@Ctx() { req }: MyContext
	): Promise<Song | null> {
		const result = await getConnection()
			.createQueryBuilder()
			.update(Song)
			.set({ title, mediaUrl, genre })
			.where('id = :id and "ownerId" = :ownerId', {
				id,
				//CHANGE TO AFTER AUTH:
				ownerId: req.session.userId,
			})
			.returning("*")
			.execute();

		return result.raw[0];
	}

	@Mutation(() => Boolean)
	@UseMiddleware(isAuth)
	async deleteSong(
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
		await Song.delete({ id, ownerId: req.session.userId });
		return true;
	}
}
