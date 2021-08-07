import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Transaction {
	@Field()
	id!: number;

	@Field()
	userId!: number;

	@Field()
	openingBalance!: number;

	@Field()
	transactionAmount: number;

	@Field(() => String)
	createdAt: Date;

	@Field(() => String)
	updatedAt: Date;
}
