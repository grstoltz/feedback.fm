import { EmailIcon } from "@chakra-ui/icons";
import {
	IconButton,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverHeader,
	PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";
import { NotificationItem } from "./NotificationItem";

interface NotificationPopoverProps {
	notifications?: any[];
}

export const NotificationPopover: React.FC<NotificationPopoverProps> = ({
	notifications,
}) => {
	return (
		<Popover>
			<PopoverTrigger>
				<IconButton aria-label="edit" size="sm" icon={<EmailIcon />} />
			</PopoverTrigger>

			<PopoverContent>
				<PopoverHeader fontWeight="semibold">Notifications</PopoverHeader>
				<PopoverArrow />
				<PopoverCloseButton />
				<PopoverBody>
					{notifications
						? notifications.map((notification) => {
								return <NotificationItem data={notification} />;
						  })
						: "You Have No Notifications!"}
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};
