import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateUserConversationArgs } from "./args/AggregateUserConversationArgs";
import { UserConversation } from "../../../models/UserConversation";
import { AggregateUserConversation } from "../../outputs/AggregateUserConversation";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UserConversation)
export class AggregateUserConversationResolver {
  @TypeGraphQL.Query(_returns => AggregateUserConversation, {
    nullable: false
  })
  async aggregateUserConversation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUserConversationArgs): Promise<AggregateUserConversation> {
    return getPrismaFromContext(ctx).userConversation.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
