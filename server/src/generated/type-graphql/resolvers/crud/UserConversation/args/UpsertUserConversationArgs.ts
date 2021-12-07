import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserConversationCreateInput } from "../../../inputs/UserConversationCreateInput";
import { UserConversationUpdateInput } from "../../../inputs/UserConversationUpdateInput";
import { UserConversationWhereUniqueInput } from "../../../inputs/UserConversationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertUserConversationArgs {
  @TypeGraphQL.Field(_type => UserConversationWhereUniqueInput, {
    nullable: false
  })
  where!: UserConversationWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserConversationCreateInput, {
    nullable: false
  })
  create!: UserConversationCreateInput;

  @TypeGraphQL.Field(_type => UserConversationUpdateInput, {
    nullable: false
  })
  update!: UserConversationUpdateInput;
}
