import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserConversationCreateWithoutConversationInput } from "../inputs/UserConversationCreateWithoutConversationInput";
import { UserConversationWhereUniqueInput } from "../inputs/UserConversationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationCreateOrConnectWithoutConversationInput {
  @TypeGraphQL.Field(_type => UserConversationWhereUniqueInput, {
    nullable: false
  })
  where!: UserConversationWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserConversationCreateWithoutConversationInput, {
    nullable: false
  })
  create!: UserConversationCreateWithoutConversationInput;
}
