import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByDeliveryArgs } from "./args/GroupByDeliveryArgs";
import { Delivery } from "../../../models/Delivery";
import { DeliveryGroupBy } from "../../outputs/DeliveryGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Delivery)
export class GroupByDeliveryResolver {
  @TypeGraphQL.Query(_returns => [DeliveryGroupBy], {
    nullable: false
  })
  async groupByDelivery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByDeliveryArgs): Promise<DeliveryGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).delivery.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
