import { Box, Flex } from "@chakra-ui/react";
import React from 'react'
import Contato from "../../src/components/contato/Contato";

const index = () => {
    return (
        <Flex flexDirection="column" justify="center" alignItems="center" px="30px">
          <Box maxWidth="1100px" width="100%">
            <Contato />
          </Box>
        </Flex>
      );
}

export default index