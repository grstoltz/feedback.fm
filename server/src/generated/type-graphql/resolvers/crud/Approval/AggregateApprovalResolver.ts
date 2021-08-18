import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateApprovalArgs } from "./args/AggregateApprovalArgs";
import { Approval } from "../../../models/Approval";
import { AggregateApproval } from "../../outputs/AggregateApproval";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Approval)
export class AggregateApprovalResolver {
  @TypeGraphQL.Query(_returns => AggregateApproval, {
    nullable: false
  })
  async aggregateApproval(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateApprovalArgs): Promise<AggregateApproval> {
    return getPrismaFromContext(ctx).approval.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
