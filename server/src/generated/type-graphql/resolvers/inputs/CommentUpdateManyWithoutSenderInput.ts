import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManySenderInputEnvelope } from "../inputs/CommentCreateManySenderInputEnvelope";
import { CommentCreateOrConnectWithoutSenderInput } from "../inputs/CommentCreateOrConnectWithoutSenderInput";
import { CommentCreateWithoutSenderInput } from "../inputs/CommentCreateWithoutSenderInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutSenderInput } from "../inputs/CommentUpdateManyWithWhereWithoutSenderInput";
import { CommentUpdateWithWhereUniqueWithoutSenderInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutSenderInput";
import { CommentUpsertWithWhereUniqueWithoutSenderInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutSenderInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpdateManyWithoutSenderInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutSenderInput], {
    nullable: true
  })
  create?: CommentCreateWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutSenderInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutSenderInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManySenderInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManySenderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  connect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  set?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentWhereUniqueInput], {
    nullable: true
  })
  delete?: CommentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutSenderInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutSenderInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutSenderInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
