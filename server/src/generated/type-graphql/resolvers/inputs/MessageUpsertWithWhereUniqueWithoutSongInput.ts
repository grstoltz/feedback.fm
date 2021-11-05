import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutSongInput } from "../inputs/MessageCreateWithoutSongInput";
import { MessageUpdateWithoutSongInput } from "../inputs/MessageUpdateWithoutSongInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageUpsertWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: false
  })
  where!: MessageWhereUniqueInput;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutSongInput, {
    nullable: false
  })
  update!: MessageUpdateWithoutSongInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutSongInput, {
    nullable: false
  })
  create!: MessageCreateWithoutSongInput;
}
