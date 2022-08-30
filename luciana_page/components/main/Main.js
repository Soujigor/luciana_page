import { Box, Flex, Grid } from '@chakra-ui/react'
import React from 'react'

const Main = () => {
  return (
    <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
    <Grid  bg="indigo" gridTemplateColumns="repeat(2, 1fr)">
        <Box w="500px" h="500px" bg="blue"></Box>
        <Box w="500px" h="500px" bg="yellow"></Box>
        <Box w="500px" h="500px" bg="red"></Box>
        <Box w="500px" h="500px" bg="green"></Box>
    </Grid>
    </Flex>
  )
}

export default Main