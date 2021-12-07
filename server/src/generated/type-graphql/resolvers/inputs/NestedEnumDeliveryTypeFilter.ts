import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryType } from "../../enums/DeliveryType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumDeliveryTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumDeliveryTypeFilter, {
    nullable: true
  })
  not?: NestedEnumDeliveryTypeFilter | undefined;
}
