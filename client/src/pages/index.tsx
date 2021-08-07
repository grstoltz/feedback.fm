import { Layout } from "../components/Layout";
import Link from "next/link";
import { withApollo } from "../utils/withApollo";
import { useSongsQuery } from "../generated/graphql";
import { Stack, Link as ChakraLink } from "@chakra-ui/react";

const Index = () => {
	// const { data, error, loading } = useSongsQuery();

	// if (!loading && !data) {
	// 	return (
	// 		<div>
	// 			<div>you got query failed for some reason</div>
	// 			<div>{error?.message}</div>
	// 		</div>
	// 	);
	// }

	return (
		<Layout>
			{/* <div>Hello World</div>
			{!data && loading ? (
				<div>loading...</div>
			) : (
				<Stack spacing={8}>
					{data?.songs.map((song, index) => (
						<div id={index.toString()}>
							<Link
								href={{
									pathname: "/song/[id]",
									query: { id: song.id },
								}}
							>
								<ChakraLink>{song.title}</ChakraLink>
							</Link>
						</div>
					))}
				</Stack>
			)} */}
			<div>Hello!</div>
		</Layout>
	);
};

export default withApollo({ ssr: true })(Index);
