import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalCreateWithoutCommentInput } from "../inputs/ApprovalCreateWithoutCommentInput";
import { ApprovalWhereUniqueInput } from "../inputs/ApprovalWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalCreateOrConnectWithoutCommentInput {
  @TypeGraphQL.Field(_type => ApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: ApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApprovalCreateWithoutCommentInput, {
    nullable: false
  })
  create!: ApprovalCreateWithoutCommentInput;
}
