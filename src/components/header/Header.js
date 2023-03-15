import { Flex, IconButton, Text, Image } from "@chakra-ui/react";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillBehanceSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

import Link from "next/link";
import { motion } from "framer-motion";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

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
    href: "https://www.behance.net/lu_ribeiro",
    icon: <AiFillBehanceSquare size="34px" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/lu.ri.beiro",
    icon: <FaInstagramSquare size="30px" />,
  },
];

const Header = () => {
  const [display, changeDisplay] = useState("none");

  return (
    <Flex justify="space-between" w="100%" paddingTop="10px">
      <Flex
        justify="center"
        alignItems="center"
        w="100px"
        h="100px"
        cursor="pointer"
      >
        <Link href="/">
          <Image src="/main/logo.png" alt="logo" />
        </Link>
      </Flex>
      <Flex gap="20px" justify="center" alignItems="center" cursor="pointer">
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
              cursor="pointer"
              display={["none", "none", "flex", "flex"]}
            >
              {headerItem.icon ? (
                <Link href={headerItem.href}>
                  <a target="_blank">{headerItem.icon}</a>
                </Link>
              ) : (
                <Link href={headerItem.href}>
                  <Text>{headerItem.name}</Text>
                </Link>
              )}
            </Flex>
          );
        })}
        <IconButton
          justify="center"
          alignItems="center"
          cursor="pointer"
          size="lg"
          marginTop="10px"
          aria-label="Open Menu"
          display={["flex", "flex", "none", "none"]}
          backgroundColor="white"
          onClick={() => changeDisplay("flex")}
          icon={<HamburgerIcon height="100%" width="100%" />}
        />
      </Flex>

      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        paddingTop="10px"
        paddingRight="10px"
        
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="sm"
            bgColor="gray.50"
            onClick={() => changeDisplay("none")}
            icon={<CloseIcon height="100%" width="100%" />}
          />
        </Flex>
        <Flex flexDirection="column" gap="50px" paddingTop="50px">
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
                cursor="pointer"
                // display={["none", "none", "flex", "flex"]}
              >
                {headerItem.icon ? (
                  <Link href={headerItem.href}>
                    <a target="_blank">{headerItem.icon}</a>
                  </Link>
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
    </Flex>
  );
};

export default Header;
