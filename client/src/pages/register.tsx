// Hooks
import { useRegisterMutation } from "../generated/graphql";
import { useRouter } from "next/router";

// HOC
import { getDataFromTree } from "@apollo/client/react/ssr";

import { withApollo } from "../utils/with-apollo";
// Components
import FormContainer from "../components/FormContainer";
import InputField from "../components/InputField";
import { Formik, Form } from "formik";
import { Button } from "@chakra-ui/react";

// Utils
import * as Yup from "yup";
import { toErrorMap } from "../utils/toErrorMap";

enum FIELDS {
	USERNAME = "username",
	EMAIL = "email",
	PASSWORD = "password",
}

const validationSchema = Yup.object().shape({
	[FIELDS.USERNAME]: Yup.string()
		.min(5, `Minimum 5 characters`)
		.max(100, `Maximum 100 characters`)
		.required("This field is required"),
	[FIELDS.EMAIL]: Yup.string()
		.email("Please enter a correct email")
		.required("This field is required"),
	[FIELDS.PASSWORD]: Yup.string().required("This field is required"),
});

const Register: React.FC = () => {
	const [register, { client }] = useRegisterMutation({
		update(cache) {
			cache.evict({ id: "ROOT_QUERY", fieldName: "me" });
		},
	});
	const router = useRouter();

	return (
		<FormContainer>
			<Formik
				initialValues={{
					[FIELDS.USERNAME]: "",
					[FIELDS.EMAIL]: "",
					[FIELDS.PASSWORD]: "",
				}}
				validationSchema={validationSchema}
				onSubmit={async (values, { setErrors }) => {
					const response = await register({
						variables: { options: values },
					});

					if (response.data?.register?.errors) {
						const error = toErrorMap(response.data?.register?.errors);

						if (error.fieldName === FIELDS.USERNAME) {
							setErrors({ [FIELDS.USERNAME]: error.message });
						} else if (error.fieldName === FIELDS.EMAIL) {
							setErrors({ [FIELDS.EMAIL]: error.message });
						}
					} else {
						client.resetStore();
						router.push("/");
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<InputField
							name={FIELDS.USERNAME}
							label="Username"
							placeholder="Username"
							marginBottom="10px"
						/>
						<InputField
							name={FIELDS.EMAIL}
							label="Email"
							placeholder="Email"
							marginBottom="10px"
							type="email"
						/>
						<InputField
							name={FIELDS.PASSWORD}
							label="Password"
							type="password"
							placeholder="Password"
							marginBottom="20px"
						/>
						<Button type="submit" isLoading={isSubmitting}>
							Register
						</Button>
					</Form>
				)}
			</Formik>
		</FormContainer>
	);
};

export default withApollo(Register, { getDataFromTree });
