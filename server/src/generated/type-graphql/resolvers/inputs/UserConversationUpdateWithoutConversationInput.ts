import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutConversationsInput } from "../inputs/UserUpdateOneRequiredWithoutConversationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationUpdateWithoutConversationInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutConversationsInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutConversationsInput | undefined;
}
