import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryUpdateInput } from "../../../inputs/DeliveryUpdateInput";
import { DeliveryWhereUniqueInput } from "../../../inputs/DeliveryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDeliveryArgs {
  @TypeGraphQL.Field(_type => DeliveryUpdateInput, {
    nullable: false
  })
  data!: DeliveryUpdateInput;

  @TypeGraphQL.Field(_type => DeliveryWhereUniqueInput, {
    nullable: false
  })
  where!: DeliveryWhereUniqueInput;
}
