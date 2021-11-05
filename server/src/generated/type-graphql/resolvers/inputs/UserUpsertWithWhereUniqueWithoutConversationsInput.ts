import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutConversationsInput } from "../inputs/UserCreateWithoutConversationsInput";
import { UserUpdateWithoutConversationsInput } from "../inputs/UserUpdateWithoutConversationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutConversationsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutConversationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutConversationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutConversationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutConversationsInput;
}
