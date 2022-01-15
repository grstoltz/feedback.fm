import { getDataFromTree } from "@apollo/client/react/ssr";

import { withApollo } from "../utils/with-apollo";

import { useMeQuery } from "../generated/graphql";

import { Stack, Box, Button, Flex } from "@chakra-ui/react";

import Layout from "../components/Layout";

const Notifications: React.FC = () => {
	const { data: userData } = useMeQuery();

	const userId = userData?.me?.id;

	return (
		<>
			<Layout>
				<Box></Box>
			</Layout>
		</>
	);
};

export default withApollo(Notifications, { getDataFromTree });
