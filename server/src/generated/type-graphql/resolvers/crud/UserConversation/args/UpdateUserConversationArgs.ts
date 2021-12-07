import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserConversationUpdateInput } from "../../../inputs/UserConversationUpdateInput";
import { UserConversationWhereUniqueInput } from "../../../inputs/UserConversationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateUserConversationArgs {
  @TypeGraphQL.Field(_type => UserConversationUpdateInput, {
    nullable: false
  })
  data!: UserConversationUpdateInput;

  @TypeGraphQL.Field(_type => UserConversationWhereUniqueInput, {
    nullable: false
  })
  where!: UserConversationWhereUniqueInput;
}
