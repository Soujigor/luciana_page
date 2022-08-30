import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillBehanceSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import Logo from "../images/logo.png";
import Image from "next/dist/client/image";

const headerList = [
  {
    name: "Home",
    onClick: () => console.log("Home"),
    icon: null,
  },
  {
    name: "Info",
    onClick: () => console.log("Info"),
    icon: null,
  },
  {
    name: "Contato",
    onClick: () => console.log("Contato"),
    icon: null,
  },
  {
    name: "Linkedin",
    onClick: () => console.log("Linkedin"),
    icon: <BsLinkedin size="28px" />,
  },
  {
    name: "Behance",
    onClick: () => console.log("Behance"),
    icon: <AiFillBehanceSquare size="33px" />,
  },
  {
    name: "Instagram",
    onClick: () => console.log("Instagram"),
    icon: <FaInstagramSquare size="30px" />,
  },
];

const Header = () => {
  return (
    <Flex justify="space-between" w="100%" paddingTop="10px">
      <Flex justify="center" alignItems="center" w="100px" h="100px">
        <Image src={Logo} alt="logo" />
      </Flex>
      <Flex gap="20px">
        {headerList.map((headerItem) => {
          return (
            <Flex
              h="100%"
              w="100%"
              justifyContent="center"
              alignItems="center"
              onClick={headerItem.onClick}
              key={headerItem.name}
            >
              {headerItem.icon ? (
                headerItem.icon
              ) : (
                <Text fontWeight="600" fontSize={["12px", "16px", "20px", "24px"]} >{headerItem.name}</Text>
              )}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Header;
