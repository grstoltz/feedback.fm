import * as TypeGraphQL from "type-graphql";

export enum DeliveryScalarFieldEnum {
  id = "id",
  messageId = "messageId",
  userId = "userId",
  type = "type",
  date = "date"
}
TypeGraphQL.registerEnumType(DeliveryScalarFieldEnum, {
  name: "DeliveryScalarFieldEnum",
  description: undefined,
});
