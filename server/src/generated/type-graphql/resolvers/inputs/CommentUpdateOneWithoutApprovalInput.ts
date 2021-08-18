import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentCreateOrConnectWithoutApprovalInput } from "../inputs/CommentCreateOrConnectWithoutApprovalInput";
import { CommentCreateWithoutApprovalInput } from "../inputs/CommentCreateWithoutApprovalInput";
import { CommentUpdateWithoutApprovalInput } from "../inputs/CommentUpdateWithoutApprovalInput";
import { CommentUpsertWithoutApprovalInput } from "../inputs/CommentUpsertWithoutApprovalInput";
import { CommentWhereUniqueInput } from "../inputs/CommentWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CommentUpdateOneWithoutApprovalInput {
  @TypeGraphQL.Field(_type => CommentCreateWithoutApprovalInput, {
    nullable: true
  })
  create?: CommentCreateWithoutApprovalInput | undefined;

  @TypeGraphQL.Field(_type => CommentCreateOrConnectWithoutApprovalInput, {
    nullable: true
  })
  connectOrCreate?: CommentCreateOrConnectWithoutApprovalInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpsertWithoutApprovalInput, {
    nullable: true
  })
  upsert?: CommentUpsertWithoutApprovalInput | undefined;

  @TypeGraphQL.Field(_type => CommentWhereUniqueInput, {
    nullable: true
  })
  connect?: CommentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateWithoutApprovalInput, {
    nullable: true
  })
  update?: CommentUpdateWithoutApprovalInput | undefined;
}
