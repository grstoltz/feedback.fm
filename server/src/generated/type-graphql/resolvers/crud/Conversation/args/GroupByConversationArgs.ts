import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ConversationOrderByInput } from "../../../inputs/ConversationOrderByInput";
import { ConversationScalarWhereWithAggregatesInput } from "../../../inputs/ConversationScalarWhereWithAggregatesInput";
import { ConversationWhereInput } from "../../../inputs/ConversationWhereInput";
import { ConversationScalarFieldEnum } from "../../../../enums/ConversationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByConversationArgs {
  @TypeGraphQL.Field(_type => ConversationWhereInput, {
    nullable: true
  })
  where?: ConversationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ConversationOrderByInput], {
    nullable: true
  })
  orderBy?: ConversationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ConversationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "updatedAt" | "createdAt">;

  @TypeGraphQL.Field(_type => ConversationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ConversationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
