import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDeliveryArgs } from "./args/AggregateDeliveryArgs";
import { Delivery } from "../../../models/Delivery";
import { AggregateDelivery } from "../../outputs/AggregateDelivery";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Delivery)
export class AggregateDeliveryResolver {
  @TypeGraphQL.Query(_returns => AggregateDelivery, {
    nullable: false
  })
  async aggregateDelivery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDeliveryArgs): Promise<AggregateDelivery> {
    return getPrismaFromContext(ctx).delivery.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
