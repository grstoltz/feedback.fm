import React, { useState } from "react";
import { Formik, Form } from "formik";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../../components/InputField";
import { Box, Button, Link, Flex, Heading, Stack } from "@chakra-ui/react";

import {
	useCreateCommentMutation,
	useCommentsQuery,
	useSongQuery,
	useMeQuery,
	useCreateNotificationMutation,
} from "../../generated/graphql";

import { useRouter } from "next/router";
import { withApollo } from "../../utils/withApollo";
import { Layout } from "../../components/Layout";

interface songProps {}

const Song: React.FC<songProps> = () => {
	const router = useRouter();

	const [createComment] = useCreateCommentMutation();
	const [createNotification] = useCreateNotificationMutation();

	const intId =
		typeof router.query.id === "string" ? parseInt(router.query.id) : -1;

	const {
		data: songData,
		error: songError,
		loading: songLoading,
	} = useSongQuery({
		skip: intId === -1,
		variables: {
			id: intId,
		},
	});

	const {
		data: commentsData,
		error: commentsError,
		loading: commentsLoading,
	} = useCommentsQuery({
		skip: intId === -1,
		variables: {
			id: intId,
		},
	});

	const { data: meData, loading: meLoading, error: meError } = useMeQuery();

	const initialValues = { body: "" };

	if (songLoading || commentsLoading || meLoading) {
		return (
			<Layout>
				<div>loading...</div>
			</Layout>
		);
	}

	if (songError) {
		return <div>{songError.message}</div>;
	}

	if (!songData?.song) {
		return (
			<Layout>
				<Box>Could not find song...</Box>
			</Layout>
		);
	}

	let commentSection;

	if (!meData?.me) {
		commentSection = null;
	}

	console.log("Comment", commentsData.comments);

	console.log("me", meData?.me?.id);

	console.log(
		commentsData.comments.some((el) => el.sender.id !== meData?.me?.id)
	);

	if (songData.song.owner.id !== meData?.me?.id) {
		commentSection = (
			<Formik
				initialValues={initialValues}
				onSubmit={async (
					values,
					{ setErrors, setFieldError, resetForm }
				) => {
					const { errors, context } = await createComment({
						variables: {
							input: {
								parentId: songData.song.id,
								receiverId: songData.song.owner.id,
								senderId: meData.me.id,
								...values,
							},
						},
						update: (cache) => {
							cache.evict({ fieldName: "comments:{}" });
						},
					});
					if (!errors) {
						createNotification({
							variables: {
								input: {
									receiverId: songData.song.owner.id,
									message: `${meData.me.username} left a comment on ${songData.song.title}.`,
									parentId: context.id,
									parentType: "comment",
								},
							},
						});
						resetForm();
					}
				}}
			>
				{({ isSubmitting, values }) => (
					<Form>
						<InputField
							name="body"
							textarea
							placeholder="Write your feedback here"
							label="Comment"
						/>

						<Button
							mt={4}
							type="submit"
							isDisabled={isSubmitting || !values.body}
							variantColor="teal"
						>
							Add Comment
						</Button>
					</Form>
				)}
			</Formik>
		);
	}

	if (commentsData.comments.some((el) => el.sender.id === meData?.me?.id)) {
		commentSection = <Box mt={2}>You've already commented on this song!</Box>;
	}

	return (
		<Layout>
			<Heading mb={4}>{songData.song.title}</Heading>
			<Box mb={4}>{songData.song.mediaUrl}</Box>
			<Box mb={4}>Uploaded By: {songData.song.owner.username}</Box>

			<Stack spacing={8}>
				{commentsData?.comments.map((s) => (
					<div style={{ marginTop: "8px" }} key={s.id}>
						<div>{`Author: ${s.sender.username}`}</div>
						{s.body}
					</div>
				))}
			</Stack>
			{commentSection}
		</Layout>
	);
};

export default withApollo({ ssr: false })(Song);
