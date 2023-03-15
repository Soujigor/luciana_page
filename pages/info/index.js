import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Info from "../../src/components/info/Info";

const index = () => {
  return (
    <Flex flexDirection="column" justify="center" alignItems="center" px="30px">
      <Box maxWidth="1100px" width="100%">
        <Info />
      </Box>
    </Flex>
  );
};

export default index;
