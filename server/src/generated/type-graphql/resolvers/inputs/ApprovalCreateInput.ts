import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateNestedOneWithoutApprovalInput } from "../inputs/MessageCreateNestedOneWithoutApprovalInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  commentId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => MessageCreateNestedOneWithoutApprovalInput, {
    nullable: true
  })
  Message?: MessageCreateNestedOneWithoutApprovalInput | undefined;
}
