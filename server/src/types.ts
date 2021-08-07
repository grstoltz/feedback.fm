import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Redis } from "ioredis";
import { createUserLoader } from "./utils/createUserLoader";

declare module "express-session" {
	interface Session {
		userId: any;
	}
}

export type MyContext = {
	req: Request;
	redis: Redis;
	res: Response;
	prisma: PrismaClient;
	userLoader: ReturnType<typeof createUserLoader>;
};
