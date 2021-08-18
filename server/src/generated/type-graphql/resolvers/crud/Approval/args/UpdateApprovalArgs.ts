import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApprovalUpdateInput } from "../../../inputs/ApprovalUpdateInput";
import { ApprovalWhereUniqueInput } from "../../../inputs/ApprovalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateApprovalArgs {
  @TypeGraphQL.Field(_type => ApprovalUpdateInput, {
    nullable: false
  })
  data!: ApprovalUpdateInput;

  @TypeGraphQL.Field(_type => ApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: ApprovalWhereUniqueInput;
}
