import { Button, Container, Heading, HStack } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

const blog = () => {
  return (
    <>
      <Head>
        <title>Blog Posts</title>
      </Head>

      <Container maxW={1200} minH={'70vh'}>
        <HStack p={3} w={'100%'} justifyContent={'flex-end'} mb={10}>
          <Link href="/createPost">
            <Button
              bg={'brand.100'}
              color={'brand.300'}
              _hover={{
                bg: 'brand.200',
                color: 'brand.100',
              }}
            >
              Create Blog Post
            </Button>
          </Link>
        </HStack>
        <Heading fontSize={'1.5rem'}>
          Stop Gambling with your children's lives and your hard earn money
        </Heading>
      </Container>
    </>
  )
}

export default blog
