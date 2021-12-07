import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationScalarWhereInput {
  @TypeGraphQL.Field(_type => [UserConversationScalarWhereInput], {
    nullable: true
  })
  AND?: UserConversationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationScalarWhereInput], {
    nullable: true
  })
  OR?: UserConversationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationScalarWhereInput], {
    nullable: true
  })
  NOT?: UserConversationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  conversationId?: IntFilter | undefined;
}
