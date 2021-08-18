import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalCreateOrConnectWithoutCommentInput } from "../inputs/ApprovalCreateOrConnectWithoutCommentInput";
import { ApprovalCreateWithoutCommentInput } from "../inputs/ApprovalCreateWithoutCommentInput";
import { ApprovalUpdateWithoutCommentInput } from "../inputs/ApprovalUpdateWithoutCommentInput";
import { ApprovalUpsertWithoutCommentInput } from "../inputs/ApprovalUpsertWithoutCommentInput";
import { ApprovalWhereUniqueInput } from "../inputs/ApprovalWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalUpdateOneWithoutCommentInput {
  @TypeGraphQL.Field(_type => ApprovalCreateWithoutCommentInput, {
    nullable: true
  })
  create?: ApprovalCreateWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => ApprovalCreateOrConnectWithoutCommentInput, {
    nullable: true
  })
  connectOrCreate?: ApprovalCreateOrConnectWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => ApprovalUpsertWithoutCommentInput, {
    nullable: true
  })
  upsert?: ApprovalUpsertWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => ApprovalWhereUniqueInput, {
    nullable: true
  })
  connect?: ApprovalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ApprovalUpdateWithoutCommentInput, {
    nullable: true
  })
  update?: ApprovalUpdateWithoutCommentInput | undefined;
}
