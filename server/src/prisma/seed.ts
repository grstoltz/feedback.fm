import { PrismaClient } from "@prisma/client";
import argon2 from "argon2";
import * as faker from "faker";
import { User } from "src/generated/type-graphql";

const prisma = new PrismaClient();

const fakerUser = (): any => ({
	email: faker.internet.email(),
	username: faker.internet.userName(),
	password: faker.internet.password(),
	avatarURL:
		"https://res.cloudinary.com/dedeo0s30/image/upload/v1605156898/default-profile-icon-16.png",
});

const fakerSong = (ownerId: any): any => ({
	title: faker.lorem.words(),
	mediaUrl: faker.internet.url(),
	mediaType: "Soundcloud",
	genre: faker.music.genre(),
	ownerId,
});

const adminUser = {
	email: "test@test.com",
	username: "test",
	password: argon2.hash("test"),
	avatarURL:
		"https://res.cloudinary.com/dedeo0s30/image/upload/v1605156898/default-profile-icon-16.png",
};

//Create a user
async function createAdminUser(user: any) {
	const newUser = await prisma.user.create({
		data: {
			...user,
		},
	});
	return newUser;
}

//create a new conversation between two users and add a message to it
async function createConversationWithMessage(user1: User) {
	const user2 = await getRandomUser2(user1);
	const conversation = await prisma.conversation.create({
		data: {
			participants: {
				create: [
					{
						user: {
							connect: {
								id: user1.id,
							},
						},
					},
					{
						user: {
							connect: {
								id: user2.id,
							},
						},
					},
				],
			},
		},
	});

	const message = await prisma.message.create({
		data: {
			text: faker.lorem.sentence(),
			type: "MESSAGE",
			conversation: {
				connect: {
					id: conversation.id,
				},
			},
			sender: {
				connect: {
					id: user1.id,
				},
			},
		},
	});
}

//a function that returns a random user from the database
async function getRandomUser(): Promise<User> {
	const user = await prisma.user.findMany({
		take: 1,

		skip: Math.floor(Math.random() * 9),
	});
	return user[0];
}

//find a random user but make sure its not the same user as the one passed in
async function getRandomUser2(user: any): Promise<User> {
	let randomUser: User;
	do {
		randomUser = await getRandomUser();
	} while (randomUser.id === user.id);
	return randomUser;
}

// //a function that creates a conversation between two users
// async function createConversation(user1: User, user2: User) {
// 	const conversation = await prisma.conversation.create({
// 		data: {
// 			participants: {
// 				create: [user1, user2].map((user) => ({
// 					userId: user.id,
// 				})),
// 			},
// 		},
// 	});
// 	return conversation;
// }

const fakerComment = (parentId: any, senderId: any, receiverId: any): any => ({
	parentId,
	senderId,
	receiverId,
	body: faker.lorem.paragraph(),
});

async function main() {
	const fakerRounds = 10;
	const fakerSongs = 5;
	const fakeCommentRounds = 5;

	console.log("Seeding...");

	await createAdminUser(adminUser);

	console.log("Seeding Users...");
	for (let i = 0; i < fakerRounds; i++) {
		const user = await prisma.user.create({ data: fakerUser() });
		for (let j = 0; j < fakerSongs; j++) {
			await prisma.song.create({ data: fakerSong(user.id) });
		}
	}

	console.log("Seeding Conversations...");

	for (let k = 0; k < fakeCommentRounds; k++) {
		const sender = await getRandomUser();
		await createConversationWithMessage(sender);
	}

	console.log("out");
	return;
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
