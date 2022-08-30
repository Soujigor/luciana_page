import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Revista from "../images/capa_revista.png";
import Sociais from "../images/capa_sociais.png";
import Edicao from "../images/capa_edicao.png";
import Playlist from "../images/capa_playlist.png";
import Image from "next/dist/client/image";

const mainList = [
  {
    name: "Sociais",
    img: Sociais,
  },
  {
    name: "Revista",
    img: Revista,
  },
  {
    name: "Edição",
    img: Edicao,
  },
  {
    name: "Playlist",
    img: Playlist,
  },
];

const Main = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      paddingTop="30px"
    >
      <Grid w="100%" gridTemplateColumns="repeat(auto-fit, minmax(550px, 1fr))">
        {mainList.map((mainItem) => {
          return (
            <GridItem h="100%" key={mainItem.name}>
              <Image
                layout="responsive"
                objectFit="cover"
                src={mainItem.img}
                alt="imagem"
              />
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default Main;
