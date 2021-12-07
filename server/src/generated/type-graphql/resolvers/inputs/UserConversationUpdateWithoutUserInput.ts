import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConversationUpdateOneRequiredWithoutParticipantsInput } from "../inputs/ConversationUpdateOneRequiredWithoutParticipantsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => ConversationUpdateOneRequiredWithoutParticipantsInput, {
    nullable: true
  })
  conversation?: ConversationUpdateOneRequiredWithoutParticipantsInput | undefined;
}
