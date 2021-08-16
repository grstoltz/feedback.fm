import { getDataFromTree } from "@apollo/client/react/ssr";

import { withApollo } from "../utils/with-apollo";

import { useMeQuery } from "../generated/graphql";
import { useSongsQuery } from "../generated/graphql";

import Layout from "../components/Layout";
import SongCard from "../components/SongCard";
import SongCardSkeleton from "../components/SongCard/skeleton";

import { Stack, Box, Button, Flex } from "@chakra-ui/react";

const Index: React.FC = () => {
	const { data: userData } = useMeQuery();
	const { data, loading, error } = useSongsQuery();

	const songs = data?.songs || [];
	const userId = userData?.me?.id;

	const randomSong = songs[Math.floor(Math.random() * songs.length)];

	return (
		<>
			<Layout>
				{loading ? (
					<Stack marginY="30px">
						<Box padding={5} shadow="md" borderWidth="1px">
							<SongCardSkeleton />
						</Box>
					</Stack>
				) : songs ? (
					<Box padding={5} shadow="md" borderWidth="1px">
						<SongCard
							/*@ts-ignore*/
							song={randomSong}
							showEditDeleteButton={randomSong.ownerId === userId}
						/>
					</Box>
				) : null}
			</Layout>
		</>
	);
};

export default withApollo(Index, { getDataFromTree });
