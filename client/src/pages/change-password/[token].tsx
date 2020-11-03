import React, { useState } from "react";
import { NextPage } from "next";
import { Wrapper } from "../../components/Wrapper";
import { Formik, Form } from "formik";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../../components/InputField";
import { Box, Button, Link, Flex } from "@chakra-ui/core";
import {
	useChangePasswordMutation,
	MeDocument,
	MeQuery,
} from "../../generated/graphql";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { withApollo } from "../../utils/withApollo";

const ChangePassword: NextPage = () => {
	const router = useRouter();
	const [changePassword] = useChangePasswordMutation();
	const [tokenError, setTokenError] = useState("");
	return (
		<Wrapper variant="small">
			<Formik
				initialValues={{ newPassword: "", confirmNewPassword: "" }}
				onSubmit={async (values, { setErrors, setFieldError }) => {
					if (values.newPassword !== values.confirmNewPassword) {
						setFieldError("confirmNewPassword", "Passwords do not match");
						return;
					}
					const response = await changePassword({
						variables: {
							newPassword: values.newPassword,
							token:
								typeof router.query.token === "string"
									? router.query.token
									: "",
						},
						update: (cache, { data }) => {
							cache.writeQuery<MeQuery>({
								query: MeDocument,
								data: {
									__typename: "Query",
									me: data?.changePassword.user,
								},
							});
						},
					});
					if (response.data?.changePassword.errors) {
						const errorMap = toErrorMap(
							response.data.changePassword.errors
						);
						if ("token" in errorMap) {
							setTokenError(errorMap.token);
						}
						setErrors(errorMap);
					} else if (response.data?.changePassword.user) {
						// worked
						router.push("/");
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<InputField
							name="newPassword"
							placeholder="New password"
							label="New Password"
							type="password"
						/>
						<InputField
							name="confirmNewPassword"
							placeholder="New password"
							label="Confirm Password"
							type="password"
						/>
						{tokenError ? (
							<Flex>
								<Box mr={2} style={{ color: "red" }}>
									{tokenError}
								</Box>
								<NextLink href="/forgot-password">
									<Link>Click here to get a new one</Link>
								</NextLink>
							</Flex>
						) : null}
						<Button
							mt={4}
							type="submit"
							isLoading={isSubmitting}
							variantColor="teal"
						>
							Change Password
						</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
};

export default withApollo({ ssr: false })(ChangePassword);
