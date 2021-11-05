import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalCreateWithoutMessageInput } from "../inputs/ApprovalCreateWithoutMessageInput";
import { ApprovalUpdateWithoutMessageInput } from "../inputs/ApprovalUpdateWithoutMessageInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalUpsertWithoutMessageInput {
  @TypeGraphQL.Field(_type => ApprovalUpdateWithoutMessageInput, {
    nullable: false
  })
  update!: ApprovalUpdateWithoutMessageInput;

  @TypeGraphQL.Field(_type => ApprovalCreateWithoutMessageInput, {
    nullable: false
  })
  create!: ApprovalCreateWithoutMessageInput;
}
