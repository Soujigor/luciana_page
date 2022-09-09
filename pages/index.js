import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";


export default function Home() {
  return (
    <Flex flexDirection="column" justify="center" alignItems="center" px="30px">
      <Head>
        <title>Luciana Page</title>
        <meta name="description" content="Portfólio de Designer. Design, Fotografia, Ux" />
        <link rel="icon" href="/logo.png" />
        
      </Head>
      <Box maxWidth="1300px" width="100%">
        <Header />
        <Main />
        <Footer />

       
      </Box>
    </Flex>
  );
}
