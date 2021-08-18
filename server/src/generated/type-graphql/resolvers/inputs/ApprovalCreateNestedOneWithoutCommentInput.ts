import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalCreateOrConnectWithoutCommentInput } from "../inputs/ApprovalCreateOrConnectWithoutCommentInput";
import { ApprovalCreateWithoutCommentInput } from "../inputs/ApprovalCreateWithoutCommentInput";
import { ApprovalWhereUniqueInput } from "../inputs/ApprovalWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalCreateNestedOneWithoutCommentInput {
  @TypeGraphQL.Field(_type => ApprovalCreateWithoutCommentInput, {
    nullable: true
  })
  create?: ApprovalCreateWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => ApprovalCreateOrConnectWithoutCommentInput, {
    nullable: true
  })
  connectOrCreate?: ApprovalCreateOrConnectWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => ApprovalWhereUniqueInput, {
    nullable: true
  })
  connect?: ApprovalWhereUniqueInput | undefined;
}
