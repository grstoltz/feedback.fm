import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageAvgAggregate } from "../outputs/MessageAvgAggregate";
import { MessageCountAggregate } from "../outputs/MessageCountAggregate";
import { MessageMaxAggregate } from "../outputs/MessageMaxAggregate";
import { MessageMinAggregate } from "../outputs/MessageMinAggregate";
import { MessageSumAggregate } from "../outputs/MessageSumAggregate";
import { MessageType } from "../../enums/MessageType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class MessageGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

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
  approvalId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  songId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  text!: string | null;

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

  @TypeGraphQL.Field(_type => MessageCountAggregate, {
    nullable: true
  })
  _count!: MessageCountAggregate | null;

  @TypeGraphQL.Field(_type => MessageAvgAggregate, {
    nullable: true
  })
  _avg!: MessageAvgAggregate | null;

  @TypeGraphQL.Field(_type => MessageSumAggregate, {
    nullable: true
  })
  _sum!: MessageSumAggregate | null;

  @TypeGraphQL.Field(_type => MessageMinAggregate, {
    nullable: true
  })
  _min!: MessageMinAggregate | null;

  @TypeGraphQL.Field(_type => MessageMaxAggregate, {
    nullable: true
  })
  _max!: MessageMaxAggregate | null;
}
