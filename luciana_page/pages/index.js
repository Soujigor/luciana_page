import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";

export default function Home() {
  return (
    <Flex flexDirection="column" justify="center" alignItems="center" px="30px">
      <Head>
        <title>Luciana Page</title>
        <meta name="description" content="Portfólio " />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Box maxWidth="1100px" width="100%">
        <Header />
        <Main />

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </Box>
    </Flex>
  );
}
