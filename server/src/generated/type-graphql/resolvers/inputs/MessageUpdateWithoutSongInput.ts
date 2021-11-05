import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalUpdateOneWithoutMessageInput } from "../inputs/ApprovalUpdateOneWithoutMessageInput";
import { ConversationUpdateOneRequiredWithoutMessagesInput } from "../inputs/ConversationUpdateOneRequiredWithoutMessagesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumMessageTypeFieldUpdateOperationsInput } from "../inputs/EnumMessageTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSentMessagesInput } from "../inputs/UserUpdateOneRequiredWithoutSentMessagesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageUpdateWithoutSongInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  text?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  sentAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumMessageTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumMessageTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSentMessagesInput, {
    nullable: true
  })
  sender?: UserUpdateOneRequiredWithoutSentMessagesInput | undefined;

  @TypeGraphQL.Field(_type => ConversationUpdateOneRequiredWithoutMessagesInput, {
    nullable: true
  })
  conversation?: ConversationUpdateOneRequiredWithoutMessagesInput | undefined;

  @TypeGraphQL.Field(_type => ApprovalUpdateOneWithoutMessageInput, {
    nullable: true
  })
  approval?: ApprovalUpdateOneWithoutMessageInput | undefined;
}
