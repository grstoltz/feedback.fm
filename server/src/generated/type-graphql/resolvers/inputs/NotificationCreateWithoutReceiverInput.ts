import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutSentNotificationsInput } from "../inputs/UserCreateNestedOneWithoutSentNotificationsInput";
import { NotificationType } from "../../enums/NotificationType";
import { NotificationUrlType } from "../../enums/NotificationUrlType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class NotificationCreateWithoutReceiverInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  parentId?: number | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  read?: boolean | undefined;

  @TypeGraphQL.Field(_type => NotificationType, {
    nullable: false
  })
  type!: "MESSAGE" | "APPROVED" | "DENIED" | "FEEDBACK";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => NotificationUrlType, {
    nullable: false
  })
  urlType!: "SONG" | "FEEDBACK" | "MESSAGE";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSentNotificationsInput, {
    nullable: false
  })
  sender!: UserCreateNestedOneWithoutSentNotificationsInput;
}
