import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConversationUpdateOneRequiredWithoutMessagesInput } from "../inputs/ConversationUpdateOneRequiredWithoutMessagesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DeliveryUpdateOneWithoutMessageInput } from "../inputs/DeliveryUpdateOneWithoutMessageInput";
import { EnumMessageTypeFieldUpdateOperationsInput } from "../inputs/EnumMessageTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SongUpdateOneWithoutMessagesInput } from "../inputs/SongUpdateOneWithoutMessagesInput";
import { UserUpdateOneRequiredWithoutSentMessagesInput } from "../inputs/UserUpdateOneRequiredWithoutSentMessagesInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageUpdateWithoutApprovalInput {
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

  @TypeGraphQL.Field(_type => DeliveryUpdateOneWithoutMessageInput, {
    nullable: true
  })
  delivery?: DeliveryUpdateOneWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneWithoutMessagesInput, {
    nullable: true
  })
  song?: SongUpdateOneWithoutMessagesInput | undefined;
}
