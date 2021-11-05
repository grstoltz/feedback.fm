import * as TypeGraphQL from "type-graphql";
import { Approval } from "../../../models/Approval";
import { Conversation } from "../../../models/Conversation";
import { Message } from "../../../models/Message";
import { Song } from "../../../models/Song";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Message)
export class MessageRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async sender(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).message.findUnique({
      where: {
        id: message.id,
      },
    }).sender({});
  }

  @TypeGraphQL.FieldResolver(_type => Conversation, {
    nullable: false
  })
  async conversation(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any): Promise<Conversation> {
    return getPrismaFromContext(ctx).message.findUnique({
      where: {
        id: message.id,
      },
    }).conversation({});
  }

  @TypeGraphQL.FieldResolver(_type => Approval, {
    nullable: true
  })
  async approval(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any): Promise<Approval | null> {
    return getPrismaFromContext(ctx).message.findUnique({
      where: {
        id: message.id,
      },
    }).approval({});
  }

  @TypeGraphQL.FieldResolver(_type => Song, {
    nullable: true
  })
  async song(@TypeGraphQL.Root() message: Message, @TypeGraphQL.Ctx() ctx: any): Promise<Song | null> {
    return getPrismaFromContext(ctx).message.findUnique({
      where: {
        id: message.id,
      },
    }).song({});
  }
}
