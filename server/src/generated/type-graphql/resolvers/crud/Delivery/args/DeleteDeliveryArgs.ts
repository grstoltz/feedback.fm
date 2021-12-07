import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryWhereUniqueInput } from "../../../inputs/DeliveryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteDeliveryArgs {
  @TypeGraphQL.Field(_type => DeliveryWhereUniqueInput, {
    nullable: false
  })
  where!: DeliveryWhereUniqueInput;
}
