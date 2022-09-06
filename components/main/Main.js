import { Box, Flex, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Revista from "../images/capa_revista.png";
import Sociais from "../images/capa_sociais.png";
import Edicao from "../images/capa_edicao.png";
import Playlist from "../images/capa_playlist.png";
import Image from "next/dist/client/image";
import { motion } from "framer-motion";

const mainList = [
  {
    name: "Sociais",
    message: "olá",
    img: Sociais,
  },
  {
    name: "Revista",
    message: "oasdasdlá",
    img: Revista,
  },
  {
    name: "Edição",
    message: "olássssss",
    img: Edicao,
  },
  {
    name: "Playlist",
    message: "ol2232412á",
    img: Playlist,
  },
];

const Main = () => {
  const [isHovering, setIsHovering] = useState({ isHovering: false, id: "" });

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

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      paddingTop="30px"
      cursor="pointer"
    >
      <SimpleGrid
        w="100%"
        minChildWidth={["200px", "300px", "350px", "550px"]}
        as={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {mainList.map((mainItem) => {
          return (
            <Box
              w="100%"
              overflow="hidden"
              h="100%"
              key={mainItem.name}
              as={motion.div}
              variants={item}
            >
              <Box
                as={motion.div}
                whileHover={{
                  scale: 1.2,
                }}
                onHoverStart={() =>
                  setIsHovering({ isHovering: true, id: mainItem.name })
                }
                onHoverEnd={() => setIsHovering({ isHovering: false, id: "" })}
                position="relative"
                zIndex={1}
              >
                <Flex
                  h="100%"
                  w="100%"
                  justify="center"
                  align="center"
                  position="absolute"
                  zIndex={2}
                  top="0%"
                  right="0%"
                >
                  {isHovering.isHovering && isHovering.id === mainItem.name && (
                    <Text color="white" fontSize="3xl">
                      {mainItem.message}
                    </Text>
                  )}
                </Flex>
                <Box filter={isHovering.isHovering && isHovering.id === mainItem.name ? '' : "grayscale(1)"}>
                  <Image
                    layout="responsive"
                    objectFit="cover"
                    src={mainItem.img}
                    alt="imagem"
                  />
                </Box>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default Main;
