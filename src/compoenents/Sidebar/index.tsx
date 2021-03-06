import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext';
import { SideBarNav } from './SideBarNav';

export function Sidebar() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const { isOpen, onClose, onOpen } = useSidebarDrawer();

  if (!isWideVersion) {
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SideBarNav />
            </DrawerBody>

            {/*
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
            */}
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SideBarNav />
    </Box>
  )
}