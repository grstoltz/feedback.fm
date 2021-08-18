import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutApprovalInput } from "../inputs/CommentCreateWithoutApprovalInput";
import { CommentUpdateWithoutApprovalInput } from "../inputs/CommentUpdateWithoutApprovalInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpsertWithoutApprovalInput {
  @TypeGraphQL.Field(_type => CommentUpdateWithoutApprovalInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutApprovalInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutApprovalInput, {
    nullable: false
  })
  create!: CommentCreateWithoutApprovalInput;
}
