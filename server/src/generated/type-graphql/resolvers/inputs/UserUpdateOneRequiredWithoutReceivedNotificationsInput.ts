import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReceivedNotificationsInput } from "../inputs/UserCreateOrConnectWithoutReceivedNotificationsInput";
import { UserCreateWithoutReceivedNotificationsInput } from "../inputs/UserCreateWithoutReceivedNotificationsInput";
import { UserUpdateWithoutReceivedNotificationsInput } from "../inputs/UserUpdateWithoutReceivedNotificationsInput";
import { UserUpsertWithoutReceivedNotificationsInput } from "../inputs/UserUpsertWithoutReceivedNotificationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutReceivedNotificationsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedNotificationsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReceivedNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReceivedNotificationsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReceivedNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutReceivedNotificationsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutReceivedNotificationsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutReceivedNotificationsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutReceivedNotificationsInput | undefined;
}
