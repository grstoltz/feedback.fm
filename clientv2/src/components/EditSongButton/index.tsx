// Hooks
import { useRouter } from "next/router";

// Components
import { IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

// Types
import { Song } from "../../generated/graphql";
import { SpaceProps } from "@chakra-ui/react";

type Props = SpaceProps & {
	song: Pick<Song, "id">;
};

const EditSongButtons: React.FC<Props> = ({ song, ...styles }) => {
	const router = useRouter();
	return (
		<IconButton
			{...styles}
			icon={<EditIcon />}
			aria-label="Delete Song"
			colorScheme="gray"
			onClick={() => {
				router.push(`/song/edit/${song.id}`);
			}}
		/>
	);
};

export default EditSongButtons;
