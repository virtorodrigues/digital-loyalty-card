import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "./ActiveLink";

type NavLinkProps = {
  icon: ElementType;
  children: string;
  href: string;
}

export function NavLink({ icon, href, children, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <Link display="flex" p="1" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" display="flex" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </Link >
    </ActiveLink>
  )
}