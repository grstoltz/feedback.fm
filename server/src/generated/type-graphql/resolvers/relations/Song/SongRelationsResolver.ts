import * as TypeGraphQL from "type-graphql";
import { Message } from "../../../models/Message";
import { Song } from "../../../models/Song";
import { User } from "../../../models/User";
import { SongMessagesArgs } from "./args/SongMessagesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Song)
export class SongRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).owner({});
  }

  @TypeGraphQL.FieldResolver(_type => [Message], {
    nullable: false
  })
  async Messages(@TypeGraphQL.Root() song: Song, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: SongMessagesArgs): Promise<Message[]> {
    return getPrismaFromContext(ctx).song.findUnique({
      where: {
        id: song.id,
      },
    }).Messages(args);
  }
}
