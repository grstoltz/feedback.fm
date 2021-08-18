import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApprovalWhereUniqueInput } from "../../../inputs/ApprovalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueApprovalArgs {
  @TypeGraphQL.Field(_type => ApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: ApprovalWhereUniqueInput;
}
