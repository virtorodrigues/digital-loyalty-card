import { Input, Stack, InputProps, FormLabel, FormControl } from "@chakra-ui/react";

type AppInputProps = InputProps & {
  label?: string;
  name: string;
}

export function AppInput({ name, label = "", ...rest }: AppInputProps) {
  return (
    <Stack spacing={1}>
      {!!label && <FormLabel htmlFor='email'>{label}</FormLabel>}
      <Input
        id={name}
        name={name}
        type={rest.type}
        {...rest}
      />
    </Stack>
  )
}