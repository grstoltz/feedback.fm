import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserConversationWhereUniqueInput } from "../../../inputs/UserConversationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUserConversationArgs {
  @TypeGraphQL.Field(_type => UserConversationWhereUniqueInput, {
    nullable: false
  })
  where!: UserConversationWhereUniqueInput;
}
