import { Box } from "@chakra-ui/react";
import React from "react";

interface NotificationPopoverProps {
	data: any;
}

export const NotificationItem: React.FC<NotificationPopoverProps> = ({
	data,
}) => {
	return <Box>{data.message}</Box>;
};
