import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryScalarWhereInput } from "../inputs/DeliveryScalarWhereInput";
import { DeliveryUpdateManyMutationInput } from "../inputs/DeliveryUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DeliveryUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => DeliveryScalarWhereInput, {
    nullable: false
  })
  where!: DeliveryScalarWhereInput;

  @TypeGraphQL.Field(_type => DeliveryUpdateManyMutationInput, {
    nullable: false
  })
  data!: DeliveryUpdateManyMutationInput;
}
