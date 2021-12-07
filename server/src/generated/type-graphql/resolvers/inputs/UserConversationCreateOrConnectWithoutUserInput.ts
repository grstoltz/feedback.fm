import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserConversationCreateWithoutUserInput } from "../inputs/UserConversationCreateWithoutUserInput";
import { UserConversationWhereUniqueInput } from "../inputs/UserConversationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => UserConversationWhereUniqueInput, {
    nullable: false
  })
  where!: UserConversationWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserConversationCreateWithoutUserInput, {
    nullable: false
  })
  create!: UserConversationCreateWithoutUserInput;
}
