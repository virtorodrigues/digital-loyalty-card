import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      h="100vh"
      w="100vw"
      align="center"
      justify="center"
    >
      <Stack align="center" spacing={20} p={10}>

        <Stack spacing={0}>
          <Text fontSize='5xl' fontWeight="bold">Bem-vindo 😊</Text>
          <Text fontSize='4xl'>ao cartão de fidelidade <Text as="span" color="green.600" fontWeight="bold">Online</Text>.</Text>
        </Stack>

        <Flex
          as="form"
          width={"100%"}
          maxWidth={415}
          bg="gray.500"
          p="8"
          borderRadius={8}
          flexDir={"column"}
        // onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing={4}>

            <Text
              fontSize='2xl'
              mb={3} color="white"
              alignSelf="center"
            >
              Faça seu login
            </Text>

            <Input
              name="email"
              label="E-mail"
              type="email"
            />
            <Input
              name="password"
              label="Password"
              type="password"
            />
          </Stack>
          <Stack spacing={4}>
            <Button
              type="submit"
              mt="6"
              size={"lg"}
              colorScheme={"red"}
            // isLoading={formState.isSubmitting}
            >
              Entrar
            </Button>
            <Button
              type="submit"
              mt="6"
              size={"sm"}
              colorScheme='black' variant='link'
              fontWeight="regular"
            // isLoading={formState.isSubmitting}
            >
              Cadastre sua empresa  <Text color="green.400" fontWeight="bold" ml="1"> grátis</Text> 👌
            </Button>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  )
}
