import React, { useState } from "react";
import { Formik, Form } from "formik";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../../components/InputField";
import { Box, Button, Link, Flex, Heading, Stack } from "@chakra-ui/core";

import {
	useCreateCommentMutation,
	useCommentsQuery,
	useSongQuery,
	useMeQuery,
} from "../../generated/graphql";

import { useRouter } from "next/router";
import { withApollo } from "../../utils/withApollo";
import { Layout } from "../../components/Layout";

interface songProps {}

const Song: React.FC<songProps> = () => {
	const router = useRouter();

	const [createComment] = useCreateCommentMutation();

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

	const { data: meData, error: meError } = useMeQuery();

	const initialValues = { body: "" };

	if (songLoading) {
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
				<Box>could not find post</Box>
			</Layout>
		);
	}

	return (
		<Layout>
			<Heading mb={4}>{songData.song.title}</Heading>
			<Box mb={4}>{songData.song.mediaUrl}</Box>
			<Stack spacing={8}>
				{commentsData?.comments.map((s) => (
					<div style={{ marginTop: "8px" }} key={s.id}>
						<div>{`Author: ${s.sender.username}`}</div>
						{s.body}
					</div>
				))}
			</Stack>
			<Formik
				initialValues={initialValues}
				onSubmit={async (
					values,
					{ setErrors, setFieldError, resetForm }
				) => {
					const { errors } = await createComment({
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
		</Layout>
	);
};

export default withApollo({ ssr: false })(Song);
