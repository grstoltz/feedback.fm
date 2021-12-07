import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalType } from "../../enums/ApprovalType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumApprovalTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ApprovalType, {
    nullable: true
  })
  set?: "APPROVED" | "DENIED" | "REVIEW" | undefined;
}
