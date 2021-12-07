import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryCreateInput } from "../../../inputs/DeliveryCreateInput";
import { DeliveryUpdateInput } from "../../../inputs/DeliveryUpdateInput";
import { DeliveryWhereUniqueInput } from "../../../inputs/DeliveryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDeliveryArgs {
  @TypeGraphQL.Field(_type => DeliveryWhereUniqueInput, {
    nullable: false
  })
  where!: DeliveryWhereUniqueInput;

  @TypeGraphQL.Field(_type => DeliveryCreateInput, {
    nullable: false
  })
  create!: DeliveryCreateInput;

  @TypeGraphQL.Field(_type => DeliveryUpdateInput, {
    nullable: false
  })
  update!: DeliveryUpdateInput;
}
