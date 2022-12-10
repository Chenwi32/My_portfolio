import { Box, Button, Container, Heading, HStack, Text } from '@chakra-ui/react'
import { collection, getDocs, limit, query, startAfter } from 'firebase/firestore'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { db } from '../firebase'

const blog = () => {
  // Query the first page of docs

  const firstPostscollection = query(collection(db, 'blogposts'), limit(1))

 

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const documentSnapshots = await getDocs(firstPostscollection)

    // Get the last visible document
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1]
    console.log('last', lastVisible)

    const results = []

    // Construct a new query starting at this document,
    // get the next 2 posts.
    const next = query(
      collection(db, 'blogposts'),

      startAfter(lastVisible),
      limit(1)
    )

    documentSnapshots.forEach(snapshot => {
      results.push(snapshot.data())
    });

    setPosts(results)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <Head>
        <title>Blog Posts</title>
      </Head>

      <Container maxW={1200} minH={'70vh'}>
        <Heading fontSize={'1.5rem'}>
          Stop Gambling with your children's lives and your hard earn money
        </Heading>

        {posts.map((post) => (
          <Box border={'1px'} mb={10} mt={10} p={5}>
            <Text mb={5}>{post.postTitle}</Text>
            <Text mb={5}>{post.postHeadline}</Text>
            <Text mb={5}>{post.postBody}</Text>
          </Box>
        ))}
      </Container>
    </>
  )
}

export default blog
