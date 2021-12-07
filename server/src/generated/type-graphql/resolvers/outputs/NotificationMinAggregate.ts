import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationType } from "../../enums/NotificationType";
import { NotificationUrlType } from "../../enums/NotificationUrlType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class NotificationMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  receiverId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  senderId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  parentId!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  read!: boolean | null;

  @TypeGraphQL.Field(_type => NotificationType, {
    nullable: true
  })
  type!: "MESSAGE" | "APPROVED" | "DENIED" | "FEEDBACK" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => NotificationUrlType, {
    nullable: true
  })
  urlType!: "SONG" | "FEEDBACK" | "MESSAGE" | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
