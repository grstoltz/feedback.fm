import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReceivedNotificationsInput } from "../inputs/UserCreateOrConnectWithoutReceivedNotificationsInput";
import { UserCreateWithoutReceivedNotificationsInput } from "../inputs/UserCreateWithoutReceivedNotificationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutReceivedNotificationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedNotificationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReceivedNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReceivedNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReceivedNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
