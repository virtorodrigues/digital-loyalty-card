import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiUserAddLine, RiUserSearchLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav() {

  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
      </NavSection>
      <NavSection title="USUÁRIOS">
        <NavLink href="/users" icon={RiUserSearchLine}>
          Lista
        </NavLink>
        <NavLink href="/users/create" icon={RiUserAddLine}>
          Cadastrar
        </NavLink>
      </NavSection>
    </Stack>
  )
}