import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ConversationListRelationFilter } from "../inputs/ConversationListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MessageListRelationFilter } from "../inputs/MessageListRelationFilter";
import { NotificationListRelationFilter } from "../inputs/NotificationListRelationFilter";
import { SongListRelationFilter } from "../inputs/SongListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TransactionListRelationFilter } from "../inputs/TransactionListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  username?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  avatarURL?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => SongListRelationFilter, {
    nullable: true
  })
  songs?: SongListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MessageListRelationFilter, {
    nullable: true
  })
  sentMessages?: MessageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => NotificationListRelationFilter, {
    nullable: true
  })
  receivedNotifications?: NotificationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TransactionListRelationFilter, {
    nullable: true
  })
  transactions?: TransactionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ConversationListRelationFilter, {
    nullable: true
  })
  conversations?: ConversationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
