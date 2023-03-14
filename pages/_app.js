import "../styles/globals.css";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex
        flexDirection="column"
        justify="center"
        alignItems="center"
        px="30px"
      >
        <Box maxWidth="1300px" width="100%">
          <Header />
          <Component {...pageProps} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
