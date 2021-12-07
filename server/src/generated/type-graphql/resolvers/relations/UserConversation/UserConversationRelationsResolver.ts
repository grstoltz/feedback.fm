import * as TypeGraphQL from "type-graphql";
import { Conversation } from "../../../models/Conversation";
import { User } from "../../../models/User";
import { UserConversation } from "../../../models/UserConversation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserConversation)
export class UserConversationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() userConversation: UserConversation, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).userConversation.findUnique({
      where: {
        userId_conversationId: {
          userId: userConversation.userId,
          conversationId: userConversation.conversationId,
        },
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => Conversation, {
    nullable: false
  })
  async conversation(@TypeGraphQL.Root() userConversation: UserConversation, @TypeGraphQL.Ctx() ctx: any): Promise<Conversation> {
    return getPrismaFromContext(ctx).userConversation.findUnique({
      where: {
        userId_conversationId: {
          userId: userConversation.userId,
          conversationId: userConversation.conversationId,
        },
      },
    }).conversation({});
  }
}
