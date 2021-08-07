import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SongOrderByInput } from "../../../inputs/SongOrderByInput";
import { SongWhereInput } from "../../../inputs/SongWhereInput";
import { SongWhereUniqueInput } from "../../../inputs/SongWhereUniqueInput";
import { SongScalarFieldEnum } from "../../../../enums/SongScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSongArgs {
  @TypeGraphQL.Field(_type => SongWhereInput, {
    nullable: true
  })
  where?: SongWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SongOrderByInput], {
    nullable: true
  })
  orderBy?: SongOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: true
  })
  cursor?: SongWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SongScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "mediaUrl" | "mediaType" | "genre" | "ownerId" | "createdAt" | "updatedAt"> | undefined;
}
