import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserConversationCreateManyUserInputEnvelope } from "../inputs/UserConversationCreateManyUserInputEnvelope";
import { UserConversationCreateOrConnectWithoutUserInput } from "../inputs/UserConversationCreateOrConnectWithoutUserInput";
import { UserConversationCreateWithoutUserInput } from "../inputs/UserConversationCreateWithoutUserInput";
import { UserConversationWhereUniqueInput } from "../inputs/UserConversationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [UserConversationCreateWithoutUserInput], {
    nullable: true
  })
  create?: UserConversationCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: UserConversationCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => UserConversationCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: UserConversationCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserConversationWhereUniqueInput], {
    nullable: true
  })
  connect?: UserConversationWhereUniqueInput[] | undefined;
}
