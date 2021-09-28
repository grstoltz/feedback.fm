import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
	split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import nextWithApollo from "next-with-apollo";
import { SongsQueryResult } from "../generated/graphql";
import { WebSocketLink } from "@apollo/client/link/ws";

//const ROOT_URL = process.env.ROOT_URL;

const ROOT_URL = "http://localhost:4000/graphql";

if (!ROOT_URL) {
	throw new Error("ROOT_URL environment variable is not set");
}

const wsLink = new WebSocketLink({
	uri: "ws://localhost:4000/subscriptions",
	options: {
		reconnect: true,
	},
});

const httpLink = new HttpLink({
	uri: ROOT_URL as string,
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

export const withApollo = nextWithApollo(
	({ initialState, headers }) => {
		return new ApolloClient({
			link: splitLink,
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
