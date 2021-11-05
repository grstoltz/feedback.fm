import * as TypeGraphQL from "type-graphql";

export enum MessageScalarFieldEnum {
  id = "id",
  senderId = "senderId",
  conversationId = "conversationId",
  approvalId = "approvalId",
  songId = "songId",
  text = "text",
  sentAt = "sentAt",
  type = "type",
  updatedAt = "updatedAt",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(MessageScalarFieldEnum, {
  name: "MessageScalarFieldEnum",
  description: undefined,
});
