import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserConversationCreateManyUserInputEnvelope } from "../inputs/UserConversationCreateManyUserInputEnvelope";
import { UserConversationCreateOrConnectWithoutUserInput } from "../inputs/UserConversationCreateOrConnectWithoutUserInput";
import { UserConversationCreateWithoutUserInput } from "../inputs/UserConversationCreateWithoutUserInput";
import { UserConversationScalarWhereInput } from "../inputs/UserConversationScalarWhereInput";
import { UserConversationUpdateManyWithWhereWithoutUserInput } from "../inputs/UserConversationUpdateManyWithWhereWithoutUserInput";
import { UserConversationUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UserConversationUpdateWithWhereUniqueWithoutUserInput";
import { UserConversationUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UserConversationUpsertWithWhereUniqueWithoutUserInput";
import { UserConversationWhereUniqueInput } from "../inputs/UserConversationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UserConversationCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserConversationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserConversationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: UserConversationUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserConversationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserConversationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserConversationWhereUniqueInput], {
    nullable: true
  })
  connect?: UserConversationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationWhereUniqueInput], {
    nullable: true
  })
  set?: UserConversationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserConversationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationWhereUniqueInput], {
    nullable: true
  })
  delete?: UserConversationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: UserConversationUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: UserConversationUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserConversationScalarWhereInput[] | undefined;
}
