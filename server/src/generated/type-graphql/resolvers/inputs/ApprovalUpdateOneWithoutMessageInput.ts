import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalCreateOrConnectWithoutMessageInput } from "../inputs/ApprovalCreateOrConnectWithoutMessageInput";
import { ApprovalCreateWithoutMessageInput } from "../inputs/ApprovalCreateWithoutMessageInput";
import { ApprovalUpdateWithoutMessageInput } from "../inputs/ApprovalUpdateWithoutMessageInput";
import { ApprovalUpsertWithoutMessageInput } from "../inputs/ApprovalUpsertWithoutMessageInput";
import { ApprovalWhereUniqueInput } from "../inputs/ApprovalWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApprovalUpdateOneWithoutMessageInput {
  @TypeGraphQL.Field(_type => ApprovalCreateWithoutMessageInput, {
    nullable: true
  })
  create?: ApprovalCreateWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => ApprovalCreateOrConnectWithoutMessageInput, {
    nullable: true
  })
  connectOrCreate?: ApprovalCreateOrConnectWithoutMessageInput | undefined;

  @TypeGraphQL.Field(_type => ApprovalUpsertWithoutMessageInput, {
    nullable: true
  })
  upsert?: ApprovalUpsertWithoutMessageInput | undefined;

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

  @TypeGraphQL.Field(_type => ApprovalUpdateWithoutMessageInput, {
    nullable: true
  })
  update?: ApprovalUpdateWithoutMessageInput | undefined;
}
