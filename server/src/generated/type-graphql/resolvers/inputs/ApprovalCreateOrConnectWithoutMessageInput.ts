import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalCreateWithoutMessageInput } from "../inputs/ApprovalCreateWithoutMessageInput";
import { ApprovalWhereUniqueInput } from "../inputs/ApprovalWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalCreateOrConnectWithoutMessageInput {
  @TypeGraphQL.Field(_type => ApprovalWhereUniqueInput, {
    nullable: false
  })
  where!: ApprovalWhereUniqueInput;

  @TypeGraphQL.Field(_type => ApprovalCreateWithoutMessageInput, {
    nullable: false
  })
  create!: ApprovalCreateWithoutMessageInput;
}
