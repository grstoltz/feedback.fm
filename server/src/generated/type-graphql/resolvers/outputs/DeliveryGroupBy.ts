import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryAvgAggregate } from "../outputs/DeliveryAvgAggregate";
import { DeliveryCountAggregate } from "../outputs/DeliveryCountAggregate";
import { DeliveryMaxAggregate } from "../outputs/DeliveryMaxAggregate";
import { DeliveryMinAggregate } from "../outputs/DeliveryMinAggregate";
import { DeliverySumAggregate } from "../outputs/DeliverySumAggregate";
import { DeliveryType } from "../../enums/DeliveryType";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class DeliveryGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  messageId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => DeliveryType, {
    nullable: false
  })
  type!: "DELIVERED" | "SEEN";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => DeliveryCountAggregate, {
    nullable: true
  })
  _count!: DeliveryCountAggregate | null;

  @TypeGraphQL.Field(_type => DeliveryAvgAggregate, {
    nullable: true
  })
  _avg!: DeliveryAvgAggregate | null;

  @TypeGraphQL.Field(_type => DeliverySumAggregate, {
    nullable: true
  })
  _sum!: DeliverySumAggregate | null;

  @TypeGraphQL.Field(_type => DeliveryMinAggregate, {
    nullable: true
  })
  _min!: DeliveryMinAggregate | null;

  @TypeGraphQL.Field(_type => DeliveryMaxAggregate, {
    nullable: true
  })
  _max!: DeliveryMaxAggregate | null;
}
