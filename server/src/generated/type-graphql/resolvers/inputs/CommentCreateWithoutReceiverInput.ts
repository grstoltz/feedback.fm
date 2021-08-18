import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalCreateNestedOneWithoutCommentInput } from "../inputs/ApprovalCreateNestedOneWithoutCommentInput";
import { SongCreateNestedOneWithoutCommentsInput } from "../inputs/SongCreateNestedOneWithoutCommentsInput";
import { UserCreateNestedOneWithoutSentCommentsInput } from "../inputs/UserCreateNestedOneWithoutSentCommentsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateWithoutReceiverInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  body!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ApprovalCreateNestedOneWithoutCommentInput, {
    nullable: true
  })
  approval?: ApprovalCreateNestedOneWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSentCommentsInput, {
    nullable: false
  })
  sender!: UserCreateNestedOneWithoutSentCommentsInput;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutCommentsInput, {
    nullable: false
  })
  parent!: SongCreateNestedOneWithoutCommentsInput;
}
