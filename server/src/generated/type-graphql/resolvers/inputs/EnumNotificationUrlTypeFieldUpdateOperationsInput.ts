import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationUrlType } from "../../enums/NotificationUrlType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumNotificationUrlTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => NotificationUrlType, {
    nullable: true
  })
  set?: "SONG" | "FEEDBACK" | "MESSAGE" | undefined;
}
