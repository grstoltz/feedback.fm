import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationType } from "../../enums/NotificationType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumNotificationTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => NotificationType, {
    nullable: true
  })
  set?: "MESSAGE" | "APPROVED" | "DENIED" | "FEEDBACK" | undefined;
}
