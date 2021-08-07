import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSentCommentsInput } from "../inputs/UserCreateOrConnectWithoutSentCommentsInput";
import { UserCreateWithoutSentCommentsInput } from "../inputs/UserCreateWithoutSentCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutSentCommentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSentCommentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSentCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSentCommentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSentCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
