import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateWithoutApprovalInput } from "../inputs/MessageCreateWithoutApprovalInput";
import { MessageUpdateWithoutApprovalInput } from "../inputs/MessageUpdateWithoutApprovalInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageUpsertWithoutApprovalInput {
  @TypeGraphQL.Field(_type => MessageUpdateWithoutApprovalInput, {
    nullable: false
  })
  update!: MessageUpdateWithoutApprovalInput;

  @TypeGraphQL.Field(_type => MessageCreateWithoutApprovalInput, {
    nullable: false
  })
  create!: MessageCreateWithoutApprovalInput;
}
