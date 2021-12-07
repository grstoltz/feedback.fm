import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalType } from "../../enums/ApprovalType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ApprovalMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  commentId!: number | null;

  @TypeGraphQL.Field(_type => ApprovalType, {
    nullable: true
  })
  status!: "APPROVED" | "DENIED" | "REVIEW" | null;
}
