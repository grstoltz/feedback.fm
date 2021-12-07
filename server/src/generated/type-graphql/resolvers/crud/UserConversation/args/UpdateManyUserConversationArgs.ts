import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserConversationUpdateManyMutationInput } from "../../../inputs/UserConversationUpdateManyMutationInput";
import { UserConversationWhereInput } from "../../../inputs/UserConversationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserConversationArgs {
  @TypeGraphQL.Field(_type => UserConversationUpdateManyMutationInput, {
    nullable: false
  })
  data!: UserConversationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UserConversationWhereInput, {
    nullable: true
  })
  where?: UserConversationWhereInput | undefined;
}
