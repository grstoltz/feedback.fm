import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { useRouter } from "next/router";

import { withApollo } from "../utils/withApollo";

interface uploadProps {}

const upload: React.FC<uploadProps> = ({}) => {
	const router = useRouter();
	return (
		<Wrapper>
			<Box>Upload your media</Box>
		</Wrapper>
	);
};

export default withApollo({ ssr: false })(upload);
