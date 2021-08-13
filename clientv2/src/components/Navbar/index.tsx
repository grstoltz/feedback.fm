// Hooks
import { useMeQuery, useLogoutMutation } from "../../generated/graphql";

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

const Navbar: React.FC = () => {
	const { data } = useMeQuery();
	const [logout, { client, loading: isLogoutLoading }] = useLogoutMutation();

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
					{data?.me ? (
						<>
							<NextLink href="/upload">
								<Box marginRight="20px">
									<Link marginRight="20px">Upload</Link>
								</Box>
							</NextLink>
							<Button
								variant="link"
								marginRight="20px"
								onClick={async () => {
									await logout();
									client.resetStore();
								}}
								isLoading={isLogoutLoading}
							>
								Logout
							</Button>
							<Flex alignItems={"center"}>
								<Box marginRight="10px">{data.me.username}</Box>

								<Menu>
									<MenuButton
										as={Button}
										rounded={"full"}
										variant={"link"}
										cursor={"pointer"}
										minW={0}
									>
										<Avatar
											size={"sm"}
											src={
												"https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
											}
										/>
									</MenuButton>
									<MenuList>
										<NextLink href="/admin">
											<MenuItem>
												<Link>Admin</Link>
											</MenuItem>
										</NextLink>
										<MenuItem>Link 2</MenuItem>
										<MenuDivider />
										<MenuItem>Link 3</MenuItem>
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
