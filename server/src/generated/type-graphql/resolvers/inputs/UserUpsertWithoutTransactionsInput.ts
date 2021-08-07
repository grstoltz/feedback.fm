import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTransactionsInput } from "../inputs/UserCreateWithoutTransactionsInput";
import { UserUpdateWithoutTransactionsInput } from "../inputs/UserUpdateWithoutTransactionsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTransactionsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTransactionsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTransactionsInput, {
    nullable: false
  })
  create!: UserCreateWithoutTransactionsInput;
}
