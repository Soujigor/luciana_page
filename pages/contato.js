import { Box, Flex } from "@chakra-ui/react";
import React from 'react'
import Header from "../components/header/Header";
import Contato from "../components/Contato/Contato";

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