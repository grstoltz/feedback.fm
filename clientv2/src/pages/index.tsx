import { getDataFromTree } from "@apollo/client/react/ssr";

import { withApollo } from "../utils/with-apollo";

import { useMeQuery } from "../generated/graphql";

import Layout from "../components/Layout";
import { Stack, Box, Button, Flex } from "@chakra-ui/react";

const Index: React.FC = () => {
	const { data: userData } = useMeQuery();

	return (
		<>
			<Layout>
				<div>Hello World</div>;
			</Layout>
		</>
	);
};

export default withApollo(Index, { getDataFromTree });
