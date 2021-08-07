import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateManyUserInputEnvelope } from "../inputs/TransactionCreateManyUserInputEnvelope";
import { TransactionCreateOrConnectWithoutUserInput } from "../inputs/TransactionCreateOrConnectWithoutUserInput";
import { TransactionCreateWithoutUserInput } from "../inputs/TransactionCreateWithoutUserInput";
import { TransactionScalarWhereInput } from "../inputs/TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutUserInput } from "../inputs/TransactionUpdateManyWithWhereWithoutUserInput";
import { TransactionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TransactionUpdateWithWhereUniqueWithoutUserInput";
import { TransactionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TransactionUpsertWithWhereUniqueWithoutUserInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutUserInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  set?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  delete?: TransactionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: TransactionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: TransactionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TransactionScalarWhereInput[] | undefined;
}
