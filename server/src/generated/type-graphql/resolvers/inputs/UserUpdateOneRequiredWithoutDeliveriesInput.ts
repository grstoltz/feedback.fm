import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutDeliveriesInput } from "../inputs/UserCreateOrConnectWithoutDeliveriesInput";
import { UserCreateWithoutDeliveriesInput } from "../inputs/UserCreateWithoutDeliveriesInput";
import { UserUpdateWithoutDeliveriesInput } from "../inputs/UserUpdateWithoutDeliveriesInput";
import { UserUpsertWithoutDeliveriesInput } from "../inputs/UserUpsertWithoutDeliveriesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutDeliveriesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutDeliveriesInput, {
    nullable: true
  })
  create?: UserCreateWithoutDeliveriesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutDeliveriesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutDeliveriesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutDeliveriesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutDeliveriesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutDeliveriesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutDeliveriesInput | undefined;
}
