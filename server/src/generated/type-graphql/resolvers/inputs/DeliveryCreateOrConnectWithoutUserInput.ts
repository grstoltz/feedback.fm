import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryCreateWithoutUserInput } from "../inputs/DeliveryCreateWithoutUserInput";
import { DeliveryWhereUniqueInput } from "../inputs/DeliveryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => DeliveryWhereUniqueInput, {
    nullable: false
  })
  where!: DeliveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeliveryCreateWithoutUserInput, {
    nullable: false
  })
  create!: DeliveryCreateWithoutUserInput;
}
