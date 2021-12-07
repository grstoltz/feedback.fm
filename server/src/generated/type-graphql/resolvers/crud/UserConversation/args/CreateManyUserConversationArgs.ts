import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserConversationCreateManyInput } from "../../../inputs/UserConversationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUserConversationArgs {
  @TypeGraphQL.Field(_type => [UserConversationCreateManyInput], {
    nullable: false
  })
  data!: UserConversationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
