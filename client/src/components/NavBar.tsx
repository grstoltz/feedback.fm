import React from "react";
import {
	Box,
	Link as ChakraLink,
	Flex,
	Button,
	Heading,
	Text,
	PopoverTrigger,
	Popover,
	IconButton,
	PopoverContent,
	PopoverBody,
	PopoverCloseButton,
	PopoverHeader,
	PopoverArrow,
} from "@chakra-ui/react";
import Link from "next/link";
import {
	useMeQuery,
	useLogoutMutation,
	useNavBarQuery,
} from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import { NotificationPopover } from "./NotificationPopover";
import { EmailIcon } from "@chakra-ui/icons";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
	const router = useRouter();
	const [logout, { loading: logoutFetching }] = useLogoutMutation();
	const apolloClient = useApolloClient();

	const { data, loading } = useNavBarQuery();

	let body = null;

	let balance = 0;

	if (data?.me?.balance) {
		balance = data.me.balance;
	}

	// data is loading
	if (loading) {
		// user not logged in
	} else if (!data?.me) {
		body = (
			<>
				<Link href="/login">
					<ChakraLink mr={2}>Login</ChakraLink>
				</Link>
				<Link href="/register">
					<ChakraLink>Register</ChakraLink>
				</Link>
			</>
		);
		// user is logged in
	} else {
		body = (
			<Flex align="center">
				<Link href="/create-song">
					<Button as={ChakraLink} mr={4}>
						Create Song
					</Button>
				</Link>
				<Box mr={2}>{data.me.username}</Box>

				<Text mr={2}>{`Balance: ${balance}`}</Text>
				<Text
					mr={2}
				>{`Notifications ${data.me.notifications.length}`}</Text>

				<Box>
					<NotificationPopover notifications={data.me.notifications} />
				</Box>

				<Link href="/admin">
					<Button variant="ChakraLink" as={ChakraLink} mr={4}>
						Admin
					</Button>
				</Link>
				<Button
					onClick={async () => {
						await logout();
						await apolloClient.resetStore();
					}}
					isLoading={logoutFetching}
					variant="ChakraLink"
				>
					Logout
				</Button>
			</Flex>
		);
	}

	return (
		<Flex zIndex={1} position="sticky" top={0} bg="grey" p={4}>
			<Flex flex={1} m="auto" align="center" maxW={800}>
				<Link href="/">
					<ChakraLink>
						<Heading>Feedback</Heading>
					</ChakraLink>
				</Link>
				<Box ml={"auto"}>{body}</Box>
			</Flex>
		</Flex>
	);
};
