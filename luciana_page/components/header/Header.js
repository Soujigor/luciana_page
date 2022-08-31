import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillBehanceSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import Logo from "../images/logo.png";
import Image from "next/dist/client/image";
import Link from "next/link";
import { motion } from "framer-motion";

const headerList = [
  {
    name: "Home",
    href: "/",
    icon: null,
  },
  {
    name: "Info",
    href: "info",
    icon: null,
  },
  {
    name: "Contato",
    href: "/contato",
    icon: null,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/luciana-ribeiro-designer-grafico/",
    icon: <BsLinkedin size="26px" />,
  },
  {
    name: "Behance",
    href: "https://www.linkedin.com/in/luciana-ribeiro-designer-grafico/",
    icon: <AiFillBehanceSquare size="34px" />,
  },
  {
    name: "Instagram",
    href: "https://www.linkedin.com/in/luciana-ribeiro-designer-grafico/",
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
              key={headerItem.name}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
            >
              {headerItem.icon ? (
                <Link href={headerItem.href}>{headerItem.icon}</Link>
              ) : (
                <Link href={headerItem.href}>
                  <Text>{headerItem.name}</Text>
                </Link>
              )}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Header;
