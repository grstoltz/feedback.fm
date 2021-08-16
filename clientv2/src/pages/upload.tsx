import { getDataFromTree } from "@apollo/client/react/ssr";
import { useRouter } from "next/router";
import { Formik, Form } from "formik";
import { Button } from "@chakra-ui/react";

import { withApollo } from "../utils/with-apollo";
import { useIsAuth } from "../utils/useIsAuth";

import { useCreateSongMutation } from "../generated/graphql";

import Layout from "../components/Layout";
import InputField from "../components/InputField";

import * as Yup from "yup";

enum FIELDS {
	TITLE = "title",
	MEDIAURL = "mediaUrl",
	GENRE = "genre",
}

const validationSchema = Yup.object().shape({
	[FIELDS.TITLE]: Yup.string()
		.min(5, `Minimum 5 characters`)
		.max(100, `Maximum 100 characters`)
		.required("This field is required"),
	[FIELDS.MEDIAURL]: Yup.string()
		.min(5, `Minimum 5 characters`)
		.matches(/soundcloud.com\//, "Must be a Soundcloud URL")
		.required("This field is required"),
	[FIELDS.GENRE]: Yup.string()
		.min(3, "Minimum 3 characters")
		.required("This field is required"),
});

const Upload: React.FC = () => {
	useIsAuth();

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
						[FIELDS.TITLE]: "",
						[FIELDS.MEDIAURL]: "",
						[FIELDS.GENRE]: "",
						mediaType: "Soundcloud",
					}}
					validationSchema={validationSchema}
					onSubmit={async (values) => {
						try {
							const response = await createSong({
								variables: { input: values },
							});
							if (!response.errors) {
								const songId = response.data?.createSong.id;
								router.push(`/song/${songId}`);
							}
						} catch (err) {
							if (err.message.startsWith("NotAuthenticated")) {
								router.replace("/login");
							}
						}
					}}
				>
					{({ isSubmitting }) => (
						<Form>
							<InputField
								name={FIELDS.TITLE}
								label="Title"
								placeholder="Title"
								marginBottom="10px"
							/>
							<InputField
								name={FIELDS.MEDIAURL}
								label="Media URL"
								placeholder="URL"
								marginBottom="20px"
							/>
							<InputField
								name={FIELDS.GENRE}
								label="Genre"
								placeholder="Genre"
								marginBottom="20px"
							/>
							<Button type="submit" isLoading={isSubmitting}>
								Create Song
							</Button>
							<Button
								colorScheme="red"
								marginLeft="10px"
								isLoading={isSubmitting}
								onClick={() => {
									router.back();
								}}
							>
								Cancel
							</Button>
						</Form>
					)}
				</Formik>
			</Layout>
		</>
	);
};

export default withApollo(Upload, { getDataFromTree });
