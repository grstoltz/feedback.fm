import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserConversationUserIdConversationIdCompoundUniqueInput } from "../inputs/UserConversationUserIdConversationIdCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationWhereUniqueInput {
  @TypeGraphQL.Field(_type => UserConversationUserIdConversationIdCompoundUniqueInput, {
    nullable: true
  })
  userId_conversationId?: UserConversationUserIdConversationIdCompoundUniqueInput | undefined;
}
