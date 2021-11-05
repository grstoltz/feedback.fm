import * as TypeGraphQL from "type-graphql";

export enum NotificationScalarFieldEnum {
  id = "id",
  receiverId = "receiverId",
  senderId = "senderId",
  read = "read",
  type = "type",
  url = "url",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(NotificationScalarFieldEnum, {
  name: "NotificationScalarFieldEnum",
  description: undefined,
});
