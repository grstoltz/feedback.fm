// Components
import DeletePostButtons from "../DeleteSongButton";
import EditPostButtons from "../EditSongButton";
import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

// Types
import { SongSnippetFragment } from "../../generated/graphql";

type Props = {
	song: SongSnippetFragment;
	showEditDeleteButton: boolean;
};

const SongCard: React.FC<Props> = ({ song, showEditDeleteButton }) => {
	return (
		<Flex>
			<Box marginLeft="15px" width="100%">
				<NextLink href="song/[songId]" as={`/song/${song.id}`}>
					<Link>
						<Heading fontSize="xl">{song.title}</Heading>
					</Link>
				</NextLink>
				<Text>Posted by {song.owner.username}</Text>
				<Flex
					alignItems="center"
					justifyContent="space-between"
					marginTop="16px"
				>
					<Text>{song.mediaUrl}</Text>
					{showEditDeleteButton && (
						<Flex>
							<EditPostButtons song={song} marginRight="15px" />
							<DeletePostButtons song={song} />
						</Flex>
					)}
				</Flex>
			</Box>
		</Flex>
	);
};

export default SongCard;
