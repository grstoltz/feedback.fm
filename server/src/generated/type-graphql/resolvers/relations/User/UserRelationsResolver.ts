import * as TypeGraphQL from "type-graphql";
import { Delivery } from "../../../models/Delivery";
import { Message } from "../../../models/Message";
import { Notification } from "../../../models/Notification";
import { Song } from "../../../models/Song";
import { Transaction } from "../../../models/Transaction";
import { User } from "../../../models/User";
import { UserConversation } from "../../../models/UserConversation";
import { UserConversationsArgs } from "./args/UserConversationsArgs";
import { UserDeliveriesArgs } from "./args/UserDeliveriesArgs";
import { UserReceivedNotificationsArgs } from "./args/UserReceivedNotificationsArgs";
import { UserSentMessagesArgs } from "./args/UserSentMessagesArgs";
import { UserSentNotificationsArgs } from "./args/UserSentNotificationsArgs";
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

  @TypeGraphQL.FieldResolver(_type => [Notification], {
    nullable: false
  })
  async sentNotifications(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserSentNotificationsArgs): Promise<Notification[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).sentNotifications(args);
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

  @TypeGraphQL.FieldResolver(_type => [UserConversation], {
    nullable: false
  })
  async conversations(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserConversationsArgs): Promise<UserConversation[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).conversations(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Delivery], {
    nullable: false
  })
  async deliveries(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserDeliveriesArgs): Promise<Delivery[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).deliveries(args);
  }
}
