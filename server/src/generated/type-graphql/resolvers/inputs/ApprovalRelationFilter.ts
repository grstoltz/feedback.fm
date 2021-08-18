import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalWhereInput } from "../inputs/ApprovalWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalRelationFilter {
  @TypeGraphQL.Field(_type => ApprovalWhereInput, {
    nullable: true
  })
  is?: ApprovalWhereInput | undefined;

  @TypeGraphQL.Field(_type => ApprovalWhereInput, {
    nullable: true
  })
  isNot?: ApprovalWhereInput | undefined;
}
