import { getDataFromTree } from "@apollo/client/react/ssr";
import NextLink from "next/link";

import { withApollo } from "../utils/with-apollo";
import { useIsAuth } from "../utils/useIsAuth";

import { Song, useMeQuery } from "../generated/graphql";
import { useUserQuery } from "../generated/graphql";

import Layout from "../components/Layout";
import SongCard from "../components/SongCard";
import SongCardSkeleton from "../components/SongCard/skeleton";

import {
	Box,
	Stack,
	Tab,
	Tabs,
	TabList,
	TabPanels,
	TabPanel,
	Link,
	Text,
	Heading,
} from "@chakra-ui/react";

const Admin: React.FC = () => {
	useIsAuth();
	const { data: userData } = useMeQuery();

	const userId = userData?.me?.id as number;

	const { data, loading, error } = useUserQuery({
		variables: { id: userId },
	});

	if (loading || error || !data?.user) {
		return (
			<Layout>
				<SongCardSkeleton />
			</Layout>
		);
	}

	const songs = data?.user?.songs || [];
	const receivedComments = data?.user?.receivedComments || [];
	const sentComments = data?.user?.sentComments || [];

	return (
		<>
			<Layout>
				<Tabs>
					<TabList>
						<Tab>My Songs</Tab>
						<Tab>Sent Feedback</Tab>
						<Tab>Received Feedback</Tab>
					</TabList>

					<TabPanels>
						<TabPanel>
							<Box>Your Songs</Box>
							{loading
								? [1, 2, 3, 4, 5].map((i) => (
										<Stack marginY="30px" key={i}>
											<Box padding={5} shadow="md" borderWidth="1px">
												<SongCardSkeleton />
											</Box>
										</Stack>
								  ))
								: songs
								? songs.map(
										(song) =>
											song && (
												<Stack marginY="30px" key={song.id}>
													<Box
														padding={5}
														shadow="md"
														borderWidth="1px"
													>
														<SongCard
															song={song}
															showEditDeleteButton={
																song.ownerId === userId
															}
														/>
													</Box>
												</Stack>
											)
								  )
								: null}
						</TabPanel>
						<TabPanel>
							{loading
								? [1, 2, 3, 4, 5].map((i) => (
										<Stack marginY="30px" key={i}>
											<Box padding={5} shadow="md" borderWidth="1px">
												<SongCardSkeleton />
											</Box>
										</Stack>
								  ))
								: sentComments
								? sentComments.map(
										(comment) =>
											comment.song && (
												<Stack marginY="30px" key={comment.id}>
													<Box
														padding={5}
														shadow="md"
														borderWidth="1px"
													>
														<NextLink
															href="feedback/[feedbackId]"
															as={`/feedback/${comment.id}`}
														>
															<Link>
																<Heading fontSize="xl">
																	{comment.song.title}
																</Heading>
															</Link>
														</NextLink>

														{comment.body}
														<Box>
															Comment is{" "}
															{comment.approval?.status}
														</Box>
													</Box>
												</Stack>
											)
								  )
								: null}
						</TabPanel>
						<TabPanel>
							{loading
								? [1, 2, 3, 4, 5].map((i) => (
										<Stack marginY="30px" key={i}>
											<Box padding={5} shadow="md" borderWidth="1px">
												<SongCardSkeleton />
											</Box>
										</Stack>
								  ))
								: receivedComments
								? receivedComments.map(
										(comment) =>
											comment.song && (
												<Stack marginY="30px" key={comment.id}>
													<Box
														padding={5}
														shadow="md"
														borderWidth="1px"
													>
														<NextLink
															href="song/[songId]"
															as={`/song/${comment.song.id}`}
														>
															<Link>
																<Heading fontSize="xl">
																	{comment.song.title}
																</Heading>
															</Link>
														</NextLink>
														{comment.body}
														<Box>
															Comment is{" "}
															{comment.approval?.status}
														</Box>
													</Box>
												</Stack>
											)
								  )
								: null}
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Layout>
		</>
	);
};

export default withApollo(Admin, { getDataFromTree });
