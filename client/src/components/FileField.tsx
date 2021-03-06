import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Textarea,
} from "@chakra-ui/react";

type FileFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	label: string;
	name: string;
};

export const FileField: React.FC<FileFieldProps> = ({
	label,
	size: _,
	...props
}) => {
	const [field, { error }] = useField(props);
	return (
		<FormControl isInvalid={!!error}>
			<FormLabel htmlFor={field.name}>{label}</FormLabel>
			<Input {...field} {...props} id={field.name} />
			{error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
		</FormControl>
	);
};
