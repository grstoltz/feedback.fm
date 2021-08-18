import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ApprovalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ApprovalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApprovalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ApprovalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApprovalScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ApprovalScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  commentId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  status?: StringWithAggregatesFilter | undefined;
}
