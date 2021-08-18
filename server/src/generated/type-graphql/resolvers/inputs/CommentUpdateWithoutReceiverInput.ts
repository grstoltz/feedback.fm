import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalUpdateOneWithoutCommentInput } from "../inputs/ApprovalUpdateOneWithoutCommentInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SongUpdateOneRequiredWithoutCommentsInput } from "../inputs/SongUpdateOneRequiredWithoutCommentsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSentCommentsInput } from "../inputs/UserUpdateOneRequiredWithoutSentCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpdateWithoutReceiverInput {
  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  body?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ApprovalUpdateOneWithoutCommentInput, {
    nullable: true
  })
  approval?: ApprovalUpdateOneWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSentCommentsInput, {
    nullable: true
  })
  sender?: UserUpdateOneRequiredWithoutSentCommentsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneRequiredWithoutCommentsInput, {
    nullable: true
  })
  parent?: SongUpdateOneRequiredWithoutCommentsInput | undefined;
}
