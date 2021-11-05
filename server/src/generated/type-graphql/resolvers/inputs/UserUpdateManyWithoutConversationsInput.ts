import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutConversationsInput } from "../inputs/UserCreateOrConnectWithoutConversationsInput";
import { UserCreateWithoutConversationsInput } from "../inputs/UserCreateWithoutConversationsInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutConversationsInput } from "../inputs/UserUpdateManyWithWhereWithoutConversationsInput";
import { UserUpdateWithWhereUniqueWithoutConversationsInput } from "../inputs/UserUpdateWithWhereUniqueWithoutConversationsInput";
import { UserUpsertWithWhereUniqueWithoutConversationsInput } from "../inputs/UserUpsertWithWhereUniqueWithoutConversationsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateManyWithoutConversationsInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutConversationsInput], {
    nullable: true
  })
  create?: UserCreateWithoutConversationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutConversationsInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutConversationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutConversationsInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutConversationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutConversationsInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutConversationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutConversationsInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutConversationsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
