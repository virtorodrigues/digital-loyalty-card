import { Box, Button, Flex, Heading, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine } from "react-icons/ri";
import TemplateLogged from "../../compoenents/TemplateLogged";


export default function Users() {

  return (
    <TemplateLogged>

      <Box
        flex="1"
        borderRadius={8}
        bg="gray.800"
        p="8"
      >
        <Flex
          mb="8"
          justify="space-between"
          align="center"
        >
          <Heading size="lg" fontWeight="normal">
            Usuários
            {/*!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />*/}
          </Heading>
          <Link href="/users/create" passHref>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="red"
              cursor="pointer"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Link>
        </Flex>


      </Box >
    </TemplateLogged>
  )
}

/* {/*
      {isLoading ? (
        <Flex justify="center">
          <Spinner />
        </Flex>
      ) : error ? (
        <Flex justify="center">
          <Text>Falha ao obter dados dos usuários!</Text>
        </Flex>
      ) : (
        <>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th w="0"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.users.map(user => (
                <Tr key={user.id}>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <ChakraLink color="purple.300" onMouseEnter={() => handlePrefetchUser(user.id)}>
                        <Text fontWeight="bold">{user.name}</Text>
                      </ChakraLink>
                      <Text fontSize="sm" color="gray.300">{user.email}</Text>
                    </Box>
                  </Td>
                  {isWideVersion && (
                    <Td>
                      {user.createdAt}
                    </Td>
                  )}
                  {isWideVersion && (
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        cursor="pointer"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
                    </Td>
                  )}
                </Tr>
              )
              )}
            </Tbody>
          </Table >

          <Pagination
            totalCountOfRegisters={data.totalCount}
            currentPage={page}
            onPageChange={setPage}
          />
                  </>
      )}*/