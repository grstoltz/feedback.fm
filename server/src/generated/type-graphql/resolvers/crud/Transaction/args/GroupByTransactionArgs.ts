import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransactionOrderByInput } from "../../../inputs/TransactionOrderByInput";
import { TransactionScalarWhereWithAggregatesInput } from "../../../inputs/TransactionScalarWhereWithAggregatesInput";
import { TransactionWhereInput } from "../../../inputs/TransactionWhereInput";
import { TransactionScalarFieldEnum } from "../../../../enums/TransactionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTransactionArgs {
  @TypeGraphQL.Field(_type => TransactionWhereInput, {
    nullable: true
  })
  where?: TransactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TransactionOrderByInput], {
    nullable: true
  })
  orderBy?: TransactionOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "openingBalance" | "transactionAmount" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => TransactionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TransactionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
