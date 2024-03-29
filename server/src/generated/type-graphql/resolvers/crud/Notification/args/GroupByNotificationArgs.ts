import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NotificationOrderByInput } from "../../../inputs/NotificationOrderByInput";
import { NotificationScalarWhereWithAggregatesInput } from "../../../inputs/NotificationScalarWhereWithAggregatesInput";
import { NotificationWhereInput } from "../../../inputs/NotificationWhereInput";
import { NotificationScalarFieldEnum } from "../../../../enums/NotificationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNotificationArgs {
  @TypeGraphQL.Field(_type => NotificationWhereInput, {
    nullable: true
  })
  where?: NotificationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NotificationOrderByInput], {
    nullable: true
  })
  orderBy?: NotificationOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "receiverId" | "senderId" | "parentId" | "read" | "type" | "url" | "urlType" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => NotificationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: NotificationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
