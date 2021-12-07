import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Message } from "../models/Message";
import { ApprovalType } from "../enums/ApprovalType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Approval {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  commentId!: number;

  @TypeGraphQL.Field(_type => ApprovalType, {
    nullable: false
  })
  status!: "APPROVED" | "DENIED" | "REVIEW";

  Message?: Message | null;
}
