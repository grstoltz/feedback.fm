import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalAvgAggregate } from "../outputs/ApprovalAvgAggregate";
import { ApprovalCountAggregate } from "../outputs/ApprovalCountAggregate";
import { ApprovalMaxAggregate } from "../outputs/ApprovalMaxAggregate";
import { ApprovalMinAggregate } from "../outputs/ApprovalMinAggregate";
import { ApprovalSumAggregate } from "../outputs/ApprovalSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateApproval {
  @TypeGraphQL.Field(_type => ApprovalCountAggregate, {
    nullable: true
  })
  _count!: ApprovalCountAggregate | null;

  @TypeGraphQL.Field(_type => ApprovalAvgAggregate, {
    nullable: true
  })
  _avg!: ApprovalAvgAggregate | null;

  @TypeGraphQL.Field(_type => ApprovalSumAggregate, {
    nullable: true
  })
  _sum!: ApprovalSumAggregate | null;

  @TypeGraphQL.Field(_type => ApprovalMinAggregate, {
    nullable: true
  })
  _min!: ApprovalMinAggregate | null;

  @TypeGraphQL.Field(_type => ApprovalMaxAggregate, {
    nullable: true
  })
  _max!: ApprovalMaxAggregate | null;
}
