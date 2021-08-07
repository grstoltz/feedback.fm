import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutCommentsInput } from "../inputs/SongCreateWithoutCommentsInput";
import { SongUpdateWithoutCommentsInput } from "../inputs/SongUpdateWithoutCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpsertWithoutCommentsInput {
  @TypeGraphQL.Field(_type => SongUpdateWithoutCommentsInput, {
    nullable: false
  })
  update!: SongUpdateWithoutCommentsInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutCommentsInput, {
    nullable: false
  })
  create!: SongCreateWithoutCommentsInput;
}
