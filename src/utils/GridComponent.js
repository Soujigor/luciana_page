import { Flex, Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const GridComponent = ({itens, title, subtitle}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 1.2,
      },
    },
  };

  return (
    <Flex
      justify="center"
      padding="36px"
      flexDir="column"
      align="center"
      gap={5}
    >
      <Flex flexDir="column" align="center">
        <Heading size="2xl">{title}</Heading>
        <Heading textAlign="justify">{subtitle}</Heading>
      </Flex>
      <Flex justify="center">
        <Text textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Flex>
      <Flex>
        <SimpleGrid
          w="100%"
          minChildWidth={["200px", "300px", "350px", "550px"]}
          as={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {itens.map((item, index) => {
            return (
              <Box
                key={index}
                w="100%"
                overflow="hidden"
                h="100%"
                as={motion.div}
                variants={item}
              >
                <Image src={item.img} alt="" />
              </Box>
            );
          })}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default GridComponent;
