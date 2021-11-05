import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalCreateOrConnectWithoutMessageInput } from "../inputs/ApprovalCreateOrConnectWithoutMessageInput";
import { ApprovalCreateWithoutMessageInput } from "../inputs/ApprovalCreateWithoutMessageInput";
import { ApprovalWhereUniqueInput } from "../inputs/ApprovalWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalCreateNestedOneWithoutMessageInput {
  @TypeGraphQL.Field(_type => ApprovalCreateWithoutMessageInput, {
    nullable: true
  })
  create?: ApprovalCreateWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => ApprovalCreateOrConnectWithoutMessageInput, {
    nullable: true
  })
  connectOrCreate?: ApprovalCreateOrConnectWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => ApprovalWhereUniqueInput, {
    nullable: true
  })
  connect?: ApprovalWhereUniqueInput | undefined;
}
