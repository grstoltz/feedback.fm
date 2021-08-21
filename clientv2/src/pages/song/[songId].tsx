// HOCs
import { getDataFromTree } from "@apollo/client/react/ssr";
import { withApollo } from "../../utils/with-apollo";
// Hooks
import {
	useSongQuery,
	useMeQuery,
	useCreateCommentMutation,
	useUpdateApprovalMutation,
} from "../../generated/graphql";
import { useRouter } from "next/router";

// Components
import Layout from "../../components/Layout";
import DeleteSongButtons from "../../components/DeleteSongButton";
import EditSongButtons from "../../components/EditSongButton";
import TextArea from "../../components/TextArea";

import { Formik, Form } from "formik";
import {
	Heading,
	Text,
	Flex,
	Skeleton,
	SkeletonText,
	Button,
	Box,
	Stack,
} from "@chakra-ui/react";

import * as Yup from "yup";

enum FIELDS {
	BODY = "body",
}

const validationSchema = Yup.object().shape({
	[FIELDS.BODY]: Yup.string()
		.min(50, `Minimum 50 characters`)
		.required("This field is required"),
});

const Song: React.FC = () => {
	const router = useRouter();

	const intId =
		typeof router.query.songId === "string"
			? parseInt(router.query.songId)
			: -1;

	const { data: userData } = useMeQuery();
	const { loading, data, error } = useSongQuery({
		variables: {
			id: intId,
		},
	});

	const [createComment] = useCreateCommentMutation();
	const [updateApproval] = useUpdateApprovalMutation({
		update(cache) {
			cache.evict({ id: "ROOT_QUERY", fieldName: "song" });
		},
	});

	if (loading || error || !data?.song) {
		return (
			<Layout>
				<Skeleton height="43px" />
				<SkeletonText marginTop="32px" noOfLines={10} spacing="16px" />
				<SkeletonText marginTop="32px" noOfLines={10} spacing="16px" />
			</Layout>
		);
	}

	const song = data.song;
	const userId = userData?.me?.id;
	const comments = data.song?.comment;
	let userHasLeftComment = false;

	if (comments?.some((e) => e.senderId === userId)) {
		userHasLeftComment = true;
	}

	const handleApprovalUpdate = async (
		id: number | undefined,
		commentId: number,
		status: string
	) => {
		console.log("Called");
		const response = await updateApproval({
			variables: { id, commentId, status },
		});
	};

	return (
		<Layout>
			{song.ownerId === userId && (
				<Flex marginBottom="20px" justifyContent="flex-end">
					<EditSongButtons song={song} marginRight="15px" />
					<DeleteSongButtons song={song} />
				</Flex>
			)}
			<Heading marginBottom="20px">{song.title}</Heading>
			<Text whiteSpace="pre-wrap" marginBottom="50px">
				Created By: {song.owner.username}
			</Text>
			<Text whiteSpace="pre-wrap" marginBottom="50px">
				{song.mediaUrl}
			</Text>
			{song.ownerId !== userId && userId && !userHasLeftComment && (
				<Formik
					initialValues={{ [FIELDS.BODY]: "" }}
					validationSchema={validationSchema}
					onSubmit={async (values) => {
						try {
							const response = await createComment({
								variables: {
									input: {
										parentId: intId,
										receiverId: data.song?.ownerId as number,
										body: values[FIELDS.BODY],
									},
								},
							});
							if (!response.errors) {
								const postId = response.data?.createComment?.id;
								router.push(`/feedback/${postId}`);
							}
						} catch (err) {
							if (err.message.startsWith("NotAuthenticated")) {
								router.replace("/login");
							}
							//add error handling
						}
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<TextArea
								name={FIELDS.BODY}
								label="Body"
								placeholder="Leave your feedback"
								marginBottom="20px"
								rows={5}
							/>
							<Button type="submit" isLoading={isSubmitting}>
								Submit Comment
							</Button>
						</Form>
					)}
				</Formik>
			)}
			{comments
				? comments.map(
						(comment) =>
							comment.id && (
								<Stack marginY="30px" key={comment.id}>
									<Box padding={5} shadow="md" borderWidth="1px">
										{comment.body}
										{comment.receiver.id === userId ? (
											<>
												{comment.approval?.id ? (
													<>
														{comment.approval?.status ===
														"approved" ? (
															<Box>This comment is approved</Box>
														) : (
															<Box>
																This comment is not approved
															</Box>
														)}
													</>
												) : (
													<Stack
														direction="row"
														spacing={4}
														align="center"
													>
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
								</Stack>
							)
				  )
				: null}
		</Layout>
	);
};

export default withApollo(Song, { getDataFromTree });
