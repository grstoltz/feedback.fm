import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumApprovalTypeFieldUpdateOperationsInput } from "../inputs/EnumApprovalTypeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  commentId?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumApprovalTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: EnumApprovalTypeFieldUpdateOperationsInput | undefined;
}
