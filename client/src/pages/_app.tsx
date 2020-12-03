import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { ChakraProvider } from "@chakra-ui/react";
// import theme from "../theme";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			{/* <ColorModeProvider> */}
			<Component {...pageProps} />
			{/* </ColorModeProvider> */}
		</ChakraProvider>
	);
}

export default MyApp;
