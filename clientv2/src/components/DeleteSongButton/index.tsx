// Hooks
import { useDeleteSongMutation } from "../../generated/graphql";

// Components
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

// Types
import { Song } from "../../generated/graphql";

type Props = {
	song: Pick<Song, "id" | "__typename">;
};

const DeleteSongButtons: React.FC<Props> = ({ song }) => {
	const [deleteSong, { loading: isDeleteSongLoading }] = useDeleteSongMutation(
		{
			variables: { id: song.id },
			update(cache) {
				cache.evict({ id: cache.identify(song) });
			},
		}
	);

	return (
		<IconButton
			icon={<DeleteIcon />}
			aria-label="Delete post"
			colorScheme="red"
			isLoading={isDeleteSongLoading}
			onClick={() => {
				deleteSong();
			}}
		/>
	);
};

export default DeleteSongButtons;
