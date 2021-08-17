// HOCs
import { getDataFromTree } from "@apollo/client/react/ssr";
import { withApollo } from "../../utils/with-apollo";
// Hooks
import {
	useSongQuery,
	useMeQuery,
	useCommentQuery,
	useCreateCommentMutation,
} from "../../generated/graphql";
import { useRouter } from "next/router";
import NextLink from "next/link";

// Components
import Layout from "../../components/Layout";

import { useIsAuth } from "../../utils/useIsAuth";

import {
	Heading,
	Text,
	Flex,
	Skeleton,
	SkeletonText,
	Button,
	Box,
	Link,
	Stack,
} from "@chakra-ui/react";

import * as Yup from "yup";

const Feedback: React.FC = () => {
	useIsAuth();

	const router = useRouter();

	const intId =
		typeof router.query.feedbackId === "string"
			? parseInt(router.query.feedbackId)
			: -1;

	const { data: userData } = useMeQuery();

	const { loading, data, error } = useCommentQuery({
		variables: {
			id: intId,
		},
	});

	if (loading || error || !data?.comment) {
		return (
			<Layout>
				<Skeleton height="43px" />
				<SkeletonText marginTop="32px" noOfLines={10} spacing="16px" />
				<SkeletonText marginTop="32px" noOfLines={10} spacing="16px" />
			</Layout>
		);
	}

	const comment = data?.comment;

	return (
		<Layout>
			<Box>
				<NextLink href="/song/[songId]" as={`/song/${comment?.song?.id}`}>
					<Link>
						<Heading fontSize="xl">
							Comment on {comment.song?.title}
						</Heading>
					</Link>
				</NextLink>
				<Text>Song by: {comment.receiver.username}</Text>
				<Text>Comment by: {comment.sender.username}</Text>
				<Text>{comment.body}</Text>
			</Box>
		</Layout>
	);
};

export default withApollo(Feedback, { getDataFromTree });
