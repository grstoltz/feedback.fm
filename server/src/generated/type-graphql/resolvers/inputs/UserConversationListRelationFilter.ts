import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserConversationWhereInput } from "../inputs/UserConversationWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserConversationListRelationFilter {
  @TypeGraphQL.Field(_type => UserConversationWhereInput, {
    nullable: true
  })
  every?: UserConversationWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserConversationWhereInput, {
    nullable: true
  })
  some?: UserConversationWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserConversationWhereInput, {
    nullable: true
  })
  none?: UserConversationWhereInput | undefined;
}
