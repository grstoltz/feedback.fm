import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryCreateWithoutMessageInput } from "../inputs/DeliveryCreateWithoutMessageInput";
import { DeliveryUpdateWithoutMessageInput } from "../inputs/DeliveryUpdateWithoutMessageInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryUpsertWithoutMessageInput {
  @TypeGraphQL.Field(_type => DeliveryUpdateWithoutMessageInput, {
    nullable: false
  })
  update!: DeliveryUpdateWithoutMessageInput;

  @TypeGraphQL.Field(_type => DeliveryCreateWithoutMessageInput, {
    nullable: false
  })
  create!: DeliveryCreateWithoutMessageInput;
}
