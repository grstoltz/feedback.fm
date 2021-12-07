import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConversationRelationFilter } from "../inputs/ConversationRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationWhereInput {
  @TypeGraphQL.Field(_type => [UserConversationWhereInput], {
    nullable: true
  })
  AND?: UserConversationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationWhereInput], {
    nullable: true
  })
  OR?: UserConversationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationWhereInput], {
    nullable: true
  })
  NOT?: UserConversationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  conversationId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ConversationRelationFilter, {
    nullable: true
  })
  conversation?: ConversationRelationFilter | undefined;
}
