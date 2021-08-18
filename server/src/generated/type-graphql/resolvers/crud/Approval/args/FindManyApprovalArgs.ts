import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ApprovalOrderByInput } from "../../../inputs/ApprovalOrderByInput";
import { ApprovalWhereInput } from "../../../inputs/ApprovalWhereInput";
import { ApprovalWhereUniqueInput } from "../../../inputs/ApprovalWhereUniqueInput";
import { ApprovalScalarFieldEnum } from "../../../../enums/ApprovalScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyApprovalArgs {
  @TypeGraphQL.Field(_type => ApprovalWhereInput, {
    nullable: true
  })
  where?: ApprovalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ApprovalOrderByInput], {
    nullable: true
  })
  orderBy?: ApprovalOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => ApprovalWhereUniqueInput, {
    nullable: true
  })
  cursor?: ApprovalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ApprovalScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "commentId" | "status"> | undefined;
}
