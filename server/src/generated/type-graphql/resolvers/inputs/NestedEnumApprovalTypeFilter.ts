import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalType } from "../../enums/ApprovalType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumApprovalTypeFilter {
  @TypeGraphQL.Field(_type => ApprovalType, {
    nullable: true
  })
  equals?: "APPROVED" | "DENIED" | "REVIEW" | undefined;

  @TypeGraphQL.Field(_type => [ApprovalType], {
    nullable: true
  })
  in?: Array<"APPROVED" | "DENIED" | "REVIEW"> | undefined;

  @TypeGraphQL.Field(_type => [ApprovalType], {
    nullable: true
  })
  notIn?: Array<"APPROVED" | "DENIED" | "REVIEW"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumApprovalTypeFilter, {
    nullable: true
  })
  not?: NestedEnumApprovalTypeFilter | undefined;
}
