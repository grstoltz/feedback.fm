import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumNotificationTypeFilter } from "../inputs/NestedEnumNotificationTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NotificationType } from "../../enums/NotificationType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumNotificationTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => NotificationType, {
    nullable: true
  })
  equals?: "MESSAGE" | "APPROVED" | "DENIED" | "FEEDBACK" | undefined;

  @TypeGraphQL.Field(_type => [NotificationType], {
    nullable: true
  })
  in?: Array<"MESSAGE" | "APPROVED" | "DENIED" | "FEEDBACK"> | undefined;

  @TypeGraphQL.Field(_type => [NotificationType], {
    nullable: true
  })
  notIn?: Array<"MESSAGE" | "APPROVED" | "DENIED" | "FEEDBACK"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumNotificationTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumNotificationTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumNotificationTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumNotificationTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumNotificationTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumNotificationTypeFilter | undefined;
}
