import * as TypeGraphQL from "type-graphql";
import { Approval } from "../../../models/Approval";
import { Comment } from "../../../models/Comment";
import { Song } from "../../../models/Song";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Comment)
export class CommentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Approval, {
    nullable: true
  })
  async approval(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Approval | null> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).approval({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async sender(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).sender({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async receiver(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).receiver({});
  }

  @TypeGraphQL.FieldResolver(_type => Song, {
    nullable: false
  })
  async parent(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: any): Promise<Song> {
    return getPrismaFromContext(ctx).comment.findUnique({
      where: {
        id: comment.id,
      },
    }).parent({});
  }
}
