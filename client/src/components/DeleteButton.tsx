import React from "react";
import { Box, IconButton, Link } from "@chakra-ui/react";
import {
	useDeleteSongMutation,
	useDeleteCommentMutation,
	useMeQuery,
} from "../generated/graphql";

interface DeleteButtonProps {
	id: number;
	creatorId: number;
	contentType: string;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
	id,
	creatorId,
	contentType,
}) => {
	const { data: meData } = useMeQuery();
	const [deleteComment] = useDeleteCommentMutation();
	const [deleteSong] = useDeleteSongMutation();
	let deleteButton;

	if (meData?.me?.id !== creatorId) {
		return null;
	}

	if (contentType === "song") {
		deleteButton = (
			<IconButton
				icon="delete"
				aria-label="Delete Song"
				onClick={() => {
					deleteSong({
						variables: { id },
						update: (cache) => {
							cache.evict({ id: "Song:" + id });
						},
					});
				}}
			/>
		);
	} else if (contentType === "comment") {
		deleteButton = (
			<IconButton
				icon="delete"
				aria-label="Delete Comment"
				onClick={() => {
					deleteComment({
						variables: { id },
						update: (cache) => {
							cache.evict({ id: "Comment:" + id });
						},
					});
				}}
			/>
		);
	} else {
		return null;
	}

	return <Box>{deleteButton}</Box>;
};
