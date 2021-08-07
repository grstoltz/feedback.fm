import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutOwnerInput } from "../inputs/SongCreateWithoutOwnerInput";
import { SongUpdateWithoutOwnerInput } from "../inputs/SongUpdateWithoutOwnerInput";
import { SongWhereUniqueInput } from "../inputs/SongWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SongUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => SongWhereUniqueInput, {
    nullable: false
  })
  where!: SongWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongUpdateWithoutOwnerInput, {
    nullable: false
  })
  update!: SongUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutOwnerInput, {
    nullable: false
  })
  create!: SongCreateWithoutOwnerInput;
}
