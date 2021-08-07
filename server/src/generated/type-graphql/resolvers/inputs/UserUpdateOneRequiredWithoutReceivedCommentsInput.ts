import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutReceivedCommentsInput } from "../inputs/UserCreateOrConnectWithoutReceivedCommentsInput";
import { UserCreateWithoutReceivedCommentsInput } from "../inputs/UserCreateWithoutReceivedCommentsInput";
import { UserUpdateWithoutReceivedCommentsInput } from "../inputs/UserUpdateWithoutReceivedCommentsInput";
import { UserUpsertWithoutReceivedCommentsInput } from "../inputs/UserUpsertWithoutReceivedCommentsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutReceivedCommentsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutReceivedCommentsInput, {
    nullable: true
  })
  create?: UserCreateWithoutReceivedCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutReceivedCommentsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutReceivedCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutReceivedCommentsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutReceivedCommentsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutReceivedCommentsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutReceivedCommentsInput | undefined;
}
