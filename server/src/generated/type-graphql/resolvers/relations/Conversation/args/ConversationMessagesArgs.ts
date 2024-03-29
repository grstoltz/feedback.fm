import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MessageOrderByInput } from "../../../inputs/MessageOrderByInput";
import { MessageWhereInput } from "../../../inputs/MessageWhereInput";
import { MessageWhereUniqueInput } from "../../../inputs/MessageWhereUniqueInput";
import { MessageScalarFieldEnum } from "../../../../enums/MessageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ConversationMessagesArgs {
  @TypeGraphQL.Field(_type => MessageWhereInput, {
    nullable: true
  })
  where?: MessageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MessageOrderByInput], {
    nullable: true
  })
  orderBy?: MessageOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => MessageWhereUniqueInput, {
    nullable: true
  })
  cursor?: MessageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MessageScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "senderId" | "conversationId" | "approvalId" | "songId" | "text" | "sentAt" | "type" | "updatedAt" | "createdAt"> | undefined;
}
