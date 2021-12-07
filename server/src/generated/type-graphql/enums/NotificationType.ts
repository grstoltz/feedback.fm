import * as TypeGraphQL from "type-graphql";

export enum NotificationType {
  MESSAGE = "MESSAGE",
  APPROVED = "APPROVED",
  DENIED = "DENIED",
  FEEDBACK = "FEEDBACK"
}
TypeGraphQL.registerEnumType(NotificationType, {
  name: "NotificationType",
  description: undefined,
});
