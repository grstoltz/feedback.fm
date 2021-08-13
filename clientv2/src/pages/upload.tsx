import { getDataFromTree } from "@apollo/client/react/ssr";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";

import { withApollo } from "../utils/with-apollo";
import { useIsAuth } from "../utils/useIsAuth";

import { useCreateSongMutation, useMeQuery } from "../generated/graphql";

import Layout from "../components/Layout";
import { Stack, Box, Button, Flex } from "@chakra-ui/react";

import * as Yup from "yup";

enum FIELDS {
	TITLE = "title",
	TEXT = "text",
}

const validationSchema = Yup.object().shape({
	[FIELDS.TITLE]: Yup.string()
		.min(5, `Minimum 5 characters`)
		.max(100, `Maximum 100 characters`)
		.required("This field is required"),
	[FIELDS.TEXT]: Yup.string()
		.min(50, `Minimum 50 characters`)
		.required("This field is required"),
});

const Upload: React.FC = () => {
	useIsAuth();

	const { data: userData } = useMeQuery();

	const [createSong] = useCreateSongMutation({
		update(cache) {
			cache.evict({ id: "ROOT_QUERY", fieldName: "songs" });
		},
	});

	const router = useRouter();

	return (
		<>
			<Layout>
				<Formik
					initialValues={{
						title: "",
						mediaUrl: "",
						genre: "",
						file: null,
					}}
					onSubmit={async (values) => {}}
				>
					{({ isSubmitting }) => (
						<Form>
							<Button
								mt={4}
								type="submit"
								isLoading={isSubmitting}
								variantColor="teal"
							>
								Create Song
							</Button>
						</Form>
					)}
				</Formik>
			</Layout>
		</>
	);
};

export default withApollo(Upload, { getDataFromTree });
