import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryWhereInput } from "../../../inputs/DeliveryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDeliveryArgs {
  @TypeGraphQL.Field(_type => DeliveryWhereInput, {
    nullable: true
  })
  where?: DeliveryWhereInput | undefined;
}
