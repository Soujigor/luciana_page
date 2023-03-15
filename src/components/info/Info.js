import { Flex, Heading, Stack, Text, Box, Image} from "@chakra-ui/react";
import React from "react";


const Info = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      paddingTop="30px"
    >
      <Flex direction={["column", "column", "row", "row"]} gap="5">
        <Box>
          <Image src="main/foto_id.png" alt="Foto" objectFit="fill" min />
        </Box>
        <Stack
          justify="center"
          alignItems="center"
          direction={["column", "column", "row", "row"]}
        >
          <Box>
            <Heading fontSize="2xl" align="left" fontWeight="bold">
              Sou Graduada em Cinema e Audiovisual, Mestra em Artes, Designer e
              Fotógrafa nas horas vagas.
            </Heading>
            <Text fontSize="xl" align="left" fontStyle="italic">
              Ofereço serviços de design gráfico e edição de vídeo.
            </Text>
            <br />
            <br />
            <br />
            <Text fontSize="xl" align="left">
              Sempre estive ligada às áreas criativas e já passei pelo teatro,
              cinema, cerâmica, fotografia, produção de eacessórios até
              finalmente cair no design gráfico. <br />
              Eu tenho paixão por aprender coisas novas.
              <br /> Eu sou tímida, mas me importo muito com as pessoas.
              <br />
              <br />
              Tenho um projeto pessoal de design de acessórios artesanais
              chamado Brilho de Marte.
              <br />
              <br />
              E, atualmente, sou designer voluntária na Instituição Fundação
              Iniciativa que atua com acolhimento institucional de crianças e
              adolescente, e na TETO Brasil que trabalha pela superação da
              probreza nas favelas precárias.
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Info;
