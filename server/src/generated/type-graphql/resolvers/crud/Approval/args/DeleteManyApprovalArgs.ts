import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApprovalWhereInput } from "../../../inputs/ApprovalWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyApprovalArgs {
  @TypeGraphQL.Field(_type => ApprovalWhereInput, {
    nullable: true
  })
  where?: ApprovalWhereInput | undefined;
}
