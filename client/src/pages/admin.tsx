import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@chakra-ui/core";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useRouter } from "next/router";
import { useAdminQuery } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { withApollo } from "../utils/withApollo";
import { Layout } from "../components/Layout";

interface registerProps {}

const Admin: React.FC<registerProps> = ({}) => {
	const { data, loading, error } = useAdminQuery();

	if (loading) {
		return (
			<Layout>
				<div>loading...</div>
			</Layout>
		);
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	if (!data) {
		return (
			<Layout>
				<Box>could not find User</Box>
			</Layout>
		);
	}
	return (
		<Layout variant="small">
			<div>Admin</div>
		</Layout>
	);
};

export default withApollo({ ssr: false })(Admin);
