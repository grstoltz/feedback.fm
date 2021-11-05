import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutReceivedNotificationsInput } from "../inputs/UserCreateWithoutReceivedNotificationsInput";
import { UserUpdateWithoutReceivedNotificationsInput } from "../inputs/UserUpdateWithoutReceivedNotificationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutReceivedNotificationsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutReceivedNotificationsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutReceivedNotificationsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedNotificationsInput, {
    nullable: false
  })
  create!: UserCreateWithoutReceivedNotificationsInput;
}
