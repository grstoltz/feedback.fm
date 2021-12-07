import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Approval } from "../models/Approval";
import { Conversation } from "../models/Conversation";
import { Delivery } from "../models/Delivery";
import { Song } from "../models/Song";
import { User } from "../models/User";
import { MessageType } from "../enums/MessageType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Message {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  sender?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  senderId!: number;

  conversation?: Conversation;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  conversationId!: number;

  delivery?: Delivery | null;

  approval?: Approval | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  approvalId?: number | null;

  song?: Song | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  songId?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  text?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  sentAt!: Date;

  @TypeGraphQL.Field(_type => MessageType, {
    nullable: false
  })
  type!: "MESSAGE" | "FEEDBACK";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;
}
