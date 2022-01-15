// Components
import { Box } from "@chakra-ui/react";
import { NotificationSnippetFragment } from "../../generated/graphql";

import styles from "./index.module.scss";

type Props = {
	notification: NotificationSnippetFragment;
};

const NotificationCard: React.FC<Props> = ({ notification }) => {
	return (
		<>
			<Box
				padding={5}
				borderWidth="1px"
				width="100%"
				className={styles.notificationTile}
				_hover={{ bg: "teal.50" }}
			>
				{notification.body}
			</Box>
		</>
	);
};

export default NotificationCard;
