import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSentMessagesInput } from "../inputs/UserCreateOrConnectWithoutSentMessagesInput";
import { UserCreateWithoutSentMessagesInput } from "../inputs/UserCreateWithoutSentMessagesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutSentMessagesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSentMessagesInput, {
    nullable: true
  })
  create?: UserCreateWithoutSentMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSentMessagesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
