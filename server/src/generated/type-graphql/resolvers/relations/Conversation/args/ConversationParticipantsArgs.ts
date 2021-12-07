import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserConversationOrderByInput } from "../../../inputs/UserConversationOrderByInput";
import { UserConversationWhereInput } from "../../../inputs/UserConversationWhereInput";
import { UserConversationWhereUniqueInput } from "../../../inputs/UserConversationWhereUniqueInput";
import { UserConversationScalarFieldEnum } from "../../../../enums/UserConversationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ConversationParticipantsArgs {
  @TypeGraphQL.Field(_type => UserConversationWhereInput, {
    nullable: true
  })
  where?: UserConversationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserConversationOrderByInput], {
    nullable: true
  })
  orderBy?: UserConversationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => UserConversationWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserConversationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserConversationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"userId" | "conversationId"> | undefined;
}
