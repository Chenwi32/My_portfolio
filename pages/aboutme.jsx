import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import Head from 'next/head'

const Aboutme = () => {
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)')

  return (
    <>
      <Head>
        <title>About Eugene</title>
      </Head>
      <Container
        minW={isLargerThan700 ? 'unset' : '100vw'}
        width={'fit-content'}
        p={5}
        maxW={1200}
        mb={10}
      >
        <Heading w={'fit-content'} borderBottom={'5px solid #05bd33'} mb={5}>
          About Me
        </Heading>

        <Text mb={5}>
          First, I will like to thank you for taking your precious time to know
          about me. I am just a nobody trying to gain value in your eyes
        </Text>
        <Text mb={5}>
          Let me introduce nyself formaly My Name is Chenwi Eugene. I am from
          Cameroon a country in West Africa. Talking about me career wise I must
          say that I have had a very funny path in life . I sarted out as a
          building construction technician after completing high school studying
          civil engineering, then later down the line I found my passion in
          software engineering —Two unrelated yet related fields. I am driven by
          the hunger for common solutions to problems that plague the day to day
          life of the common man.
        </Text>

        <Text mb={5}>
          I have spent about a year learning and practicing how to code,
          creating project ideas and working on them. If you'd like to know more
          about the projects I have been doing, check the menu bar at the top
          and click on "Projects".
        </Text>

        <Heading w={'fit-content'} borderBottom={'5px solid #05bd33'} mb={5}>
          Uses
        </Heading>

        <Text mb={5}>
          Here are the things I use in my day to day life in my journey to
          become a software engineer
        </Text>
        <Image src="/images/tools.jpeg" width={630} height={350} mb={5} />

        <Heading fontSize={'1.5rem'} color={'brand.100'} mb={2}>
          Desktop Setup
        </Heading>

        <Flex flexDirection={'column'} mb={5}>
          <Text>HP-ProBook </Text>
          <Text>HP mouse </Text>
          <Text>HP S2031 Monitor</Text>
          <Text>Wireless Speaker </Text>
          <Text>Webcam </Text>
        </Flex>

        <Heading fontSize={'1.5rem'} color={'brand.100'} mb={2}>
          Development Tools
        </Heading>

        <Flex flexDirection={'column'} mb={5}>
          <Text>VS Code</Text>
          <Text>Chrome Browser</Text>
          <Text>Git/GitHub</Text>
          <Text>Firebase </Text>
          <Text>Netlify</Text>
          <Text>Heruku</Text>
        </Flex>

        <Heading fontSize={'1.5rem'} color={'brand.100'} mb={2}>
          Languages
        </Heading>

        <Flex flexDirection={'column'} mb={5}>
          <Text>Javascript</Text>
          <Text>Html</Text>
          <Text>Css</Text>
          <Text>Python</Text>
          <Text>SQL / Postgres</Text>
        </Flex>

        <Heading fontSize={'1.5rem'} color={'brand.100'} mb={ 2}>
          Frameworks
        </Heading>

        <Flex flexDirection={'column'}>
          <Text>React / Next Js</Text>
          <Text>Flask</Text>
        </Flex>
      </Container>
    </>
  )
}

export default Aboutme
