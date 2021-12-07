import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApprovalRelationFilter } from "../inputs/ApprovalRelationFilter";
import { ConversationRelationFilter } from "../inputs/ConversationRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DeliveryRelationFilter } from "../inputs/DeliveryRelationFilter";
import { EnumMessageTypeFilter } from "../inputs/EnumMessageTypeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { SongRelationFilter } from "../inputs/SongRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MessageWhereInput {
  @TypeGraphQL.Field(_type => [MessageWhereInput], {
    nullable: true
  })
  AND?: MessageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereInput], {
    nullable: true
  })
  OR?: MessageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MessageWhereInput], {
    nullable: true
  })
  NOT?: MessageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  sender?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  senderId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ConversationRelationFilter, {
    nullable: true
  })
  conversation?: ConversationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  conversationId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DeliveryRelationFilter, {
    nullable: true
  })
  delivery?: DeliveryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ApprovalRelationFilter, {
    nullable: true
  })
  approval?: ApprovalRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  approvalId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => SongRelationFilter, {
    nullable: true
  })
  song?: SongRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  songId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  text?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  sentAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => EnumMessageTypeFilter, {
    nullable: true
  })
  type?: EnumMessageTypeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;
}
