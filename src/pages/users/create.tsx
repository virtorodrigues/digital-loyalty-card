import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import TemplateLogged from "../../compoenents/TemplateLogged";
import { AppInput } from "../../compoenents/Form/Input";

export default function CreateUser() {
  return (
    <TemplateLogged>
      <Box
        as="form"
        flex="1"
        borderRadius={8}
        bg="gray.800"
        p={["6", "8"]}
      // onSubmit={handleSubmit(handleCreateUser)}
      >
        <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
        <Divider my="6" borderColor="gray.700" />

        <VStack spacing={["6", "8"]}>
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <AppInput
              // {...register("name")}
              // error={errors.name}
              name="name"
              label="Nome completo"
            />
            <AppInput
              //  {...register("email")}
              //   error={errors.email}
              name="email"
              label="E-mail"
              type="email"
            />
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
            <AppInput
              // {...register("password")}
              // error={errors.password}
              name="password"
              type="password"
              label="Senha"
            />
            <AppInput
              //  {...register("password_confirmation")}
              // error={errors.password_confirmation}
              name="password_confirmation"
              label="Confirmação da senha"
              type="password"
            />
          </SimpleGrid>
        </VStack>

        <Flex mt="8" justify="flex-end">
          <HStack spacing={["6", "8"]}>
            <Link href="/users" passHref>
              <Button as="a" colorScheme={"whiteAlpha"}>Cancelar</Button>
            </Link>
            <Button
              //  isLoading={formState.isSubmitting}
              type="submit"
              colorScheme={"red"}>
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </TemplateLogged>
  )
}