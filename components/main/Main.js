import { Box, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Revista from "../images/capa_revista.png";
import Teto from "../images/capa_teto.png";
import Edicao from "../images/capa_edicao.png";
import Borda from "../images/capa_borda.png";
import Brilho from "../images/capa_brilho.png";
import Iniciativa from "../images/capa_iniciativa.png";
import Indicios from "../images/capa_indicios.png";
import Redes from "../images/capa_redes.png";
import Image from "next/dist/client/image";
import { motion } from "framer-motion";

const mainList = [
  {
    name: "Teto",
    message: "Teto",
    img: Teto,
    link: "/teto"
  },
  {
    name: "Revista",
    message: "Revista EBAC",
    img: Revista,
    link: "/revista"
  },
  {
    name: "Edição",
    message: "",
    img: Edicao,
    link: "/edicao"
  },
  {
    name: "Borda",
    message: "Exposição",
    img: Borda,
    link: "/borda"
  },
  {
    name: "Brilho",
    message: "Brilho de Marte",
    img: Brilho,
    link: "/brilho"
  },
  {
    name: "Iniciativa",
    message: "Iniciativa",
    img: Iniciativa,
    link: "/iniciativa"
  },
  {
    name: "Indicios",
    message: "Indícios",
    img: Indicios,
    link: "/indicios"
  },
  {
    name: "Redes Sociais",
    message: "Trabalhos feitos para Redes Sociais em 2022",
    img: Redes,
    link: "/sociais"
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
            </Box>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default Main;
