import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateManySongInputEnvelope } from "../inputs/MessageCreateManySongInputEnvelope";
import { MessageCreateOrConnectWithoutSongInput } from "../inputs/MessageCreateOrConnectWithoutSongInput";
import { MessageCreateWithoutSongInput } from "../inputs/MessageCreateWithoutSongInput";
import { MessageScalarWhereInput } from "../inputs/MessageScalarWhereInput";
import { MessageUpdateManyWithWhereWithoutSongInput } from "../inputs/MessageUpdateManyWithWhereWithoutSongInput";
import { MessageUpdateWithWhereUniqueWithoutSongInput } from "../inputs/MessageUpdateWithWhereUniqueWithoutSongInput";
import { MessageUpsertWithWhereUniqueWithoutSongInput } from "../inputs/MessageUpsertWithWhereUniqueWithoutSongInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageUpdateManyWithoutSongInput {
  @TypeGraphQL.Field(_type => [MessageCreateWithoutSongInput], {
    nullable: true
  })
  create?: MessageCreateWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageCreateOrConnectWithoutSongInput], {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpsertWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  upsert?: MessageUpsertWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageCreateManySongInputEnvelope, {
    nullable: true
  })
  createMany?: MessageCreateManySongInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  connect?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  set?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereUniqueInput], {
    nullable: true
  })
  delete?: MessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateWithWhereUniqueWithoutSongInput], {
    nullable: true
  })
  update?: MessageUpdateWithWhereUniqueWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageUpdateManyWithWhereWithoutSongInput], {
    nullable: true
  })
  updateMany?: MessageUpdateManyWithWhereWithoutSongInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MessageScalarWhereInput[] | undefined;
}
