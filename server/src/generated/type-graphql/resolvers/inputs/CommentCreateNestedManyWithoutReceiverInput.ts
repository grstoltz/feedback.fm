import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyReceiverInputEnvelope } from "../inputs/CommentCreateManyReceiverInputEnvelope";
import { CommentCreateOrConnectWithoutReceiverInput } from "../inputs/CommentCreateOrConnectWithoutReceiverInput";
import { CommentCreateWithoutReceiverInput } from "../inputs/CommentCreateWithoutReceiverInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentCreateNestedManyWithoutReceiverInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutReceiverInput], {
    nullable: true
  })
  create?: CommentCreateWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutReceiverInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyReceiverInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyReceiverInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;
}
