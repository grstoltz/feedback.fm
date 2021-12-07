import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { NotificationType } from "../enums/NotificationType";
import { NotificationUrlType } from "../enums/NotificationUrlType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Notification {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  receiverId!: number;

  receiver?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  senderId!: number;

  sender?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  parentId?: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  read!: boolean;

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
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;
}
