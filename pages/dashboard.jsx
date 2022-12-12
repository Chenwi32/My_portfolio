import { Box, Button, Container, Heading, HStack, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react'
import { collection, getDocs, query } from 'firebase/firestore'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { db } from '../firebase'

const Dashboard = () => {
  const messagecollection = collection(db, 'mymessages')

  let loading

  const [myMessages, setMyMessages] = useState([])

  const getMessages = async () => {
    // Query all Id cards
    const messageQuery = query(messagecollection)

    // get id cards
    const querySnapshot = await getDocs(messageQuery)

    // Map through the ids and add them to a new array
    const results = []

    querySnapshot.forEach((snapshot) => {
      results.push(snapshot.data())
    })

    // assign the new array to the foundIds
    setMyMessages(results)
  }

  useEffect(() => {
    getMessages()
  }, [])

  loading = myMessages.length === 0

  return (
    <>
      <Head>
        <title>Eugene's dashboard</title>
      </Head>

      <Container maxW={1200} mb={10}>
        <HStack p={3} w={'100%'} justifyContent={'flex-end'} mb={10}>
          <Link href="/createpost">
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

        <Heading mb={10}>New messages</Heading>
        {loading ? (
          <>
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle size="10" />
              <SkeletonText
                mt="4"
                noOfLines={4}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
            
          </>
        ) : (
          myMessages.map((message) => (
            <Box
              key={message.nameI}
              border={'1px'}
              p={8}
              boxShadow={'lg'}
              borderRadius={'lg'}
              fontWeight={600}
              mb={5}
            >
              <Text>Message from:</Text>
              <Text mb={5}>{message.nameI}</Text>

              <Text>Email:</Text>
              <Text mb={5}>{message.emailI}</Text>

              <Text mb={2}>Message:</Text>

              <Text border={'1px solid blue'} p={3}>
                {message.messageI}
              </Text>
            </Box>
          ))
        )}
      </Container>
    </>
  )
}

export default Dashboard
