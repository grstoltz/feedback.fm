import { Box } from "@chakra-ui/react";
import { NotificationSnippetFragment } from "../../generated/graphql";

type Props = {
	notification: [NotificationSnippetFragment];
};

const NotificationScroller: React.FC<Props> = ({ notification }) => {
	return <Box>Scroller here!</Box>;
};

export default NotificationScroller;
