import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApprovalUpdateManyMutationInput } from "../../../inputs/ApprovalUpdateManyMutationInput";
import { ApprovalWhereInput } from "../../../inputs/ApprovalWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApprovalArgs {
  @TypeGraphQL.Field(_type => ApprovalUpdateManyMutationInput, {
    nullable: false
  })
  data!: ApprovalUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ApprovalWhereInput, {
    nullable: true
  })
  where?: ApprovalWhereInput | undefined;
}
