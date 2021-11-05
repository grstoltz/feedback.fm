import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateNestedManyWithoutConversationInput } from "../inputs/MessageCreateNestedManyWithoutConversationInput";
import { UserCreateNestedManyWithoutConversationsInput } from "../inputs/UserCreateNestedManyWithoutConversationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConversationCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutConversationsInput, {
    nullable: true
  })
  participants?: UserCreateNestedManyWithoutConversationsInput | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutConversationInput, {
    nullable: true
  })
  messages?: MessageCreateNestedManyWithoutConversationInput | undefined;
}
