import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateOrConnectWithoutApprovalInput } from "../inputs/MessageCreateOrConnectWithoutApprovalInput";
import { MessageCreateWithoutApprovalInput } from "../inputs/MessageCreateWithoutApprovalInput";
import { MessageUpdateWithoutApprovalInput } from "../inputs/MessageUpdateWithoutApprovalInput";
import { MessageUpsertWithoutApprovalInput } from "../inputs/MessageUpsertWithoutApprovalInput";
import { MessageWhereUniqueInput } from "../inputs/MessageWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageUpdateOneWithoutApprovalInput {
  @TypeGraphQL.Field(_type => MessageCreateWithoutApprovalInput, {
    nullable: true
  })
  create?: MessageCreateWithoutApprovalInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateOrConnectWithoutApprovalInput, {
    nullable: true
  })
  connectOrCreate?: MessageCreateOrConnectWithoutApprovalInput | undefined;

  @TypeGraphQL.Field(_type => MessageUpsertWithoutApprovalInput, {
    nullable: true
  })
  upsert?: MessageUpsertWithoutApprovalInput | undefined;

  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: true
  })
  connect?: MessageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => MessageUpdateWithoutApprovalInput, {
    nullable: true
  })
  update?: MessageUpdateWithoutApprovalInput | undefined;
}
