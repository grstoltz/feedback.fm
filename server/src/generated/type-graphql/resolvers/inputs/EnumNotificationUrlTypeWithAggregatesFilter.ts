import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumNotificationUrlTypeFilter } from "../inputs/NestedEnumNotificationUrlTypeFilter";
import { NestedEnumNotificationUrlTypeWithAggregatesFilter } from "../inputs/NestedEnumNotificationUrlTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NotificationUrlType } from "../../enums/NotificationUrlType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumNotificationUrlTypeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => NotificationUrlType, {
    nullable: true
  })
  equals?: "SONG" | "FEEDBACK" | "MESSAGE" | undefined;

  @TypeGraphQL.Field(_type => [NotificationUrlType], {
    nullable: true
  })
  in?: Array<"SONG" | "FEEDBACK" | "MESSAGE"> | undefined;

  @TypeGraphQL.Field(_type => [NotificationUrlType], {
    nullable: true
  })
  notIn?: Array<"SONG" | "FEEDBACK" | "MESSAGE"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumNotificationUrlTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumNotificationUrlTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumNotificationUrlTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumNotificationUrlTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumNotificationUrlTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumNotificationUrlTypeFilter | undefined;
}
