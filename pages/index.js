import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import Main from "../src/components/main/Main";
import Footer from "../src/components/footer/Footer";

export default function Home() {
  return (
    <Flex>
      {/* <Head>
        <title>Luciana Page</title>
        <meta
          name="description"
          content="Portfólio de Designer. Design, Fotografia, Ux"
        />
        <link rel="icon" href="/logo.png" />
      </Head> */}
      <Box maxWidth="1300px" width="100%">
        <Main />
        <Footer />
      </Box>
    </Flex>
  );
}
