import { Layout } from "../components/Layout";
import { withApollo } from "../utils/withApollo";
import { useSongsQuery } from "../generated/graphql";
import { Stack } from "@chakra-ui/core";

const Index = () => {
	const { data, error, loading } = useSongsQuery();

	if (!loading && !data) {
		return (
			<div>
				<div>you got query failed for some reason</div>
				<div>{error?.message}</div>
			</div>
		);
	}

	return (
		<Layout>
			<div>Hello World</div>;
			{!data && loading ? (
				<div>loading...</div>
			) : (
				<Stack spacing={8}>
					{data?.songs.map((s) => (
						<div key={s.id}>{s.title}</div>
					))}
				</Stack>
			)}
		</Layout>
	);
};

export default withApollo({ ssr: true })(Index);
