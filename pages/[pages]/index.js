import { Flex, Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const data = {
  teto: {
    title: "Teto",
    subtitle: "Trabalhos Feitos para a ONG Teto",
    itens: [
      {
        img: "/teto/imagem1.png",
      },
      {
        img: "/teto/imagem2.png",
      },
      {
        img: "/teto/imagem3.png",
      },
    ],
  },
  indicios: {
    title: "Indicios",
    subtitle: "Fotos tiradas na Exposição Indícios",
    itens: [
      {
        img: "/indicios/foto1.jpg",
      },
      {
        img: "/indicios/foto2.jpg",
      },
      {
        img: "/indicios/foto3.jpg",
      },
      {
        img: "/indicios/foto4.jpg",
      },
      {
        img: "/indicios/foto5.jpg",
      },
      {
        img: "/indicios/foto6.jpg",
      },
      {
        img: "/indicios/foto7.jpg",
      },
    ],
  },
  borda: {
    title: "Borda",
    subtitle: "Fotos tiradas na Exposição Borda",
    itens: [
      {
        img: "/borda/foto1.jpg",
      },
      {
        img: "/borda/foto2.jpg",
      },
      {
        img: "/borda/foto3.jpg",
      },
      {
        img: "/borda/foto3.jpg",
      },
      {
        img: "/borda/foto3.jpg",
      },
    ],
  },
  brilhodemarte: {
    title: "Brilho de Marte",
    subtitle: "Confecções e artes para trabalho pessoal",
    itens: [
      {
        img: "/brilhodemarte/foto1.png",
      },
      {
        img: "/brilhodemarte/foto2.png",
      },
      {
        img: "/brilhodemarte/foto3.png",
      },
      {
        img: "/brilhodemarte/foto4.png",
      },
      {
        img: "/brilhodemarte/foto5.png",
      },
    ],
  },
  iniciativa: {
    title: "Iniciativa",
    subtitle: "Trabalhos feitos para Fundação Iniciativa",
    itens: [
      {
        img: "/iniciativa/foto1.png",
      },
      {
        img: "/iniciativa/foto2.png",
      },
    ],
  },
  revista: {
    title: "Revista",
    subtitle: "Trabalhos feitos para Revista",
    itens: [
      {
        img: "/revista/foto1.png",
      },
      {
        img: "/revista/foto2.png",
      },
      {
        img: "/revista/foto3.png",
      },
    ],
  },
  sociais: {
    title: "Redes Sociais",
    subtitle: "Trabalhos feitos para Redes Sociais",
    itens: [
      {
        img: "/sociais/foto1.png",
      },
      {
        img: "/sociais/foto2.png",
      },
      {
        img: "/sociais/foto3.png",
      },
    ],
  },
};

const index = ({ teste }) => {
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
        <Heading size="2xl">{data[teste].title}</Heading>
        <Heading textAlign="justify">{data[teste].subtitle}</Heading>
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
          {data[teste].itens.map((item, index) => {
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

export async function getServerSideProps(context) {
  const pageNames = ["teto", "indicios", "borda", "sociais", "revista", "brilhodemarte", "iniciativa"];

  const { pages } = context.params;

  
  if (!pageNames.includes(pages)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { teste: pages },
  };
}

export default index;
