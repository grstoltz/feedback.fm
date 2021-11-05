import * as TypeGraphQL from "type-graphql";
import { Conversation } from "../../../models/Conversation";
import { Message } from "../../../models/Message";
import { Notification } from "../../../models/Notification";
import { Song } from "../../../models/Song";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { UserConversationsArgs } from "./args/UserConversationsArgs";
import { UserReceivedNotificationsArgs } from "./args/UserReceivedNotificationsArgs";
import { UserSentMessagesArgs } from "./args/UserSentMessagesArgs";
import { UserSongsArgs } from "./args/UserSongsArgs";
import { UserTransactionsArgs } from "./args/UserTransactionsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Song], {
    nullable: false
  })
  async songs(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSongsArgs): Promise<Song[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).songs(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false
  })
  async sentMessages(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSentMessagesArgs): Promise<Message[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).sentMessages(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Notification], {
    nullable: false
  })
  async receivedNotifications(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserReceivedNotificationsArgs): Promise<Notification[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).receivedNotifications(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Transaction], {
    nullable: false
  })
  async transactions(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserTransactionsArgs): Promise<Transaction[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).transactions(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Conversation], {
    nullable: false
  })
  async conversations(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserConversationsArgs): Promise<Conversation[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).conversations(args);
  }
}
