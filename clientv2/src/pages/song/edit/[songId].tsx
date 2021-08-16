import React from "react";

// Hooks
import {
	useUpdateSongMutation,
	useSongQuery,
} from "../../../generated/graphql";
import { useRouter } from "next/router";
import { useIsAuth } from "../../../utils/useIsAuth";

// HOCs
import { withApollo } from "../../../utils/with-apollo";
// Components
import Layout from "../../../components/Layout";
import InputField from "../../../components/InputField";
import { Formik, Form } from "formik";
import { Button, Skeleton, SkeletonText } from "@chakra-ui/react";

// Utils
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

const EditSong: React.FC = () => {
	useIsAuth();
	const router = useRouter();
	const intId =
		typeof router.query.songId === "string"
			? parseInt(router.query.songId)
			: -1;

	const { data } = useSongQuery({ variables: { id: intId } });
	const [updateSong] = useUpdateSongMutation({
		update(cache) {
			cache.evict({ id: "ROOT_QUERY", fieldName: "song" });
		},
	});

	if (!data?.song) {
		return <p>Could not find a song!</p>;
	}

	return (
		<Layout>
			<Formik
				initialValues={{
					[FIELDS.TITLE]: data.song.title,
					[FIELDS.MEDIAURL]: data.song.mediaUrl,
					[FIELDS.GENRE]: data.song.genre,
				}}
				validationSchema={validationSchema}
				onSubmit={async (values) => {
					const response = await updateSong({
						variables: { ...values, id: intId },
					});
					if (!response.errors) {
						router.back();
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
							Edit Song
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
	);
};

export default withApollo(EditSong);
