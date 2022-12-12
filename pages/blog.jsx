import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import { async } from '@firebase/util'
import {
  collection,
  getDocs,
  limit,
  query,
  startAfter,
} from 'firebase/firestore'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { db } from '../firebase'

const Blog = () => {
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)')

  // Query the first page of docs

  const [posts, setPosts] = useState([])
  const [documentSnapshots, setdocumentSnapshots] = useState([])
  const [firstpage, setFirstPage] = useState(0)

  const firstPostscollection = query(collection(db, 'blogposts'), limit(1))

  const getPosts = async () => {
    setdocumentSnapshots(await getDocs(firstPostscollection))

    const results = []

    documentSnapshots.forEach((snapshot) => {
      results.push(snapshot.data())
    })

    setFirstPage()
    setPosts(results)
  }

  useEffect(() => {
    getPosts()
  }, [firstpage])

  const getNextPost = async () => {
    const newPost = []
    if (documentSnapshots.docs.length <= 0) return
    const lastVisible =
      documentSnapshots.docs[documentSnapshots.docs.length - 1]

    // Construct a new query starting at this document,
    // get the next 1 posts.
    const next = query(
      collection(db, 'blogposts'),

      startAfter(lastVisible),
      limit(1)
    )
    setdocumentSnapshots(await getDocs(next))

    documentSnapshots.forEach((snapshot) => {
      newPost.push(snapshot.data())
    })

    setPosts(newPost)
  }

  return (
    <>
      <Head>
        <title>Blog Posts</title>
      </Head>

      <Container p={0} mb={10} maxW={900} w={'95vw'}>
        {posts.map((post) => (
          <Box mb={10}>
            <Heading
              w={'fit-content'}
              borderBottom={'5px solid #05bd33'}
              mb={5}
            >
              {post.postTitle}
            </Heading>

            <Heading fontSize={'1.2rem'} mb={5}>
              {post.postHeadline}
            </Heading>

            <Text>{post.postBody}</Text>
          </Box>
        ))}

        <HStack p={3} w={'100%'} justifyContent={'flex-end'} mb={10}>
          <Button
            bg={'brand.100'}
            color={'brand.300'}
            _hover={{
              bg: 'brand.200',
              color: 'brand.100',
            }}
            onClick={() => {
              getNextPost()
            }}
          >
            See Next Post
          </Button>
        </HStack>
      </Container>
    </>
  )
}

export default Blog
