import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApprovalOrderByInput } from "../../../inputs/ApprovalOrderByInput";
import { ApprovalScalarWhereWithAggregatesInput } from "../../../inputs/ApprovalScalarWhereWithAggregatesInput";
import { ApprovalWhereInput } from "../../../inputs/ApprovalWhereInput";
import { ApprovalScalarFieldEnum } from "../../../../enums/ApprovalScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApprovalArgs {
  @TypeGraphQL.Field(_type => ApprovalWhereInput, {
    nullable: true
  })
  where?: ApprovalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ApprovalOrderByInput], {
    nullable: true
  })
  orderBy?: ApprovalOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ApprovalScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "commentId" | "status">;

  @TypeGraphQL.Field(_type => ApprovalScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ApprovalScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
