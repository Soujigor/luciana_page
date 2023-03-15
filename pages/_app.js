import "../styles/globals.css";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import Head from "next/head";

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
          <Head>
            <title>Luciana Page</title>
            <meta
              name="description"
              content="Portfólio de Designer. Design, Fotografia, Ux"
            />
            {/* <link rel="icon" href="/logo.png" /> */}
          </Head>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
