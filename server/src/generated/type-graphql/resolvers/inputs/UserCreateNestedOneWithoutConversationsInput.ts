import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutConversationsInput } from "../inputs/UserCreateOrConnectWithoutConversationsInput";
import { UserCreateWithoutConversationsInput } from "../inputs/UserCreateWithoutConversationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutConversationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutConversationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutConversationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutConversationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutConversationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
