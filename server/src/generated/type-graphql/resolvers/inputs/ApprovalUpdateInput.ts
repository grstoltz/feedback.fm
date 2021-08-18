import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateOneWithoutApprovalInput } from "../inputs/CommentUpdateOneWithoutApprovalInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  commentId?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateOneWithoutApprovalInput, {
    nullable: true
  })
  Comment?: CommentUpdateOneWithoutApprovalInput | undefined;
}
