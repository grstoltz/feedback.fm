import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();

import { __prod__, COOKIE_NAME } from "./constants";

import express from "express";
import session from "express-session";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import cors from "cors";
import * as http from "http";

import { execute, subscribe } from "graphql";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
import { PubSub } from "graphql-subscriptions";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { buildSchema } from "type-graphql";

import { HelloResolver } from "./resolvers/hello";
import { SongResolver } from "./resolvers/song";
import { UserResolver } from "./resolvers/user";
import { CommentResolver } from "./resolvers/comment";
import { TransactionResolver } from "./resolvers/transaction";
import { NotificationResolver } from "./resolvers/notification";

import { createUserLoader } from "./utils/createUserLoader";

const main = async () => {
	const prisma = new PrismaClient();

	const app = express();
	const httpServer = http.createServer(app);

	const RedisStore = connectRedis(session);
	const redis = new Redis(process.env.REDIS_URL);
	app.set("trust proxy", 1);
	app.use(
		cors({
			origin: process.env.CORS_ORIGIN,
			credentials: true,
		})
	);
	app.use(
		session({
			name: COOKIE_NAME,
			store: new RedisStore({
				client: redis,
				disableTouch: true,
			}),
			cookie: {
				maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
				httpOnly: true,
				sameSite: "lax", // csrf
				secure: __prod__, // cookie only works in https
				domain: __prod__ ? ".grantstoltz.com" : undefined,
			},
			saveUninitialized: false,
			secret: process.env.SESSION_SECRET as string,
			resave: false,
		})
	);

	const schema = await buildSchema({
		resolvers: [
			HelloResolver,
			SongResolver,
			UserResolver,
			CommentResolver,
			TransactionResolver,
			NotificationResolver,
		],
		validate: false,
	});

	const apolloServer = new ApolloServer({
		schema,
		context: ({ req, res }) => ({
			req,
			res,
			redis,
			prisma,
			userLoader: createUserLoader(),
		}),
	});
	await apolloServer.start();

	apolloServer.applyMiddleware({ app, cors: false });

	SubscriptionServer.create(
		{ schema, execute, subscribe },
		{ server: httpServer, path: apolloServer.graphqlPath }
	);

	httpServer.listen(4000, () => {
		console.log("Server started at localhost:4000");
	});
};

main().catch((err) => {
	console.error(err);
});
