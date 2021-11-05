import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutConversationsInput } from "../inputs/UserCreateNestedManyWithoutConversationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConversationCreateWithoutMessagesInput {
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
}
