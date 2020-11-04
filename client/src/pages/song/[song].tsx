import React, { useState } from "react";
import { NextPage } from "next";
import { Wrapper } from "../../components/Wrapper";
import { Formik, Form } from "formik";
import { toErrorMap } from "../../utils/toErrorMap";
import { InputField } from "../../components/InputField";
import { Box, Button, Link, Flex } from "@chakra-ui/core";

import { useSongsQuery } from "../../generated/graphql";

import { useRouter } from "next/router";
import NextLink from "next/link";
import { withApollo } from "../../utils/withApollo";

interface songProps {}

const Song: React.FC<songProps> = () => {
	return (
		<Wrapper variant="small">
			<Formik
				initialValues={{ newPassword: "", confirmNewPassword: "" }}
				onSubmit={async (values, { setErrors, setFieldError }) => {
					console.log(values);
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

						<Button
							mt={4}
							type="submit"
							isLoading={isSubmitting}
							variantColor="teal"
						>
							Add Comment
						</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
};

export default withApollo({ ssr: false })(Song);
