import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserConversationWhereInput } from "../../../inputs/UserConversationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUserConversationArgs {
  @TypeGraphQL.Field(_type => UserConversationWhereInput, {
    nullable: true
  })
  where?: UserConversationWhereInput | undefined;
}
