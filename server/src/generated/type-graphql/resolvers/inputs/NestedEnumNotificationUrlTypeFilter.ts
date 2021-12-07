import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationUrlType } from "../../enums/NotificationUrlType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumNotificationUrlTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumNotificationUrlTypeFilter, {
    nullable: true
  })
  not?: NestedEnumNotificationUrlTypeFilter | undefined;
}
