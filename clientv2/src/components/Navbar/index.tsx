// Hooks
import {
	useMeQuery,
	useUserQuery,
	useLogoutMutation,
	useUnreadNotificationsQuery,
} from "../../generated/graphql";

// Components
import {
	Box,
	Flex,
	Link,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	Avatar,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

import styles from "./index.module.scss";

import logo from "../../public/logo.png";
import NotificationCard from "../NotificationCard";

const Navbar: React.FC = () => {
	const { data: userData } = useMeQuery();

	const userId = userData?.me?.id as number;

	const { data, loading, error } = useUserQuery({
		variables: { id: userId },
	});

	const { data: unreadNotifications } = useUnreadNotificationsQuery();

	const [logout, { client, loading: isLogoutLoading }] = useLogoutMutation();

	console.log(data?.user?.notifications);

	return (
		<Box className={styles.navbarContainer} zIndex="navbar">
			<Flex
				padding="10px 25px"
				justifyContent="space-between"
				alignItems="center"
			>
				<NextLink href="/">
					<Link className={styles.logoLink}>
						<Image src={logo} alt="logo" width={36} height={36} />
						<h1 className={styles.logoText}>Feedbacker</h1>
					</Link>
				</NextLink>
				<Flex alignItems={"center"} justifyContent={"space-between"}>
					{data?.user ? (
						<>
							<NextLink href="/upload">
								<Box marginRight="20px">
									<Link marginRight="20px">Upload</Link>
								</Box>
							</NextLink>
							{/* <Button
								variant="link"
								marginRight="20px"
								onClick={async () => {
									await logout();
									client.resetStore();
								}}
								isLoading={isLogoutLoading}
							>
								Logout
							</Button> */}
							<Flex alignItems={"center"}>
								{/* Notifications */}
								<NextLink href="/notifications">
									<Box marginRight="20px">
										<Link marginRight="20px">Notifications</Link>
									</Box>
									{unreadNotifications?.unreadNotifications ===
										true && <Box>Unread</Box>}
								</NextLink>

								<Box marginRight="10px">{data.user?.username}</Box>

								<Menu>
									{/* admin */}
									<MenuButton
										as={Button}
										rounded={"full"}
										variant={"link"}
										cursor={"pointer"}
										minW={0}
									>
										<Avatar size={"sm"} src={data.user.avatarURL} />
									</MenuButton>

									<MenuList>
										<NextLink href="/admin">
											<MenuItem>
												<Link>Admin</Link>
											</MenuItem>
										</NextLink>
										<MenuItem>Link 2</MenuItem>
										<MenuDivider />
										<MenuItem>
											<Button
												variant="link"
												onClick={async () => {
													await logout();
													client.resetStore();
												}}
												isLoading={isLogoutLoading}
											>
												Logout
											</Button>
										</MenuItem>
									</MenuList>
								</Menu>
							</Flex>
						</>
					) : (
						<>
							<NextLink href="/login">
								<Link marginRight="20px">Login</Link>
							</NextLink>
							<NextLink href="/register">
								<Link>Register</Link>
							</NextLink>
						</>
					)}
				</Flex>
			</Flex>
		</Box>
	);
};

export default Navbar;
