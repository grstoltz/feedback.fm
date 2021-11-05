import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManySongInputEnvelope } from "../inputs/MessageCreateManySongInputEnvelope";
import { MessageCreateOrConnectWithoutSongInput } from "../inputs/MessageCreateOrConnectWithoutSongInput";
import { MessageCreateWithoutSongInput } from "../inputs/MessageCreateWithoutSongInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateNestedManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutSongInput], {
    nullable: true
  })
  create?: MessageCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;
}
