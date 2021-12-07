import * as TypeGraphQL from "type-graphql";
import { Delivery } from "../../../models/Delivery";
import { Message } from "../../../models/Message";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Delivery)
export class DeliveryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Message, {
    nullable: false
  })
  async message(@TypeGraphQL.Root() delivery: Delivery, @TypeGraphQL.Ctx() ctx: any): Promise<Message> {
    return getPrismaFromContext(ctx).delivery.findUnique({
      where: {
        id: delivery.id,
      },
    }).message({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() delivery: Delivery, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).delivery.findUnique({
      where: {
        id: delivery.id,
      },
    }).user({});
  }
}
