import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CommentOrderByInput } from "../../../inputs/CommentOrderByInput";
import { CommentScalarWhereWithAggregatesInput } from "../../../inputs/CommentScalarWhereWithAggregatesInput";
import { CommentWhereInput } from "../../../inputs/CommentWhereInput";
import { CommentScalarFieldEnum } from "../../../../enums/CommentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCommentArgs {
  @TypeGraphQL.Field(_type => CommentWhereInput, {
    nullable: true
  })
  where?: CommentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CommentOrderByInput], {
    nullable: true
  })
  orderBy?: CommentOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "parentId" | "senderId" | "receiverId" | "active" | "approved" | "body" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => CommentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CommentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
