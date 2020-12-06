import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import { useCreateSongMutation } from "../generated/graphql";
import { useIsAuth } from "../utils/useIsAuth";
import { withApollo } from "../utils/withApollo";

const CreateSong: React.FC<{}> = ({}) => {
	const router = useRouter();
	useIsAuth();
	const [createSong] = useCreateSongMutation();
	return (
		<Layout variant="small">
			<Formik
				initialValues={{ title: "", mediaUrl: "", genre: "" }}
				onSubmit={async (values) => {
					const { errors } = await createSong({
						variables: { input: values },
						update: (cache) => {
							cache.evict({ fieldName: "songs" });
							cache.evict({ fieldName: "admin" });
						},
					});
					if (!errors) {
						router.push("/");
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<InputField name="title" placeholder="Title" label="Title" />
						<InputField
							name="mediaUrl"
							placeholder="Song URL"
							label="Song URL"
						/>
						<InputField name="genre" placeholder="Genre" label="Genre" />

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
	);
};

export default withApollo({ ssr: false })(CreateSong);
