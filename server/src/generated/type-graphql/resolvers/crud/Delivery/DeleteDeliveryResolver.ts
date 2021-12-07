import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteDeliveryArgs } from "./args/DeleteDeliveryArgs";
import { Delivery } from "../../../models/Delivery";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Delivery)
export class DeleteDeliveryResolver {
  @TypeGraphQL.Mutation(_returns => Delivery, {
    nullable: true
  })
  async deleteDelivery(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteDeliveryArgs): Promise<Delivery | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).delivery.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
