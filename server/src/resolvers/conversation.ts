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
import { Conversation } from "../generated/type-graphql";

import { MyContext } from "../types";

import { isAuth } from "../middleware/isAuth";

@Resolver(Conversation)
export class ConversationResolver {
	@Query(() => [Message])
	async messages(
		@Arg("id", () => Int) id: number,
		@Ctx() { prisma }: MyContext
	): Promise<Message[] | undefined> {
		return prisma.message.findMany({ where: { senderId: id } });
	}

	//a mutation that creates a convesation between two users
	@Mutation(() => Conversation)
	async createConversation(
		@Arg("participantIds", () => [Number]) participantIds: number[],
		@Ctx() { prisma }: MyContext
	): Promise<Conversation> {
		return prisma.conversation.create({
			data: {
				participants: {
					create: participantIds.map((id) => ({
						userId: id,
					})),
				},
			},
		});
	}

	//a query which returns all messages in a conversation
	@Query(() => [Message])
	async conversationMessages(
		@Arg("id", () => Int) id: number,
		@Ctx() { prisma }: MyContext
	): Promise<Message[] | undefined> {
		return prisma.message.findMany({
			where: {
				conversationId: id,
			},
			orderBy: { createdAt: "desc" },
		});
	}
}
