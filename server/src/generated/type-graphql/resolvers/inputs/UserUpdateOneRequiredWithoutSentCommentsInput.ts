import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSentCommentsInput } from "../inputs/UserCreateOrConnectWithoutSentCommentsInput";
import { UserCreateWithoutSentCommentsInput } from "../inputs/UserCreateWithoutSentCommentsInput";
import { UserUpdateWithoutSentCommentsInput } from "../inputs/UserUpdateWithoutSentCommentsInput";
import { UserUpsertWithoutSentCommentsInput } from "../inputs/UserUpsertWithoutSentCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutSentCommentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSentCommentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutSentCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSentCommentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSentCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSentCommentsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutSentCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSentCommentsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutSentCommentsInput | undefined;
}
