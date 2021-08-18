import * as TypeGraphQL from "type-graphql";

export enum CommentScalarFieldEnum {
  id = "id",
  parentId = "parentId",
  senderId = "senderId",
  receiverId = "receiverId",
  approvalId = "approvalId",
  active = "active",
  body = "body",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: "CommentScalarFieldEnum",
  description: undefined,
});
