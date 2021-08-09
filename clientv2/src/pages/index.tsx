import { getDataFromTree } from "@apollo/client/react/ssr";

import { withApollo } from "../utils/with-apollo";

const Index = () => {
	return <div>Hello World</div>;
};

export default withApollo(Index, { getDataFromTree });
