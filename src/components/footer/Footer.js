import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillBehanceSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";


const footerList = [
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

const Footer = () => {
  return (
    <Flex justify="space-between" w="100%" paddingTop="10px">
      <Flex
        justify="center"
        alignItems="center"
        w="100px"
        h="100px"
        cursor="pointer"
      >
        <Flex as={motion.div} whileHover={{ scale: 1.1 }} cursor="pointer">
          <Link href="https://www.linkedin.com/in/soujigor/">
            <a target="_blank">
              <Image src="/main/soujigorLogo.png" objectFit="" alt="logo" />
            </a>
          </Link>
        </Flex>
      </Flex>
      <Flex gap="20px" justify="center" alignItems="center" cursor="pointer">
        {footerList.map((footerItem) => {
          return (
            <Flex
              h="100%"
              w="100%"
              justifyContent="center"
              alignItems="center"
              key={footerItem.name}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              cursor="pointer"
            >
              {footerItem.icon ? (
                <Link href={footerItem.href}>
                  <a target="_blank">{footerItem.icon}</a>
                </Link>
              ) : (
                <Link href={footerItem.href}></Link>
              )}
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Footer;
