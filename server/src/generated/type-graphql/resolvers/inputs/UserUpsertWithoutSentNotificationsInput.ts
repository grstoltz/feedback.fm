import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSentNotificationsInput } from "../inputs/UserCreateWithoutSentNotificationsInput";
import { UserUpdateWithoutSentNotificationsInput } from "../inputs/UserUpdateWithoutSentNotificationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutSentNotificationsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSentNotificationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSentNotificationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSentNotificationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutSentNotificationsInput;
}
