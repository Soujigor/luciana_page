import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";

const Contato = () => {
  return (
    <Box paddingTop="20px">
      <Text width="50%" fontSize='lg'>
        Você pode entrar em contato comigo através deste formulário ou das
        minhas redes sociais.
      </Text>
      <Stack paddingTop="20px" spacing="5">
        <Input placeholder="Nome" width={["100%", "100%", "50%", "50%"]} />
        <Input placeholder="Email" width={["100%", "100%", "50%", "50%"]} />
        <Input placeholder="Assunto" width={["100%", "100%", "50%", "50%"]} />
        <Input placeholder="Mensagem" width='auto' height="200px" />
      </Stack>
      <Flex paddingTop="10px" justify="space-between">
      <Text fontSize='sm'>
        Vou adorar receber sua mensagem!
      </Text>
      <Button colorScheme='blue'>
        Enviar!
      </Button>
      </Flex>
    </Box>
  );
};

export default Contato;
