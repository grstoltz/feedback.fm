import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserConversationCreateManyConversationInputEnvelope } from "../inputs/UserConversationCreateManyConversationInputEnvelope";
import { UserConversationCreateOrConnectWithoutConversationInput } from "../inputs/UserConversationCreateOrConnectWithoutConversationInput";
import { UserConversationCreateWithoutConversationInput } from "../inputs/UserConversationCreateWithoutConversationInput";
import { UserConversationScalarWhereInput } from "../inputs/UserConversationScalarWhereInput";
import { UserConversationUpdateManyWithWhereWithoutConversationInput } from "../inputs/UserConversationUpdateManyWithWhereWithoutConversationInput";
import { UserConversationUpdateWithWhereUniqueWithoutConversationInput } from "../inputs/UserConversationUpdateWithWhereUniqueWithoutConversationInput";
import { UserConversationUpsertWithWhereUniqueWithoutConversationInput } from "../inputs/UserConversationUpsertWithWhereUniqueWithoutConversationInput";
import { UserConversationWhereUniqueInput } from "../inputs/UserConversationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationUpdateManyWithoutConversationInput {
  @TypeGraphQL.Field(_type => [UserConversationCreateWithoutConversationInput], {
    nullable: true
  })
  create?: UserConversationCreateWithoutConversationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationCreateOrConnectWithoutConversationInput], {
    nullable: true
  })
  connectOrCreate?: UserConversationCreateOrConnectWithoutConversationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationUpsertWithWhereUniqueWithoutConversationInput], {
    nullable: true
  })
  upsert?: UserConversationUpsertWithWhereUniqueWithoutConversationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserConversationCreateManyConversationInputEnvelope, {
    nullable: true
  })
  createMany?: UserConversationCreateManyConversationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UserConversationUpdateWithWhereUniqueWithoutConversationInput], {
    nullable: true
  })
  update?: UserConversationUpdateWithWhereUniqueWithoutConversationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationUpdateManyWithWhereWithoutConversationInput], {
    nullable: true
  })
  updateMany?: UserConversationUpdateManyWithWhereWithoutConversationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserConversationScalarWhereInput[] | undefined;
}
