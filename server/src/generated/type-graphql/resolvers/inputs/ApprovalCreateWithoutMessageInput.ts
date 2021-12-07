import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalType } from "../../enums/ApprovalType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalCreateWithoutMessageInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  commentId!: number;

  @TypeGraphQL.Field(_type => ApprovalType, {
    nullable: false
  })
  status!: "APPROVED" | "DENIED" | "REVIEW";
}
