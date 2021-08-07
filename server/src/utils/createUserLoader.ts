import DataLoader from "dataloader";
import { User } from "../generated/type-graphql/models/User";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// [1, 78, 8, 9]
// [{id: 1, username: 'tim'}, {}, {}, {}]
export const createUserLoader = () =>
	new DataLoader<number, User>(async (userIds) => {
		const users = await prisma.user.findMany({
			where: {
				id: {
					in: userIds as number[],
				},
			},
		});
		const userIdToUser: Record<number, User> = {};
		users.forEach((u) => {
			userIdToUser[u.id] = u;
		});

		const sortedUsers = userIds.map((userId) => userIdToUser[userId]);
		// console.log("userIds", userIds);
		// console.log("map", userIdToUser);
		// console.log("sortedUsers", sortedUsers);
		return sortedUsers;
	});
