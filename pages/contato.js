import { Box, Flex } from "@chakra-ui/react";
import React from 'react'
import Contato from "../src/components/Contato/Contato";

const contato = () => {
    return (
        <Flex flexDirection="column" justify="center" alignItems="center" px="30px">
          <Box maxWidth="1100px" width="100%">
            <Contato />
          </Box>
        </Flex>
      );
}

export default contato