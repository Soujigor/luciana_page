import { Flex } from "@chakra-ui/react";
import React from "react";
import GridComponent from "../../utils/GridComponent";

const itens = [
  {
    img: "/teto/imagem1.png",
  },
  {
    img: "/teto/imagem2.png",
  },
  {
    img: "/teto/imagem3.png",
  },
];

const titleTeto = "Teto"
const subtitleTeto = "Trabalhos Feitos para a ONG Teto"

const Teto = () => {
 
  return (
      <Flex>
        <GridComponent itens={itens} title={titleTeto} subtitle={subtitleTeto}/>
      </Flex>
  );
};

export default Teto;
