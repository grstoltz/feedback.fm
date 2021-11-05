import * as TypeGraphQL from "type-graphql";

export enum MessageType {
  MESSAGE = "MESSAGE",
  FEEDBACK = "FEEDBACK"
}
TypeGraphQL.registerEnumType(MessageType, {
  name: "MessageType",
  description: undefined,
});
