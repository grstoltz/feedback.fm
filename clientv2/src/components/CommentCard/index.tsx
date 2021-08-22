// Components
import DeletePostButtons from "../DeleteSongButton";
import EditPostButtons from "../EditSongButton";
import {
	Box,
	Stack,
	Button,
	Heading,
	Text,
	Flex,
	Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

// Types
import { SongSnippetFragment } from "../../generated/graphql";

type Props = {
	comment: Comment;
	showEditDeleteButton: boolean;
	handleApprovalUpdate: any;
};

const CommentCard: React.FC<Props> = ({
	comment,
	showEditDeleteButton,
	handleApprovalUpdate,
}) => {
	return (
		<Flex>
			<Box padding={5} shadow="md" borderWidth="1px">
				{comment.body}
				{comment.receiver.id === userId ? (
					<>
						{comment.approval?.id ? (
							<>
								{comment.approval?.status === "approved" ? (
									<Box>This comment is approved</Box>
								) : (
									<Box>This comment is not approved</Box>
								)}
							</>
						) : (
							<Stack direction="row" spacing={4} align="center">
								<Button
									colorScheme="green"
									variant="solid"
									onClick={() =>
										handleApprovalUpdate(
											comment.approval?.id,
											comment.id,
											"approved"
										)
									}
								>
									Approve Comment
								</Button>
								<Button
									colorScheme="red"
									variant="outline"
									onClick={() =>
										handleApprovalUpdate(
											comment.approval?.id,
											comment.id,
											"denied"
										)
									}
								>
									Deny Comment
								</Button>
							</Stack>
						)}
					</>
				) : null}
			</Box>
		</Flex>
	);
};

export default CommentCard;
