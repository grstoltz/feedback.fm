import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutDeliveriesInput } from "../inputs/UserCreateWithoutDeliveriesInput";
import { UserUpdateWithoutDeliveriesInput } from "../inputs/UserUpdateWithoutDeliveriesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutDeliveriesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutDeliveriesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutDeliveriesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutDeliveriesInput, {
    nullable: false
  })
  create!: UserCreateWithoutDeliveriesInput;
}
