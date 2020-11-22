import React, { useState } from "react";
import { Formik, Form } from "formik";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../../components/InputField";
import { Box, Button, Link, Flex, Heading, Stack } from "@chakra-ui/core";

import {
	useCommentQuery,
	useMeQuery,
	useReviewCommentMutation,
	useCreateTransactionMutation,
	useCreateNotificationMutation,
} from "../../generated/graphql";

import { useRouter } from "next/router";
import { withApollo } from "../../utils/withApollo";
import { Layout } from "../../components/Layout";

interface commentProps {}

const Comment: React.FC<commentProps> = () => {
	const router = useRouter();

	const [reviewComment] = useReviewCommentMutation();
	const [createTransaction] = useCreateTransactionMutation();
	const [createNotification] = useCreateNotificationMutation();

	const intId =
		typeof router.query.id === "string" ? parseInt(router.query.id) : -1;

	const {
		data: commentData,
		error: commentError,
		loading: commentLoading,
	} = useCommentQuery({
		skip: intId === -1,
		variables: {
			id: intId,
		},
	});

	const { data: meData, loading: meLoading, error: meError } = useMeQuery();

	const initialValues = { body: "" };

	if (commentLoading || meLoading) {
		return (
			<Layout>
				<div>loading...</div>
			</Layout>
		);
	}

	if (commentError) {
		return <div>{commentError.message}</div>;
	}

	if (!commentData?.comment) {
		return (
			<Layout>
				<Box>Could not find this comment...</Box>
			</Layout>
		);
	}

	if (
		commentData.comment.receiver.id !== meData.me?.id &&
		commentData.comment.sender.id !== meData.me?.id
	) {
		console.log("sender", commentData.comment.sender.id);
		console.log("receiver", commentData.comment.receiver.id);
		console.log("me", meData.me?.id);
		return <div>You aren't allowed to see this</div>;
	}

	let commentSection;

	if (!meData.me) {
		commentSection = null;
	}

	if (commentData.comment.receiver.id === meData.me.id) {
		if (commentData.comment.status === "Approved") {
			commentSection = <div>Comment approved!</div>;
		} else if (commentData.comment.status === "Rejected") {
			commentSection = <div>Comment rejected :(</div>;
		} else {
			commentSection = (
				<Flex justifyContent="space-between">
					<Button
						onClick={async () => {
							const { errors } = await reviewComment({
								variables: {
									id: intId,
									status: "Approved",
								},
							});

							if (!errors) {
								await createTransaction({
									variables: {
										id: commentData.comment.receiver.id as number,
										transactionAmount: 5,
									},
								});
								await createTransaction({
									variables: {
										id: commentData.comment.sender.id as number,
										transactionAmount: 20,
									},
								});
								await createNotification({
									variables: {
										input: {
											senderId: meData.me.id,
											receiverId: commentData.comment.sender.id,
											message: "approved your comment",
										},
									},
								});
							}
						}}
						color="teal"
					>
						Approve
					</Button>
					<Button
						onClick={async () => {
							const { errors } = await reviewComment({
								variables: {
									id: intId,
									status: "Rejected",
								},
							});

							if (!errors) {
								await createNotification({
									variables: {
										input: {
											senderId: meData.me.id,
											receiverId: commentData.comment.sender.id,
											message: "did not approve your comment",
										},
									},
								});
							}
						}}
						color="red"
					>
						Deny
					</Button>
				</Flex>
			);
		}
	}

	return (
		<Layout>
			<Heading mb={4}>
				Comment On: {commentData.comment.parent.title}
			</Heading>
			<Stack spacing={8}>
				<div style={{ marginTop: "8px" }}>
					<div>{`Author: ${commentData.comment.sender.username}`}</div>
					{commentData.comment.body}
				</div>
			</Stack>
			{commentSection}
		</Layout>
	);
};

export default withApollo({ ssr: false })(Comment);
