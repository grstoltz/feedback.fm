// Components
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

import TimeAgo from "react-timeago";

// Types
import { useCreateTransactionMutation, Maybe } from "../../generated/graphql";

type Props = {
	comment: {
		__typename?: "Comment" | undefined;
		id: number;
		body: string;
		senderId: number;
		createdAt: Date;
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

const [createTransaction] = useCreateTransactionMutation();

const handleCreateTransaction = async (
	id: number,
	transactionAmount: number
) => {
	const transaction = await createTransaction({
		variables: { id, transactionAmount },
	});
};

const CommentCard: React.FC<Props> = ({
	comment,
	handleApprovalUpdate,
	userId,
}) => {
	return (
		<Flex>
			<Box padding={5} shadow="md" borderWidth="1px" width="100%">
				<Flex
					marginBottom={"10px"}
					alignItems="center"
					justifyContent="start"
				>
					<NextLink
						href="user/[userId]"
						as={`../user/${comment.sender.id}`}
					>
						<Link>
							<Avatar size={"sm"} src={comment.sender.avatarURL} />
						</Link>
					</NextLink>

					<NextLink
						href="user/[userId]"
						as={`../user/${comment.sender.id}`}
					>
						<Link>
							<Heading marginLeft="10px" fontSize="s">
								{comment.sender.username}
							</Heading>
						</Link>
					</NextLink>
					<NextLink
						href="../feedback/[feedbackId]"
						as={`/feedback/${comment.id}`}
					>
						<Link marginLeft="auto">
							<Text>
								<TimeAgo date={comment.createdAt} />
							</Text>
						</Link>
					</NextLink>
				</Flex>
				<Text>{comment.body}</Text>

				{comment.receiver.id === userId ? (
					<>
						{comment.approval?.id ? (
							<>
								{comment.approval?.status === "approved" && (
									<Box>This comment is approved</Box>
								)}

								{comment.approval?.status === "denied" && (
									<>
										<Box>This comment is not approved</Box>
										<Button
											colorScheme="red"
											variant="solid"
											onClick={() =>
												handleApprovalUpdate(
													comment.approval?.id,
													comment.id,
													"disputed",
													true,
													10
												)
											}
										></Button>
									</>
								)}

								{comment.approval?.status === "disputed" && (
									<Box>This comment is under admin review.</Box>
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
											"approved",
											true,
											10
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
											"denied",
											false
										)
									}
								>
									Deny Comment
								</Button>
							</Stack>
						)}
					</>
				) : (
					<Box>This comment has not been reviewed yet.</Box>
				)}

				{comment.sender.id === userId && (
					<>
						{comment.approval?.status === "approved" && (
							<Box>This comment is approved</Box>
						)}

						{comment.approval?.status === "denied" && (
							<Box>This comment is not approved</Box>
						)}

						{comment.approval?.status === "disputed" && (
							<Box>This comment is under admin review.</Box>
						)}
					</>
				)}
			</Box>
		</Flex>
	);
};

export default CommentCard;
