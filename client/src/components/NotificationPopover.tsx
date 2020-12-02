import {
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
} from "@chakra-ui/react";
import React from "react";

interface NotificationPopoverProps {
	notifications?: any[];
}

export const Layout: React.FC<NotificationPopoverProps> = ({
	notifications,
}) => {
	return (
		<>
			<PopoverContent>
				<PopoverHeader fontWeight="semibold">Notifications</PopoverHeader>
				<PopoverArrow />
				<PopoverCloseButton />
				<PopoverBody>
					Tadaa!! The arrow color and background color is customized. Check
					the props for each component.
				</PopoverBody>
			</PopoverContent>
		</>
	);
};
