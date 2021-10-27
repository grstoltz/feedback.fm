import { Box } from "@chakra-ui/react";
import {
	NotificationSnippetFragment,
	useGetNotificationsQuery,
} from "../../generated/graphql";

type Props = {
	notification: [NotificationSnippetFragment];
};

const NotificationList: React.FC<Props> = ({ notification }) => {
	return <Box>Scroller here!</Box>;
};

export default NotificationList;
