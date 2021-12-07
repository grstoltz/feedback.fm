import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DeliveryOrderByInput } from "../../../inputs/DeliveryOrderByInput";
import { DeliveryScalarWhereWithAggregatesInput } from "../../../inputs/DeliveryScalarWhereWithAggregatesInput";
import { DeliveryWhereInput } from "../../../inputs/DeliveryWhereInput";
import { DeliveryScalarFieldEnum } from "../../../../enums/DeliveryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDeliveryArgs {
  @TypeGraphQL.Field(_type => DeliveryWhereInput, {
    nullable: true
  })
  where?: DeliveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [DeliveryOrderByInput], {
    nullable: true
  })
  orderBy?: DeliveryOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [DeliveryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "messageId" | "userId" | "type" | "date">;

  @TypeGraphQL.Field(_type => DeliveryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: DeliveryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
