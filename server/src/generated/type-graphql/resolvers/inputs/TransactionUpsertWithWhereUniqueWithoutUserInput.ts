import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TransactionCreateWithoutUserInput } from "../inputs/TransactionCreateWithoutUserInput";
import { TransactionUpdateWithoutUserInput } from "../inputs/TransactionUpdateWithoutUserInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TransactionUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: false
  })
  where!: TransactionWhereUniqueInput;

  @TypeGraphQL.Field(_type => TransactionUpdateWithoutUserInput, {
    nullable: false
  })
  update!: TransactionUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => TransactionCreateWithoutUserInput, {
    nullable: false
  })
  create!: TransactionCreateWithoutUserInput;
}
