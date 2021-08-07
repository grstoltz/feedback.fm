import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateWithoutReceiverInput } from "../inputs/CommentCreateWithoutReceiverInput";
import { CommentUpdateWithoutReceiverInput } from "../inputs/CommentUpdateWithoutReceiverInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpsertWithWhereUniqueWithoutReceiverInput {
  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: false
  })
  where!: CommentWhereUniqueInput;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutReceiverInput, {
    nullable: false
  })
  update!: CommentUpdateWithoutReceiverInput;

  @TypeGraphQL.Field(_type => CommentCreateWithoutReceiverInput, {
    nullable: false
  })
  create!: CommentCreateWithoutReceiverInput;
}
