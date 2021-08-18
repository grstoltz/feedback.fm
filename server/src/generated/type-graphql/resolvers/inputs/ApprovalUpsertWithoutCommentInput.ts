import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalCreateWithoutCommentInput } from "../inputs/ApprovalCreateWithoutCommentInput";
import { ApprovalUpdateWithoutCommentInput } from "../inputs/ApprovalUpdateWithoutCommentInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalUpsertWithoutCommentInput {
  @TypeGraphQL.Field(_type => ApprovalUpdateWithoutCommentInput, {
    nullable: false
  })
  update!: ApprovalUpdateWithoutCommentInput;

  @TypeGraphQL.Field(_type => ApprovalCreateWithoutCommentInput, {
    nullable: false
  })
  create!: ApprovalCreateWithoutCommentInput;
}
