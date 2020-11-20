import { Resolver, UseMiddleware, Mutation, Int, Arg } from "type-graphql";
import { getConnection } from "typeorm";
import { Transaction } from "../entities/Transaction";

import { isAuth } from "../middleware/isAuth";

@Resolver(Transaction)
export class TransactionResolver {
	@Mutation(() => Transaction)
	@UseMiddleware(isAuth)
	async createTransaction(
		@Arg("id", () => Int) id: number,
		@Arg("transactionAmount", () => Int) transactionAmount: number
	): Promise<Transaction> {
		const user = await getConnection()
			.createQueryBuilder()
			.select("transaction")
			.from(Transaction, "transaction")
			.where("transaction.userId = :id", { id })
			.orderBy("transaction.createdAt", "DESC")
			.getOne();

		let openingBalance;

		user
			? (openingBalance = user.openingBalance + user.transactionAmount)
			: (openingBalance = 0);

		return Transaction.create({
			userId: id,
			transactionAmount,
			openingBalance,
		}).save();
	}
}
