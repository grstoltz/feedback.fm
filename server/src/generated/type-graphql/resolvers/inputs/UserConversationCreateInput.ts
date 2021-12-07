import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConversationCreateNestedOneWithoutParticipantsInput } from "../inputs/ConversationCreateNestedOneWithoutParticipantsInput";
import { UserCreateNestedOneWithoutConversationsInput } from "../inputs/UserCreateNestedOneWithoutConversationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationCreateInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutConversationsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutConversationsInput;

  @TypeGraphQL.Field(_type => ConversationCreateNestedOneWithoutParticipantsInput, {
    nullable: false
  })
  conversation!: ConversationCreateNestedOneWithoutParticipantsInput;
}
