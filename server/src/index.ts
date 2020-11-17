import "reflect-metadata";
import * as dotenv from "dotenv";
dotenv.config();

import { createConnection } from "typeorm";
import { __prod__, COOKIE_NAME } from "./constants";
import path from "path";

import express from "express";
import session from "express-session";
import Redis from "ioredis";
import connectRedis from "connect-redis";
import cors from "cors";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { User } from "./entities/User";
import { Comment } from "./entities/Comment";
import { Song } from "./entities/Song";
import { Transaction } from "./entities/Transaction";

import { HelloResolver } from "./resolvers/hello";
import { SongResolver } from "./resolvers/song";
import { UserResolver } from "./resolvers/user";
import { CommentResolver } from "./resolvers/comment";

import { createUserLoader } from "./utils/createUserLoader";
import { TransactionResolver } from "./resolvers/transaction";

const main = async () => {
	const conn = await createConnection({
		type: "postgres",
		host: "localhost",
		port: 5432,
		username: "postgres",
		database: process.env.DATABASE_URL,
		logging: true,
		synchronize: true,
		migrations: [path.join(__dirname, "./migrations/*.js")],
		entities: [User, Song, Comment, Transaction],
	});

	const app = express();

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
				domain: __prod__ ? ".codeponder.com" : undefined,
			},
			saveUninitialized: false,
			secret: process.env.SESSION_SECRET as string,
			resave: false,
		})
	);

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [
				HelloResolver,
				SongResolver,
				UserResolver,
				CommentResolver,
				TransactionResolver,
			],
			validate: false,
		}),
		context: ({ req, res }) => ({
			req,
			res,
			redis,
			userLoader: createUserLoader(),
		}),
	});

	apolloServer.applyMiddleware({ app, cors: false });

	app.listen(4000, () => {
		console.log("Server started at localhost:4000");
	});
};

main().catch((err) => {
	console.error(err);
});
