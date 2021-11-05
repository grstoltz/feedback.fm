import * as TypeGraphQL from "type-graphql";
import { Approval } from "../../../models/Approval";
import { Message } from "../../../models/Message";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Approval)
export class ApprovalRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Message, {
    nullable: true
  })
  async Message(@TypeGraphQL.Root() approval: Approval, @TypeGraphQL.Ctx() ctx: any): Promise<Message | null> {
    return getPrismaFromContext(ctx).approval.findUnique({
      where: {
        id: approval.id,
      },
    }).Message({});
  }
}
