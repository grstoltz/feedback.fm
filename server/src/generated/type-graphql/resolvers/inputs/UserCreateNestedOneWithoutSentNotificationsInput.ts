import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSentNotificationsInput } from "../inputs/UserCreateOrConnectWithoutSentNotificationsInput";
import { UserCreateWithoutSentNotificationsInput } from "../inputs/UserCreateWithoutSentNotificationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutSentNotificationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSentNotificationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSentNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSentNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSentNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
