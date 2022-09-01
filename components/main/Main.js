import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
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
  console.log(isHovering);
  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      paddingTop="30px"
      cursor="pointer"
    >
      <Grid w="100%" gridTemplateColumns="repeat(auto-fit, minmax(550px, 1fr))" >
        {mainList.map((mainItem) => {
          return (
            <GridItem w="100%" overflow="hidden" h="100%"  key={mainItem.name}>
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
              >
                {/* {isHovering.isHovering && isHovering.id === mainItem.name && <Text>{mainItem.message}</Text>} */}
                <Box >
                  <Image
                    layout="responsive"
                    objectFit="cover"
                    src={mainItem.img}
                    alt="imagem"
                  />
                </Box>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Main;
