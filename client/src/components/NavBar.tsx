import React from "react";
import { Box, Link, Flex, Button, Heading, Text } from "@chakra-ui/core";
import NextLink from "next/link";
import {
	useMeQuery,
	useLogoutMutation,
	useBalanceQuery,
} from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
	const router = useRouter();
	const [logout, { loading: logoutFetching }] = useLogoutMutation();
	const apolloClient = useApolloClient();
	const { data, loading } = useMeQuery({
		skip: isServer(),
	});

	const { data: balanceData, loading: balanceLoading } = useBalanceQuery({
		skip: isServer(),
	});

	let body = null;

	let balance = null;

	if (balanceData?.me) {
		balance = balanceData.me.balance;
	}

	// data is loading
	if (loading) {
		// user not logged in
	} else if (!data?.me) {
		body = (
			<>
				<NextLink href="/login">
					<Link mr={2}>Login</Link>
				</NextLink>
				<NextLink href="/register">
					<Link>Register</Link>
				</NextLink>
			</>
		);
		// user is logged in
	} else {
		body = (
			<Flex align="center">
				<NextLink href="/create-song">
					<Button as={Link} mr={4}>
						Create Song
					</Button>
				</NextLink>
				<Box mr={2}>{data.me.username}</Box>

				<Text mr={2}>{`Balance: ${balance}`}</Text>
				<NextLink href="/admin">
					<Button variant="link" as={Link} mr={4}>
						Admin
					</Button>
				</NextLink>
				<Button
					onClick={async () => {
						await logout();
						await apolloClient.resetStore();
					}}
					isLoading={logoutFetching}
					variant="link"
				>
					Logout
				</Button>
			</Flex>
		);
	}

	return (
		<Flex zIndex={1} position="sticky" top={0} bg="tan" p={4}>
			<Flex flex={1} m="auto" align="center" maxW={800}>
				<NextLink href="/">
					<Link>
						<Heading>Feedback</Heading>
					</Link>
				</NextLink>
				<Box ml={"auto"}>{body}</Box>
			</Flex>
		</Flex>
	);
};
