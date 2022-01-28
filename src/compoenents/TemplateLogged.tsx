import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

type TemplateLoggedProps = {
  children: ReactNode;
};

export default function TemplateLogged({ children }: TemplateLoggedProps) {
  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />
        {children}
      </Flex>
    </Flex>
  )
}