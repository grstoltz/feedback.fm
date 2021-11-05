import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSentMessagesInput } from "../inputs/UserCreateWithoutSentMessagesInput";
import { UserUpdateWithoutSentMessagesInput } from "../inputs/UserUpdateWithoutSentMessagesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutSentMessagesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSentMessagesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSentMessagesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSentMessagesInput, {
    nullable: false
  })
  create!: UserCreateWithoutSentMessagesInput;
}
