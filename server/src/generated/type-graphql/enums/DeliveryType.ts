import * as TypeGraphQL from "type-graphql";

export enum DeliveryType {
  DELIVERED = "DELIVERED",
  SEEN = "SEEN"
}
TypeGraphQL.registerEnumType(DeliveryType, {
  name: "DeliveryType",
  description: undefined,
});
