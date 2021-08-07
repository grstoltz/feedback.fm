import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReceivedCommentsInput } from "../inputs/UserCreateOrConnectWithoutReceivedCommentsInput";
import { UserCreateWithoutReceivedCommentsInput } from "../inputs/UserCreateWithoutReceivedCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutReceivedCommentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedCommentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReceivedCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReceivedCommentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReceivedCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
