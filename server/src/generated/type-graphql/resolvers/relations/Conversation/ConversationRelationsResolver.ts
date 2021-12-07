import * as TypeGraphQL from "type-graphql";
import { Conversation } from "../../../models/Conversation";
import { Message } from "../../../models/Message";
import { UserConversation } from "../../../models/UserConversation";
import { ConversationMessagesArgs } from "./args/ConversationMessagesArgs";
import { ConversationParticipantsArgs } from "./args/ConversationParticipantsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Conversation)
export class ConversationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [UserConversation], {
    nullable: false
  })
  async participants(@TypeGraphQL.Root() conversation: Conversation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ConversationParticipantsArgs): Promise<UserConversation[]> {
    return getPrismaFromContext(ctx).conversation.findUnique({
      where: {
        id: conversation.id,
      },
    }).participants(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false
  })
  async messages(@TypeGraphQL.Root() conversation: Conversation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ConversationMessagesArgs): Promise<Message[]> {
    return getPrismaFromContext(ctx).conversation.findUnique({
      where: {
        id: conversation.id,
      },
    }).messages(args);
  }
}
