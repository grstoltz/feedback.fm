import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateManyReceiverInputEnvelope } from "../inputs/CommentCreateManyReceiverInputEnvelope";
import { CommentCreateOrConnectWithoutReceiverInput } from "../inputs/CommentCreateOrConnectWithoutReceiverInput";
import { CommentCreateWithoutReceiverInput } from "../inputs/CommentCreateWithoutReceiverInput";
import { CommentScalarWhereInput } from "../inputs/CommentScalarWhereInput";
import { CommentUpdateManyWithWhereWithoutReceiverInput } from "../inputs/CommentUpdateManyWithWhereWithoutReceiverInput";
import { CommentUpdateWithWhereUniqueWithoutReceiverInput } from "../inputs/CommentUpdateWithWhereUniqueWithoutReceiverInput";
import { CommentUpsertWithWhereUniqueWithoutReceiverInput } from "../inputs/CommentUpsertWithWhereUniqueWithoutReceiverInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpdateManyWithoutReceiverInput {
  @TypeGraphQL.Field(_type => [CommentCreateWithoutReceiverInput], {
    nullable: true
  })
  create?: CommentCreateWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentCreateOrConnectWithoutReceiverInput], {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpsertWithWhereUniqueWithoutReceiverInput], {
    nullable: true
  })
  upsert?: CommentUpsertWithWhereUniqueWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => CommentCreateManyReceiverInputEnvelope, {
    nullable: true
  })
  createMany?: CommentCreateManyReceiverInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CommentUpdateWithWhereUniqueWithoutReceiverInput], {
    nullable: true
  })
  update?: CommentUpdateWithWhereUniqueWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentUpdateManyWithWhereWithoutReceiverInput], {
    nullable: true
  })
  updateMany?: CommentUpdateManyWithWhereWithoutReceiverInput[] | undefined;

  @TypeGraphQL.Field(_type => [CommentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CommentScalarWhereInput[] | undefined;
}
