import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApprovalCreateInput } from "../../../inputs/ApprovalCreateInput";
import { ApprovalUpdateInput } from "../../../inputs/ApprovalUpdateInput";
import { ApprovalWhereUniqueInput } from "../../../inputs/ApprovalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertApprovalArgs {
  @TypeGraphQL.Field(_type => ApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: ApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApprovalCreateInput, {
    nullable: false
  })
  create!: ApprovalCreateInput;

  @TypeGraphQL.Field(_type => ApprovalUpdateInput, {
    nullable: false
  })
  update!: ApprovalUpdateInput;
}
