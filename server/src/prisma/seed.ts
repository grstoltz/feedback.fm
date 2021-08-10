import { PrismaClient } from "@prisma/client";
import * as faker from "faker";
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

	console.log("Seeding Users...");
	for (let i = 0; i < fakerRounds; i++) {
		const user = await prisma.user.create({ data: fakerUser() });
		for (let j = 0; j < fakerSongs; j++) {
			await prisma.song.create({ data: fakerSong(user.id) });
		}
	}

	const users = await prisma.$queryRaw`SELECT id FROM "User"`;

	console.log("Seeding Comments...");
	for (var k = 0; k < users; k++) {
		const songs =
			await prisma.$queryRaw`SELECT id FROM "Song" WHERE ownerId = ${users[k]}`;

		for (var l = 0; l < songs; l++) {
			for (let m = 0; m < fakeCommentRounds; m++) {
				const index = users.indexOf(users[k]);

				if (index > -1) {
					users.splice(index, 1);
				}

				const randomUser = users[Math.floor(Math.random() * users.length)];

				await prisma.comment.create({
					data: fakerComment(songs[l], randomUser, users[k]),
				});
			}
		}
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
