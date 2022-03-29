import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {

  return (
    <FormControl> {/* FormControl substitui a div para evitar o espaçamento criado pelo Stack entre a label e o input*/}
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size='lg'
        _hover={{
          bgColor: "gray.900",
        }}
        {...rest}
      />
    </FormControl>
  )
}