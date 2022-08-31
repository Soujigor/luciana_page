import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/header/Header";
import Info from "../../components/Info/Info";

const index = () => {
  return (
    <Flex flexDirection="column" justify="center" alignItems="center" px="30px">
      <Box maxWidth="1100px" width="100%">
        <Header />
        <Info />
      </Box>
    </Flex>
  );
};

export default index;
