import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateManyUserInputEnvelope } from "../inputs/TransactionCreateManyUserInputEnvelope";
import { TransactionCreateOrConnectWithoutUserInput } from "../inputs/TransactionCreateOrConnectWithoutUserInput";
import { TransactionCreateWithoutUserInput } from "../inputs/TransactionCreateWithoutUserInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [TransactionCreateWithoutUserInput], {
    nullable: true
  })
  create?: TransactionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: TransactionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: TransactionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TransactionWhereUniqueInput], {
    nullable: true
  })
  connect?: TransactionWhereUniqueInput[] | undefined;
}
