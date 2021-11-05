import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConversationUpdateManyWithoutParticipantsInput } from "../inputs/ConversationUpdateManyWithoutParticipantsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MessageUpdateManyWithoutSenderInput } from "../inputs/MessageUpdateManyWithoutSenderInput";
import { NotificationUpdateManyWithoutReceiverInput } from "../inputs/NotificationUpdateManyWithoutReceiverInput";
import { SongUpdateManyWithoutOwnerInput } from "../inputs/SongUpdateManyWithoutOwnerInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutUserInput } from "../inputs/TransactionUpdateManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  username?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  avatarURL?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  songs?: SongUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateManyWithoutSenderInput, {
    nullable: true
  })
  sentMessages?: MessageUpdateManyWithoutSenderInput | undefined;

  @TypeGraphQL.Field(_type => NotificationUpdateManyWithoutReceiverInput, {
    nullable: true
  })
  receivedNotifications?: NotificationUpdateManyWithoutReceiverInput | undefined;

  @TypeGraphQL.Field(_type => TransactionUpdateManyWithoutUserInput, {
    nullable: true
  })
  transactions?: TransactionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => ConversationUpdateManyWithoutParticipantsInput, {
    nullable: true
  })
  conversations?: ConversationUpdateManyWithoutParticipantsInput | undefined;
}
