import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
} from "@apollo/client";
import nextWithApollo from "next-with-apollo";

const ROOT_URL = process.env.ROOT_URL;

if (!ROOT_URL) {
	throw new Error("ROOT_URL environment variable is not set");
}

export const withApollo = nextWithApollo(
	({ initialState, headers }) => {
		return new ApolloClient({
			link: new HttpLink({
				uri: `${ROOT_URL}/graphql`,
				headers: {
					cookie: headers?.cookie || "",
				},
			}),
			cache: new InMemoryCache().restore(initialState || {}),
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
