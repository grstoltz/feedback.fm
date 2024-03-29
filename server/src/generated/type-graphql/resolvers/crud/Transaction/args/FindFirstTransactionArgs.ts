import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TransactionOrderByInput } from "../../../inputs/TransactionOrderByInput";
import { TransactionWhereInput } from "../../../inputs/TransactionWhereInput";
import { TransactionWhereUniqueInput } from "../../../inputs/TransactionWhereUniqueInput";
import { TransactionScalarFieldEnum } from "../../../../enums/TransactionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTransactionArgs {
  @TypeGraphQL.Field(_type => TransactionWhereInput, {
    nullable: true
  })
  where?: TransactionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TransactionOrderByInput], {
    nullable: true
  })
  orderBy?: TransactionOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TransactionWhereUniqueInput, {
    nullable: true
  })
  cursor?: TransactionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TransactionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "openingBalance" | "transactionAmount" | "createdAt" | "updatedAt"> | undefined;
}
