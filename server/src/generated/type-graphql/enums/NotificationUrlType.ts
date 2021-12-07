import * as TypeGraphQL from "type-graphql";

export enum NotificationUrlType {
  SONG = "SONG",
  FEEDBACK = "FEEDBACK",
  MESSAGE = "MESSAGE"
}
TypeGraphQL.registerEnumType(NotificationUrlType, {
  name: "NotificationUrlType",
  description: undefined,
});
