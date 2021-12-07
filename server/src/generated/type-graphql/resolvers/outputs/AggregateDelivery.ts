import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DeliveryAvgAggregate } from "../outputs/DeliveryAvgAggregate";
import { DeliveryCountAggregate } from "../outputs/DeliveryCountAggregate";
import { DeliveryMaxAggregate } from "../outputs/DeliveryMaxAggregate";
import { DeliveryMinAggregate } from "../outputs/DeliveryMinAggregate";
import { DeliverySumAggregate } from "../outputs/DeliverySumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateDelivery {
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
