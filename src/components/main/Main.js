import { Box, Flex, Link, SimpleGrid, Text, Image } from "@chakra-ui/react";
import React, { useState } from "react";

import { motion } from "framer-motion";

const mainList = [
  {
    name: "Teto",
    message: "Teto",
    img: "/main/capa_teto.png",
    link: "/teto",
  },
  {
    name: "Revista",
    message: "Revista EBAC",
    img: "main/capa_revista.png",
    link: "/revista",
  },
  {
    name: "Edição",
    message: "",
    img: "main/capa_edicao.png",
    // link: "/edicao"
  },
  {
    name: "Borda",
    message: "Borda",
    img: "main/capa_borda.png",
    link: "/borda",
  },
  {
    name: "Brilho",
    message: "Brilho de Marte",
    img: "main/capa_brilho.png",
    link: "/brilhodemarte",
  },
  {
    name: "Iniciativa",
    message: "Iniciativa",
    img: "main/capa_iniciativa.png",
    link: "/iniciativa",
  },
  {
    name: "Indicios",
    message: "Indícios",
    img: "main/capa_indicios.png",
    link: "/indicios",
  },
  {
    name: "Redes Sociais",
    message: "Trabalhos feitos para Redes Sociais em 2022",
    img: "main/capa_redes.png",
    link: "/sociais",
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
      <Flex
        w="100%"
        minChildWidth={["200px", "300px", "350px", "550px"]}
        as={motion.div}
        variants={container}
        initial="hidden"
        animate="show"
        columns={1}
        gap={10}
        flexDir="column"
        align="center"
        justify="center"
      >
        {mainList.map((mainItem) => {
          return (
            <Flex
              w="100%"
              overflow="hidden"
              h="100%"
              key={mainItem.name}
              as={motion.div}
              variants={item}
              align="center"
              justify="center"
            >
              <Link href={mainItem.link}>
                <Box
                  as={motion.div}
                  whileHover={{
                    scale: 1.05,
                  }}
                  onHoverStart={() =>
                    setIsHovering({ isHovering: true, id: mainItem.name })
                  }
                  onHoverEnd={() =>
                    setIsHovering({ isHovering: false, id: "" })
                  }
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
                    {isHovering.isHovering &&
                      isHovering.id === mainItem.name && (
                        <Box backdropFilter="auto">
                          <Text
                            color="white"
                            fontSize="36px"
                            align="center"
                            opacity="-moz-initial"
                            borderRadius="md"
                            textShadow="1px 1px #121212"
                          >
                            {mainItem.message}
                          </Text>
                        </Box>
                      )}
                  </Flex>
                  <Box
                    filter={
                      isHovering.isHovering && isHovering.id === mainItem.name
                        ? "grayscale(0.5)"
                        : ""
                    }
                  >
                    <Image
                      layout="responsive"
                      objectFit="cover"
                      src={mainItem.img}
                      alt="imagem"
                    />
                  </Box>
                </Box>
              </Link>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Main;
