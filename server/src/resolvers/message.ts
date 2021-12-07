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

import { Song } from "../generated/type-graphql/models/Song";
import { Message } from "../generated/type-graphql/models/Message";
import { User } from "../generated/type-graphql/models/User";
import { Approval } from "../generated/type-graphql/models/Approval";

import { MyContext } from "../types";

import { isAuth } from "../middleware/isAuth";

@Resolver(Message)
export class MessageResolver {
	@Query(() => [Message])
	async messages(
		@Arg("id", () => Int) id: number,
		@Ctx() { prisma }: MyContext
	): Promise<Message[] | undefined> {
		return prisma.message.findMany({ where: { senderId: id } });
	}

	//a query which returns all messages in a conversation
	@Query(() => [Message])
	async conversation(
		@Arg("id", () => Int) id: number,
		@Ctx() { prisma }: MyContext
	): Promise<Message[] | undefined> {
		return prisma.message.findMany({
			where: {
				id: id,
			},
			orderBy: { createdAt: "desc" },
		});
	}
}
