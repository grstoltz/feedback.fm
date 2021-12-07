import * as TypeGraphQL from "type-graphql";

export enum NotificationScalarFieldEnum {
  id = "id",
  receiverId = "receiverId",
  senderId = "senderId",
  parentId = "parentId",
  read = "read",
  type = "type",
  url = "url",
  urlType = "urlType",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(NotificationScalarFieldEnum, {
  name: "NotificationScalarFieldEnum",
  description: undefined,
});
