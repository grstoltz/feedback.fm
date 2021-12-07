import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryUpdateManyMutationInput } from "../../../inputs/DeliveryUpdateManyMutationInput";
import { DeliveryWhereInput } from "../../../inputs/DeliveryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDeliveryArgs {
  @TypeGraphQL.Field(_type => DeliveryUpdateManyMutationInput, {
    nullable: false
  })
  data!: DeliveryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DeliveryWhereInput, {
    nullable: true
  })
  where?: DeliveryWhereInput | undefined;
}
