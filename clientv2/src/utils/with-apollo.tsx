import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
} from "@apollo/client";
import nextWithApollo from "next-with-apollo";
import { SongsQueryResult } from "../generated/graphql";

//const ROOT_URL = process.env.ROOT_URL;

const ROOT_URL = "http://localhost:4000/graphql";

if (!ROOT_URL) {
	throw new Error("ROOT_URL environment variable is not set");
}

export const withApollo = nextWithApollo(
	({ initialState, headers }) => {
		return new ApolloClient({
			uri: ROOT_URL as string,
			credentials: "include",
			headers: {
				cookie:
					(typeof window === "undefined" ? headers?.cookie : undefined) ||
					"",
			},
			// link: new HttpLink({
			// 	uri: `${ROOT_URL}/graphql`,
			// 	headers: {
			// 		cookie:
			// 			(typeof window === "undefined"
			// 				? headers?.cookie
			// 				: undefined) || "",
			// 	},
			// }),
			//cache: new InMemoryCache().restore(initialState || {}),
			cache: new InMemoryCache({
				typePolicies: {
					Query: {
						fields: {
							songs: {
								keyArgs: ["id"],
							},
							song: {
								keyArgs: ["id"],
							},
							user: {
								keyArgs: ["id"],
							},
						},
					},
				},
			}),
		});
	},
	{
		render: ({ Page, props }) => {
			return (
				<ApolloProvider client={props.apollo}>
					<Page {...props} />
				</ApolloProvider>
			);
		},
	}
);
