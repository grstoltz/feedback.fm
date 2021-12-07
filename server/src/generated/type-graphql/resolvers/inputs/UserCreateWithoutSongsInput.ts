import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryCreateNestedManyWithoutUserInput } from "../inputs/DeliveryCreateNestedManyWithoutUserInput";
import { MessageCreateNestedManyWithoutSenderInput } from "../inputs/MessageCreateNestedManyWithoutSenderInput";
import { NotificationCreateNestedManyWithoutReceiverInput } from "../inputs/NotificationCreateNestedManyWithoutReceiverInput";
import { NotificationCreateNestedManyWithoutSenderInput } from "../inputs/NotificationCreateNestedManyWithoutSenderInput";
import { TransactionCreateNestedManyWithoutUserInput } from "../inputs/TransactionCreateNestedManyWithoutUserInput";
import { UserConversationCreateNestedManyWithoutUserInput } from "../inputs/UserConversationCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateWithoutSongsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatarURL?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutSenderInput, {
    nullable: true
  })
  sentMessages?: MessageCreateNestedManyWithoutSenderInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutReceiverInput, {
    nullable: true
  })
  receivedNotifications?: NotificationCreateNestedManyWithoutReceiverInput | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateNestedManyWithoutSenderInput, {
    nullable: true
  })
  sentNotifications?: NotificationCreateNestedManyWithoutSenderInput | undefined;

  @TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  transactions?: TransactionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => UserConversationCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  conversations?: UserConversationCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => DeliveryCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  deliveries?: DeliveryCreateNestedManyWithoutUserInput | undefined;
}
