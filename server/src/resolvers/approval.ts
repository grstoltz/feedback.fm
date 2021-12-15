import {
	Resolver,
	Query,
	Arg,
	Int,
	Mutation,
	InputType,
	Field,
	FieldResolver,
	Root,
	Ctx,
	UseMiddleware,
} from "type-graphql";

import { Song } from "../generated/type-graphql/models/Song";
import { Message } from "../generated/type-graphql/models/Message";
import { User } from "../generated/type-graphql/models/User";
import { Approval } from "../generated/type-graphql/models/Approval";

import { MyContext } from "../types";

import { isAuth } from "../middleware/isAuth";

import { ApprovalType } from "../generated/type-graphql";

@Resolver(Approval)
export class ApprovalResolver {
	@Mutation(() => Approval)
	@UseMiddleware(isAuth)
	async upsertApproval(
		@Ctx() { prisma }: MyContext,
		@Arg("status", () => String) status: ApprovalType,
		@Arg("commentId", () => Int) commentId: number,
		@Arg("id", () => Int, { nullable: true }) id?: number | undefined
	): Promise<Approval> {
		let upsertApproval;
		if (id) {
			upsertApproval = await prisma.approval.upsert({
				where: {
					id,
				},
				update: {
					status,
				},
				create: {
					status,
					commentId,
				},
			});
		} else {
			upsertApproval = await prisma.approval.create({
				data: {
					status,
					commentId,
				},
			});
		}

		return upsertApproval;
	}
}
