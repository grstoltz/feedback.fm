import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryCreateWithoutMessageInput } from "../inputs/DeliveryCreateWithoutMessageInput";
import { DeliveryWhereUniqueInput } from "../inputs/DeliveryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryCreateOrConnectWithoutMessageInput {
  @TypeGraphQL.Field(_type => DeliveryWhereUniqueInput, {
    nullable: false
  })
  where!: DeliveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeliveryCreateWithoutMessageInput, {
    nullable: false
  })
  create!: DeliveryCreateWithoutMessageInput;
}
