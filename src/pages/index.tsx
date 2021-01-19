import React from 'react'
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  ImageProps
} from '@chakra-ui/react'

export default function CallToActionWithIllustration () {
  return (
        <Container maxW={'5xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}>
                    Marque horários com seus clientes{' '}
                    <Text as={'span'} color={'orange.400'}>
                        de forma fácil e rápida.
                    </Text>
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'}>
                    Faça o agendamento de horários, possíveis pagamentos e lembretes das "reuniões" de forma simples. <br/>
                    Clique no botão abaixo e veja como o agendamento de serviços e reuniões pode ser fácil.
                </Text>
                <Stack spacing={6} direction={'row'}>
                    <a href={'/formulario'}>
                        <Button
                            rounded={'full'}
                            px={6}
                            colorScheme={'orange'}
                            bg={'orange.400'}
                            _hover={{ bg: 'orange.500' }}>
                            Diga-nos sua opinião
                        </Button>
                    </a>
                </Stack>
                <Flex w={'full'}>
                    <Illustration
                        height={{ sm: '24rem', lg: '28rem' }}
                        mt={{ base: 12, sm: 16 }}
                    />
                </Flex>
            </Stack>
        </Container>
  )
}

export const Illustration = (props: ImageProps) => {
  return (
        <Image
            width="100%"
            viewBox="0 0 702 448"
            src={'./homepage_illustration.svg'}
            {...props}>

        </Image>
  )
}
