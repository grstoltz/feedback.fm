import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalCreateNestedOneWithoutMessageInput } from "../inputs/ApprovalCreateNestedOneWithoutMessageInput";
import { SongCreateNestedOneWithoutMessagesInput } from "../inputs/SongCreateNestedOneWithoutMessagesInput";
import { UserCreateNestedOneWithoutSentMessagesInput } from "../inputs/UserCreateNestedOneWithoutSentMessagesInput";
import { MessageType } from "../../enums/MessageType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateWithoutConversationInput {
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

  @TypeGraphQL.Field(_type => ApprovalCreateNestedOneWithoutMessageInput, {
    nullable: true
  })
  approval?: ApprovalCreateNestedOneWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutMessagesInput, {
    nullable: true
  })
  song?: SongCreateNestedOneWithoutMessagesInput | undefined;
}