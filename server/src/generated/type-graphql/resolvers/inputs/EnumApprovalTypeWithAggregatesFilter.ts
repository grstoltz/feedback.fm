import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumApprovalTypeFilter } from "../inputs/NestedEnumApprovalTypeFilter";
import { NestedEnumApprovalTypeWithAggregatesFilter } from "../inputs/NestedEnumApprovalTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ApprovalType } from "../../enums/ApprovalType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumApprovalTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumApprovalTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumApprovalTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumApprovalTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumApprovalTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumApprovalTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumApprovalTypeFilter | undefined;
}
