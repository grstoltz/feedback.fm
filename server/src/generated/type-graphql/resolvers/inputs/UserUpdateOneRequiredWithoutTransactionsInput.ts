import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTransactionsInput } from "../inputs/UserCreateOrConnectWithoutTransactionsInput";
import { UserCreateWithoutTransactionsInput } from "../inputs/UserCreateWithoutTransactionsInput";
import { UserUpdateWithoutTransactionsInput } from "../inputs/UserUpdateWithoutTransactionsInput";
import { UserUpsertWithoutTransactionsInput } from "../inputs/UserUpsertWithoutTransactionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutTransactionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTransactionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTransactionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTransactionsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTransactionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutTransactionsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutTransactionsInput | undefined;
}
