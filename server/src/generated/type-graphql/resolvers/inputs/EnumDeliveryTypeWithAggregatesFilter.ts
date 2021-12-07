import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumDeliveryTypeFilter } from "../inputs/NestedEnumDeliveryTypeFilter";
import { NestedEnumDeliveryTypeWithAggregatesFilter } from "../inputs/NestedEnumDeliveryTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { DeliveryType } from "../../enums/DeliveryType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumDeliveryTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => DeliveryType, {
    nullable: true
  })
  equals?: "DELIVERED" | "SEEN" | undefined;

  @TypeGraphQL.Field(_type => [DeliveryType], {
    nullable: true
  })
  in?: Array<"DELIVERED" | "SEEN"> | undefined;

  @TypeGraphQL.Field(_type => [DeliveryType], {
    nullable: true
  })
  notIn?: Array<"DELIVERED" | "SEEN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDeliveryTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumDeliveryTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDeliveryTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumDeliveryTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumDeliveryTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumDeliveryTypeFilter | undefined;
}
