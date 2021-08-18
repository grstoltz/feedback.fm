import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApprovalCreateInput } from "../../../inputs/ApprovalCreateInput";

@TypeGraphQL.ArgsType()
export class CreateApprovalArgs {
  @TypeGraphQL.Field(_type => ApprovalCreateInput, {
    nullable: false
  })
  data!: ApprovalCreateInput;
}
