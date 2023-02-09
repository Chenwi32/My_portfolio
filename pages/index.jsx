import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import HomePage from '../components/homePage'

const Home = () => {
  return (
    <>
      <Head>
        <title>Eugene's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  )
}

export default Home
