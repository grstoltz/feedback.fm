import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageType } from "../../enums/MessageType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class MessageMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  senderId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  conversationId!: number | null;

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
    nullable: true
  })
  sentAt!: Date | null;

  @TypeGraphQL.Field(_type => MessageType, {
    nullable: true
  })
  type!: "MESSAGE" | "FEEDBACK" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;
}
