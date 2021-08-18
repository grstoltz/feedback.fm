import * as TypeGraphQL from "type-graphql";
import { Approval } from "../../../models/Approval";
import { Comment } from "../../../models/Comment";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Approval)
export class ApprovalRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Comment, {
    nullable: true
  })
  async Comment(@TypeGraphQL.Root() approval: Approval, @TypeGraphQL.Ctx() ctx: any): Promise<Comment | null> {
    return getPrismaFromContext(ctx).approval.findUnique({
      where: {
        id: approval.id,
      },
    }).Comment({});
  }
}
