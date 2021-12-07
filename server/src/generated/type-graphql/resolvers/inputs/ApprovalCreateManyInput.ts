import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalType } from "../../enums/ApprovalType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  commentId!: number;

  @TypeGraphQL.Field(_type => ApprovalType, {
    nullable: false
  })
  status!: "APPROVED" | "DENIED" | "REVIEW";
}
