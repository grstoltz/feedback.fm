import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MessageListRelationFilter } from "../inputs/MessageListRelationFilter";
import { UserConversationListRelationFilter } from "../inputs/UserConversationListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ConversationWhereInput {
  @TypeGraphQL.Field(_type => [ConversationWhereInput], {
    nullable: true
  })
  AND?: ConversationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConversationWhereInput], {
    nullable: true
  })
  OR?: ConversationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConversationWhereInput], {
    nullable: true
  })
  NOT?: ConversationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserConversationListRelationFilter, {
    nullable: true
  })
  participants?: UserConversationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MessageListRelationFilter, {
    nullable: true
  })
  messages?: MessageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
