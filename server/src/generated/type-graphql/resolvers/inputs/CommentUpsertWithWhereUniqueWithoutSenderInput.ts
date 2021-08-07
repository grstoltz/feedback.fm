import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutSenderInput } from "../inputs/CommentCreateWithoutSenderInput";
import { CommentUpdateWithoutSenderInput } from "../inputs/CommentUpdateWithoutSenderInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutSenderInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutSenderInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutSenderInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutSenderInput, {
    nullable: false
  })
  create!: CommentCreateWithoutSenderInput;
}
