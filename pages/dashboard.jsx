import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { collection, getDocs, query } from 'firebase/firestore'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { db } from '../firebase'

const Dashboard = () => {
  const messagecollection = collection(db, 'mymessages')

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

  return (
    <>
      <Head>
        <title>Eugene's dashboard</title>
      </Head>

      <Container maxW={1200}>
        <Heading mb={10}>New messages</Heading>
        {myMessages.map((message) => (
          <Box border={'1px'} p={8} boxShadow={'lg'} borderRadius={'lg'}  fontWeight={600}>
            <Text>Message from:</Text>
            <Text mb={5}>{message.nameI}</Text>

            <Text>Email:</Text>
            <Text mb={5}>{message.emailI}</Text>

            <Text mb={2}>Message:</Text>

            <Text border={'1px solid blue'} p={3}>{message.messageI}</Text>
          </Box>
        ))}
      </Container>
    </>
  )
}

export default Dashboard
