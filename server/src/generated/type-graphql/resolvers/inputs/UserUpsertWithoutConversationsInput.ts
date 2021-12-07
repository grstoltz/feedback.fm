import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutConversationsInput } from "../inputs/UserCreateWithoutConversationsInput";
import { UserUpdateWithoutConversationsInput } from "../inputs/UserUpdateWithoutConversationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutConversationsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutConversationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutConversationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutConversationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutConversationsInput;
}
