import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConversationCreateNestedOneWithoutParticipantsInput } from "../inputs/ConversationCreateNestedOneWithoutParticipantsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => ConversationCreateNestedOneWithoutParticipantsInput, {
    nullable: false
  })
  conversation!: ConversationCreateNestedOneWithoutParticipantsInput;
}
