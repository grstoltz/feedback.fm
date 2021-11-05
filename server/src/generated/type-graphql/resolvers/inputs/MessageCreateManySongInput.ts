import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageType } from "../../enums/MessageType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageCreateManySongInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  senderId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  conversationId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  approvalId?: number | undefined;

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
}
