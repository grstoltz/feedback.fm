import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryCreateInput } from "../../../inputs/DeliveryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateDeliveryArgs {
  @TypeGraphQL.Field(_type => DeliveryCreateInput, {
    nullable: false
  })
  data!: DeliveryCreateInput;
}
