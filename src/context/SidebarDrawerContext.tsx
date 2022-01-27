import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

type SidebarDrawerProvidertProps = {
  children: ReactNode;
}

type SidebarDrawerContextProps = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextProps);

export function SidebarDrawerProvider({ children }: SidebarDrawerProvidertProps) {
  const disclosure = useDisclosure();


  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);