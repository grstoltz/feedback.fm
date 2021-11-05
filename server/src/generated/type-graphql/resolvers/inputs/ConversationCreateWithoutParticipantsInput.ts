import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MessageCreateNestedManyWithoutConversationInput } from "../inputs/MessageCreateNestedManyWithoutConversationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConversationCreateWithoutParticipantsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MessageCreateNestedManyWithoutConversationInput, {
    nullable: true
  })
  messages?: MessageCreateNestedManyWithoutConversationInput | undefined;
}
