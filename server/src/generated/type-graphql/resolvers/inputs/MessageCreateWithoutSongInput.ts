import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalCreateNestedOneWithoutMessageInput } from "../inputs/ApprovalCreateNestedOneWithoutMessageInput";
import { ConversationCreateNestedOneWithoutMessagesInput } from "../inputs/ConversationCreateNestedOneWithoutMessagesInput";
import { DeliveryCreateNestedOneWithoutMessageInput } from "../inputs/DeliveryCreateNestedOneWithoutMessageInput";
import { UserCreateNestedOneWithoutSentMessagesInput } from "../inputs/UserCreateNestedOneWithoutSentMessagesInput";
import { MessageType } from "../../enums/MessageType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateWithoutSongInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  text?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  sentAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MessageType, {
    nullable: false
  })
  type!: "MESSAGE" | "FEEDBACK";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSentMessagesInput, {
    nullable: false
  })
  sender!: UserCreateNestedOneWithoutSentMessagesInput;

  @TypeGraphQL.Field(_type => ConversationCreateNestedOneWithoutMessagesInput, {
    nullable: false
  })
  conversation!: ConversationCreateNestedOneWithoutMessagesInput;

  @TypeGraphQL.Field(_type => DeliveryCreateNestedOneWithoutMessageInput, {
    nullable: true
  })
  delivery?: DeliveryCreateNestedOneWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => ApprovalCreateNestedOneWithoutMessageInput, {
    nullable: true
  })
  approval?: ApprovalCreateNestedOneWithoutMessageInput | undefined;
}
