import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationType } from "../../enums/NotificationType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NestedEnumNotificationTypeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumNotificationTypeFilter, {
    nullable: true
  })
  not?: NestedEnumNotificationTypeFilter | undefined;
}
