import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserConversationCreateManyConversationInputEnvelope } from "../inputs/UserConversationCreateManyConversationInputEnvelope";
import { UserConversationCreateOrConnectWithoutConversationInput } from "../inputs/UserConversationCreateOrConnectWithoutConversationInput";
import { UserConversationCreateWithoutConversationInput } from "../inputs/UserConversationCreateWithoutConversationInput";
import { UserConversationWhereUniqueInput } from "../inputs/UserConversationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationCreateNestedManyWithoutConversationInput {
  @TypeGraphQL.Field(_type => [UserConversationCreateWithoutConversationInput], {
    nullable: true
  })
  create?: UserConversationCreateWithoutConversationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationCreateOrConnectWithoutConversationInput], {
    nullable: true
  })
  connectOrCreate?: UserConversationCreateOrConnectWithoutConversationInput[] | undefined;

  @TypeGraphQL.Field(_type => UserConversationCreateManyConversationInputEnvelope, {
    nullable: true
  })
  createMany?: UserConversationCreateManyConversationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserConversationWhereUniqueInput], {
    nullable: true
  })
  connect?: UserConversationWhereUniqueInput[] | undefined;
}
