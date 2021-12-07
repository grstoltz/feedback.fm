import * as TypeGraphQL from "type-graphql";

export enum ApprovalType {
  APPROVED = "APPROVED",
  DENIED = "DENIED",
  REVIEW = "REVIEW"
}
TypeGraphQL.registerEnumType(ApprovalType, {
  name: "ApprovalType",
  description: undefined,
});
