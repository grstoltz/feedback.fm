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
import { GraphQLUpload, FileUpload } from "graphql-upload";
import { User } from "../generated/type-graphql/models/User";
import { Song } from "../generated/type-graphql/models/Song";

import { MyContext } from "../types";

import { isAuth } from "../middleware/isAuth";
import { createWriteStream } from "fs";

const LIMIT_SONG = 50;

@InputType()
class SongInput {
	@Field()
	title: string;

	@Field()
	mediaUrl: string;

	@Field()
	genre: string;

	@Field()
	mediaType: string;
}

@Resolver(Song)
export class SongResolver {
	@Query(() => [Song])
	async songs(
		@Ctx() { prisma }: MyContext,
		@Arg("limit", () => Int) limit: number
	): Promise<Song[]> {
		return prisma.song.findMany({ take: limit });
	}

	@FieldResolver(() => User)
	owner(@Root() song: Song, @Ctx() { userLoader }: MyContext) {
		return userLoader.load(song.ownerId);
	}

	@Query(() => Song, { nullable: true })
	song(
		@Ctx() { prisma }: MyContext,
		@Arg("id", () => Int) id: number
	): Promise<Song | null> {
		return prisma.song.findUnique({ where: { id } });
	}

	@Mutation(() => Song)
	@UseMiddleware(isAuth)
	createSong(
		@Arg("input") input: SongInput,
		@Ctx() { prisma, req }: MyContext
	): Promise<Song> {
		//create song
		return prisma.song.create({
			data: {
				ownerId: req.session.userId,
				//active: true,
				...input,
			},
		});
	}

	@Mutation(() => Number, { nullable: true })
	@UseMiddleware(isAuth)
	async updateSong(
		@Arg("id", () => Int) id: number,
		@Arg("title") title: string,
		@Arg("mediaUrl") mediaUrl: string,
		@Arg("genre") genre: string,
		@Ctx() { prisma, req }: MyContext
	): Promise<number | null> {
		const updatedSong = await prisma.song.updateMany({
			where: {
				id,
				ownerId: req.session.userId,
			},
			data: {
				title,
				mediaUrl,
				genre,
			},
		});

		return updatedSong?.count;
	}

	@Mutation(() => Boolean)
	async upload(
		@Arg("file", () => GraphQLUpload) file: FileUpload
	): Promise<Boolean> {
		const { createReadStream, filename } = await file;
		const writableStream = createWriteStream(
			`${__dirname}/../../../files/images/${filename}`,
			{ autoClose: true }
		);
		return new Promise((res, rej) => {
			createReadStream()
				.pipe(writableStream)
				.on("finish", () => res(true))
				.on("error", () => rej(false));
		});
	}

	@Mutation(() => Boolean)
	@UseMiddleware(isAuth)
	async deleteSong(
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
		await prisma.song.deleteMany({
			where: { id, ownerId: req.session.userId },
		});
		return true;
	}
}
