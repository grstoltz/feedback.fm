import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserConversationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UserConversationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UserConversationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UserConversationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  conversationId?: IntWithAggregatesFilter | undefined;
}
