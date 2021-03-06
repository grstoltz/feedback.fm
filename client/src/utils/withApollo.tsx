import { createWithApollo } from "./createWithApollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
//import { PaginatedPosts } from "../generated/graphql";
import { NextPageContext } from "next";

const createClient = (ctx: NextPageContext) =>
	new ApolloClient({
		uri: process.env.NEXT_PUBLIC_API_URL as string,
		credentials: "include",
		headers: {
			cookie:
				(typeof window === "undefined"
					? ctx?.req?.headers.cookie
					: undefined) || "",
		},
		defaultOptions: {
			query: {
				fetchPolicy: "network-only",
			},
			//watchQuery: { fetchPolicy: "no-cache" },
		},
		cache: new InMemoryCache(),

		// cache: new InMemoryCache({
		// 	typePolicies: {
		// 		Query: {
		// 			fields: {
		// 				songs: {
		// 					keyArgs: [],
		// 					// merge(
		// 					// 	existing: PaginatedPosts | undefined,
		// 					// 	incoming: PaginatedPosts
		// 					// ): PaginatedPosts {
		// 					// 	return {
		// 					// 		...incoming,
		// 					// 		posts: [
		// 					// 			...(existing?.posts || []),
		// 					// 			...incoming.posts,
		// 					// 		],
		// 					// 	};
		// 				},
		// 				user: {
		// 					keyArgs: [],
		// 				},

		// 				comments: {
		// 					keyArgs: [],
		// 				},
		// 				admin: {
		// 					keyArgs: [],
		// 				},
		// 			},
		// 		},
		// 	},
		// }),
	});

export const withApollo = createWithApollo(createClient);
