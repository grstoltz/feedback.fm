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

interface registerProps {}

const Admin: React.FC<registerProps> = ({}) => {
	const { data, loading, error } = useAdminQuery();

	console.log(data);

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

	if (!data) {
		return (
			<Layout>
				<Box>could not find User</Box>
			</Layout>
		);
	}
	return (
		<Layout>
			<Text fontSize="6xl">Control Panel</Text>
			<Tabs>
				<TabList>
					<Tab>Home</Tab>
					<Tab>Received Messages</Tab>
					<Tab>Sent Messages</Tab>
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
							{data.admin.receivedComments?.map((element) => {
								return (
									<Box
										marginTop={2}
										minW="lg"
										borderWidth="1px"
										rounded="lg"
										overflow="hidden"
										key={element.id}
									>
										<Text fontWeight="bold" fontSize="lg">
											{element.parent.title}
										</Text>
										<Text>{element.body}</Text>
									</Box>
								);
							})}
						</Box>
					</TabPanel>
					<TabPanel>
						{data.admin.sentComments?.map((element) => {
							return (
								<Box
									marginTop={2}
									minW="lg"
									borderWidth="1px"
									rounded="lg"
									overflow="hidden"
									key={element.id}
								>
									<Text fontWeight="bold" fontSize="lg">
										{element.parent.title}
									</Text>
									<Text>{element.body}</Text>
								</Box>
							);
						})}
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Layout>
	);
};

export default withApollo({ ssr: false })(Admin);
