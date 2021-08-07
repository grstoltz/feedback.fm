import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSentCommentsInput } from "../inputs/UserCreateWithoutSentCommentsInput";
import { UserUpdateWithoutSentCommentsInput } from "../inputs/UserUpdateWithoutSentCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutSentCommentsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSentCommentsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSentCommentsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSentCommentsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSentCommentsInput;
}
