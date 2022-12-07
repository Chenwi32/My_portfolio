import {
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'

import styles from '../components/styles/Footer.module.css'

import { addDoc, doc, getFirestore, setDoc } from 'firebase/firestore'

import { db } from '../firebase'

const CreatePost = () => {
  const [postAuthor, setPostAuthor] = useState('')

  const [postTitle, setPostTitle] = useState('')
  const [postHeadline, setPostHeadline] = useState('')
  const [postBody, setPostBody] = useState('')

  const handlePost = async (e) => {
    e.preventDefault()
    const timestanp = Date.now().toString()

    const post = doc(db, `blogposts/${timestanp}`)

    const postdata = {
      postAuthor,
      postTitle,
      postHeadline,
      postBody,
      timestanp,
    }

    if (postTitle !== '' && postHeadline !== '' && postBody !== '') {
      try {
        await setDoc(post, postdata)
      } catch (error) {
        console.log(error)
      }

      setPostBody('')
      setPostBody('')
      setPostTitle('')
    }
  }

  return (
    <>
      <Head>
        <title>Create blog posts</title>
      </Head>

      <Container
        minH={'70vh'}
        mb={10}
        bg={'brand.100'}
        p={10}
        color={'brand.300'}
        fontWeight={'bold'}
        borderRadius={'2xl'}
        boxShadow={'2xl'}
        border={'3px solid #fff'}
      >
        <Heading mb={5}>Create a post</Heading>

        <VStack mb={5} align={'left'}>
          <Text>Your Name</Text>
          <input
            className={styles.inputfield}
            type="text"
            value={postAuthor}
            onChange={(e) => {
              setPostAuthor(e.target.value)
            }}
          />
        </VStack>

        <VStack mb={5} align={'left'}>
          <Text>Post Title</Text>
          <input
            className={styles.inputfield}
            type="text"
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value)
            }}
          />
        </VStack>

        <VStack mb={5} align={'left'}>
          <Text>Post Headline</Text>
          <input
            className={styles.inputfield}
            type="text"
            value={postHeadline}
            onChange={(e) => {
              setPostHeadline(e.target.value)
            }}
          />
        </VStack>

        <VStack mb={5} align={'left'}>
          <Text>Post Body</Text>
          <textarea
            value={postBody}
            className={styles.inputfield}
            name=""
            id="message"
            cols="25"
            rows="5"
            onChange={(e) => {
              setPostBody(e.target.value)
            }}
          ></textarea>
        </VStack>

        <HStack p={3} w={'100%'} justifyContent={'flex-end'} mt={10}>
          <Button
            bg={'brand.300'}
            color={'brand.100'}
            _hover={{
              bg: 'brand.200',
              color: 'brand.100',
            }}
            onClick={(e) => handlePost(e)}
          >
            Create Post
          </Button>
        </HStack>
      </Container>
    </>
  )
}

export default CreatePost
