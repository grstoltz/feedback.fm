import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConversationUpdateOneRequiredWithoutParticipantsInput } from "../inputs/ConversationUpdateOneRequiredWithoutParticipantsInput";
import { UserUpdateOneRequiredWithoutConversationsInput } from "../inputs/UserUpdateOneRequiredWithoutConversationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationUpdateInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutConversationsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutConversationsInput | undefined;

  @TypeGraphQL.Field(_type => ConversationUpdateOneRequiredWithoutParticipantsInput, {
    nullable: true
  })
  conversation?: ConversationUpdateOneRequiredWithoutParticipantsInput | undefined;
}
