import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationAvgAggregate } from "../outputs/NotificationAvgAggregate";
import { NotificationCountAggregate } from "../outputs/NotificationCountAggregate";
import { NotificationMaxAggregate } from "../outputs/NotificationMaxAggregate";
import { NotificationMinAggregate } from "../outputs/NotificationMinAggregate";
import { NotificationSumAggregate } from "../outputs/NotificationSumAggregate";
import { NotificationType } from "../../enums/NotificationType";
import { NotificationUrlType } from "../../enums/NotificationUrlType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class NotificationGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  receiverId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  senderId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  parentId!: number | null;

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

  @TypeGraphQL.Field(_type => NotificationCountAggregate, {
    nullable: true
  })
  _count!: NotificationCountAggregate | null;

  @TypeGraphQL.Field(_type => NotificationAvgAggregate, {
    nullable: true
  })
  _avg!: NotificationAvgAggregate | null;

  @TypeGraphQL.Field(_type => NotificationSumAggregate, {
    nullable: true
  })
  _sum!: NotificationSumAggregate | null;

  @TypeGraphQL.Field(_type => NotificationMinAggregate, {
    nullable: true
  })
  _min!: NotificationMinAggregate | null;

  @TypeGraphQL.Field(_type => NotificationMaxAggregate, {
    nullable: true
  })
  _max!: NotificationMaxAggregate | null;
}
