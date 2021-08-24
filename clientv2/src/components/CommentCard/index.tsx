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
	Avatar,
} from "@chakra-ui/react";
import NextLink from "next/link";

// Types
import { Maybe, SongSnippetFragment } from "../../generated/graphql";

type Props = {
	comment: {
		__typename?: "Comment" | undefined;
		id: number;
		body: string;
		senderId: number;
		receiver: {
			__typename?: "User" | undefined;
			id: number;
		};
		sender: {
			__typename?: "User" | undefined;
			id: number;
			avatarURL: string;
			username: string;
		};
		approval?:
			| Maybe<{
					__typename?: "Approval" | undefined;
					id: number;
					status: string;
			  }>
			| undefined;
	};
	handleApprovalUpdate: any;
	userId: number | undefined;
};

const CommentCard: React.FC<Props> = ({
	comment,
	handleApprovalUpdate,
	userId,
}) => {
	return (
		<Flex>
			<Box padding={5} shadow="md" borderWidth="1px" width="100%">
				<Flex alignItems="center" justifyContent="start" marginTop="16px">
					<Avatar size={"sm"} src={comment.sender.avatarURL} />
					<NextLink
						href="user/[userId]"
						as={`/sender/${comment.sender.id}`}
					>
						<Link>
							<Heading fontSize="s">{comment.sender.username}</Heading>
						</Link>
					</NextLink>
				</Flex>
				<Text>{comment.body}</Text>

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
