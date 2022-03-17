import { Button, Flex, Input, Stack, FormLabel, FormControl } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex
        as="form"
        width='100%'
        maxWidth={360}
        bg='gray.800'
        p="8"
        borderRadius={8}
        flexDirection='column'
      >
        <Stack spacing='4'>
          <FormControl> {/* FormControl substitui a div para evitar o espaçamento criado pelo Stack entre a label e o input*/}
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              size='lg'
              id='email'
            />
          </FormControl>


          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              name="password"
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              size='lg'
              id='password'
            />
          </FormControl>

        </Stack>
        <Button type="submit" mt='6' colorScheme='pink' size='lg'>Enter</Button>
      </Flex>
    </Flex>
  )
}
