import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutMessagesInput } from "../inputs/SongCreateWithoutMessagesInput";
import { SongUpdateWithoutMessagesInput } from "../inputs/SongUpdateWithoutMessagesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpsertWithoutMessagesInput {
  @TypeGraphQL.Field(_type => SongUpdateWithoutMessagesInput, {
    nullable: false
  })
  update!: SongUpdateWithoutMessagesInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutMessagesInput, {
    nullable: false
  })
  create!: SongCreateWithoutMessagesInput;
}
