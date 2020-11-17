import { MyContext } from "src/types";
import {
	Resolver,
	Query,
	UseMiddleware,
	Mutation,
	Int,
	Ctx,
	Arg,
} from "type-graphql";
import { getConnection } from "typeorm";
import { Transaction } from "../entities/Transaction";

import { isAuth } from "../middleware/isAuth";

@Resolver(Transaction)
export class TransactionResolver {
	@Mutation(() => Transaction)
	@UseMiddleware(isAuth)
	async createTransaction(
		@Arg("transactionAmount", () => Int) transactionAmount: number,
		@Ctx() { req }: MyContext
	): Promise<Transaction> {
		const user = await getConnection()
			.createQueryBuilder()
			.select("transaction")
			.from(Transaction, "transaction")
			.where("transaction.userId = :id", { id: req.session.userId })
			.orderBy("transaction.createdAt", "DESC")
			.getOne();

		let openingBalance;

		user
			? (openingBalance = user.openingBalance + user.transactionAmount)
			: (openingBalance = 0);

		return Transaction.create({
			userId: req.session.userId,
			transactionAmount,
			openingBalance,
		}).save();
	}
}
