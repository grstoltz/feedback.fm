// Components
import { Box } from "@chakra-ui/react";
import { NotificationSnippetFragment } from "../../generated/graphql";

type Props = {
	notification: NotificationSnippetFragment;
};

const NotificationCard: React.FC<Props> = ({ notification }) => {
	return (
		<>
			<Box>{notification.body}</Box>
		</>
	);
};

export default NotificationCard;
