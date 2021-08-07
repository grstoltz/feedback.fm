import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManySenderInputEnvelope } from "../inputs/CommentCreateManySenderInputEnvelope";
import { CommentCreateOrConnectWithoutSenderInput } from "../inputs/CommentCreateOrConnectWithoutSenderInput";
import { CommentCreateWithoutSenderInput } from "../inputs/CommentCreateWithoutSenderInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateNestedManyWithoutSenderInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutSenderInput], {
    nullable: true
  })
  create?: CommentCreateWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutSenderInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManySenderInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManySenderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
