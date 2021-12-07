import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserConversationOrderByInput } from "../../../inputs/UserConversationOrderByInput";
import { UserConversationScalarWhereWithAggregatesInput } from "../../../inputs/UserConversationScalarWhereWithAggregatesInput";
import { UserConversationWhereInput } from "../../../inputs/UserConversationWhereInput";
import { UserConversationScalarFieldEnum } from "../../../../enums/UserConversationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserConversationArgs {
  @TypeGraphQL.Field(_type => UserConversationWhereInput, {
    nullable: true
  })
  where?: UserConversationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserConversationOrderByInput], {
    nullable: true
  })
  orderBy?: UserConversationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserConversationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"userId" | "conversationId">;

  @TypeGraphQL.Field(_type => UserConversationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserConversationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
