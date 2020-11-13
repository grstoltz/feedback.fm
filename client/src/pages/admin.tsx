import React from "react";
import { Formik, Form } from "formik";
import {
	Avatar,
	Box,
	Button,
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/core";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useRouter } from "next/router";
import { useAdminQuery } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { withApollo } from "../utils/withApollo";
import { Layout } from "../components/Layout";
import { DeleteButton } from "../components/DeleteButton";

interface registerProps {}

const Admin: React.FC<registerProps> = ({}) => {
	const { data, loading, error } = useAdminQuery();

	if (loading) {
		return (
			<Layout>
				<div>loading...</div>
			</Layout>
		);
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	if (!data.admin) {
		return (
			<Layout>
				<Box>could not find User</Box>
			</Layout>
		);
	}

	return (
		<Layout>
			<Text fontSize="4xl">Control Panel</Text>
			<Tabs>
				<TabList>
					<Tab>Home</Tab>
					<Tab>Received Messages</Tab>
					<Tab>Sent Messages</Tab>
					<Tab>My Songs</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<Flex>
							<Box>
								<Avatar size="2xl" src={data.admin.avatarURL} />
							</Box>
							<Box>
								<Text size="lg">{data.admin.username}</Text>
							</Box>
						</Flex>
					</TabPanel>
					<TabPanel>
						<Box>
							{data.admin.receivedComments.length ? (
								data.admin.receivedComments?.map((element) => {
									return (
										<Box
											marginTop={2}
											minW="lg"
											borderWidth="1px"
											rounded="lg"
											overflow="hidden"
											key={element.id}
										>
											<Flex>
												<Text fontWeight="bold" fontSize="lg">
													{element.parent.title}
												</Text>
												<DeleteButton
													id={element.id}
													creatorId={data.admin?.id}
													contentType="comment"
												/>
											</Flex>
											<Text>Sent By: {element.sender.username}</Text>
											<Text>{element.body}</Text>
										</Box>
									);
								})
							) : (
								<Box>You have no receieved comments!</Box>
							)}
						</Box>
					</TabPanel>
					<TabPanel>
						{data.admin.sentComments.length ? (
							data.admin.sentComments?.map((element) => {
								return (
									<Box
										marginTop={2}
										minW="lg"
										borderWidth="1px"
										rounded="lg"
										overflow="hidden"
										key={element.id}
									>
										<Flex>
											<Text fontWeight="bold" fontSize="lg">
												{element.parent.title}
											</Text>
											<DeleteButton
												id={element.id}
												creatorId={data.admin?.id}
												contentType="comment"
											/>
										</Flex>

										<Text>{element.body}</Text>
									</Box>
								);
							})
						) : (
							<Box>You have no sent comments!</Box>
						)}
					</TabPanel>
					<TabPanel>
						{data.admin.songs.length ? (
							data.admin.songs?.map((element) => {
								return (
									<Box
										marginTop={2}
										minW="lg"
										borderWidth="1px"
										rounded="lg"
										overflow="hidden"
										key={element.id}
									>
										<Flex>
											<Text fontWeight="bold" fontSize="lg">
												{element.title}
											</Text>
											<DeleteButton
												id={element.id}
												creatorId={data.admin?.id}
												contentType="song"
											/>
										</Flex>
									</Box>
								);
							})
						) : (
							<Box>You have no songs!</Box>
						)}
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Layout>
	);
};

export default withApollo({ ssr: false })(Admin);
