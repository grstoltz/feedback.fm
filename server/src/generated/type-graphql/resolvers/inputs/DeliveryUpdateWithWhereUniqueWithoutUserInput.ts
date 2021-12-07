import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryUpdateWithoutUserInput } from "../inputs/DeliveryUpdateWithoutUserInput";
import { DeliveryWhereUniqueInput } from "../inputs/DeliveryWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => DeliveryWhereUniqueInput, {
    nullable: false
  })
  where!: DeliveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeliveryUpdateWithoutUserInput, {
    nullable: false
  })
  data!: DeliveryUpdateWithoutUserInput;
}
