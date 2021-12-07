import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserConversationCreateInput } from "../../../inputs/UserConversationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateUserConversationArgs {
  @TypeGraphQL.Field(_type => UserConversationCreateInput, {
    nullable: false
  })
  data!: UserConversationCreateInput;
}
