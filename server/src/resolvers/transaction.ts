import { MyContext } from "src/types";
import { Resolver, UseMiddleware, Mutation, Int, Arg, Ctx } from "type-graphql";
import { Transaction } from "../generated/type-graphql/models/Transaction";

import { isAuth } from "../middleware/isAuth";

@Resolver(Transaction)
export class TransactionResolver {
	@Mutation(() => Transaction)
	@UseMiddleware(isAuth)
	async createTransaction(
		@Arg("id", () => Int) id: number,
		@Arg("transactionAmount", () => Int) transactionAmount: number,
		@Ctx() { prisma }: MyContext
	): Promise<Transaction> {
		const transaction = await prisma.transaction.findFirst({
			where: {
				userId: id,
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		let balance;

		transaction
			? (balance =
					transaction.openingBalance + transaction.transactionAmount)
			: (balance = 0);

		return prisma.transaction.create({
			data: {
				userId: id,
				transactionAmount,
				openingBalance: balance,
			},
		});
	}
}
