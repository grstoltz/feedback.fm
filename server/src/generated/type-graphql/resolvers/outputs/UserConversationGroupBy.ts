import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserConversationAvgAggregate } from "../outputs/UserConversationAvgAggregate";
import { UserConversationCountAggregate } from "../outputs/UserConversationCountAggregate";
import { UserConversationMaxAggregate } from "../outputs/UserConversationMaxAggregate";
import { UserConversationMinAggregate } from "../outputs/UserConversationMinAggregate";
import { UserConversationSumAggregate } from "../outputs/UserConversationSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class UserConversationGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  conversationId!: number;

  @TypeGraphQL.Field(_type => UserConversationCountAggregate, {
    nullable: true
  })
  _count!: UserConversationCountAggregate | null;

  @TypeGraphQL.Field(_type => UserConversationAvgAggregate, {
    nullable: true
  })
  _avg!: UserConversationAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserConversationSumAggregate, {
    nullable: true
  })
  _sum!: UserConversationSumAggregate | null;

  @TypeGraphQL.Field(_type => UserConversationMinAggregate, {
    nullable: true
  })
  _min!: UserConversationMinAggregate | null;

  @TypeGraphQL.Field(_type => UserConversationMaxAggregate, {
    nullable: true
  })
  _max!: UserConversationMaxAggregate | null;
}
