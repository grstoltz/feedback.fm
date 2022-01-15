import { Flex, Stack } from "@chakra-ui/layout";
import { Avatar, IconButton, Button, Icon } from "@chakra-ui/react";

import { useRouter } from "next/router";

const Sidebar = () => {
	const chatPreviews = chatsSnapshot?.docs.map((chat) => (
		<Chat key={chat.id} id={chat.id} users={chat.data().users} />
	));
	return (
		<Flex
			direction="column"
			w="300px"
			h="100vh"
			overflowY="scroll"
			css={{
				"&::-webkit-scrollbar": {
					display: "none",
				},
				msOverflowStyle: "none",
				scrollbarWidth: "none",
			}}
		>
			<Flex
				align="center"
				justify="space-between"
				position="sticky"
				top={0}
				zIndex={199}
				p={4}
				h={"81px"}
				borderBottom="1px solid"
				borderColor={"gray.700"}
				transitionDuration="200ms"
				bg={"gray.800"}
				borderRight={`1px solid "#2D3748"`}
			>
				<Avatar src={user.photoURL} />
			</Flex>
			<Flex
				direction="column"
				borderRight="1px solid"
				borderColor={"gray.700"}
				bg={"gray.800"}
				transitionDuration="200ms"
				flex="1"
			>
				{chatPreviews}
			</Flex>
		</Flex>
	);
};

export default Sidebar;
