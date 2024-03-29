import {
  Container,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery,
} from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

const Aboutme = () => {
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)')

  return (
    <>
      <Head>
        <meta
          name="description"
          content="About Chenwi Eugene Cameroonian web developer IT technician and buildind construction technician"
        />
        <title>About Eugene</title>
      </Head>
      <Container
        minW={isLargerThan700 ? 'unset' : '100vw'}
        width={'fit-content'}
        p={5}
        maxW={900}
        mb={10}
        fontFamily={'Poppins'}
      >
        <Heading
          fontFamily={'Andika'}
          w={'fit-content'}
          borderBottom={'5px solid #05bd33'}
          mb={5}
        >
          About Me
        </Heading>
        <Text mb={5}>
          First, I would like to thank you for taking your precious time to know
          about me. I am just a nobody trying to gain value in your eyes
        </Text>
        <Text mb={5}>
          Let me introduce myself formaly. My name is Chenwi Eugene. I am from
          Cameroon a country in West-Africa. Talking about me career wise I must
          say that I have had a very funny path in life. I sarted out as a
          building construction technician after completing high school studying
          civil engineering, then later down the line I found my passion in
          software engineering — two unrelated yet related fields right!!
          <br />
          <b>I got my BSC in software Engineering in 2023.</b> <br />I am driven
          by the hunger for basic solutions to problems that plague the day to
          day life of the common man.
        </Text>
        <Text mb={5}>
          I have been in the industry for a couple of years, creating project,
          building people's projects, teaching people how to code, teaching
          computer science and ICT. If you'd like to know more about the
          projects I have been doing, check the menu bar at the top and click on
          "Projects".
        </Text>
        <Heading
          fontFamily={'Andika'}
          w={'fit-content'}
          borderBottom={'5px solid #05bd33'}
          mb={5}
        >
          Work Experience
        </Heading>
        <Text mb={5}>
          I have experience working with various companies and institutions as a
          freelancer. My work with them has ranged from <b>building websites, building web forms, graphic designing ( creating flyers, brochures, roll-ups, banners, 3D graphics with AutoCad , etc), creating their social media pages, configuring emails with the custom domain name of their company,
          </b>{' '}
          etc.
        </Text>
        Take a look at some of{' '}
        <Text fontWeight={'bold'} color={'brand.100'} as={'span'}>
          <Link href={'/projects#graphics'}>&#x1F517; my desings</Link>
        </Text>
        <Heading
          fontFamily={'Andika'}
          fontSize={'1.5rem'}
          color={'brand.100'}
          mb={2}
        >
          Most Recent
        </Heading>
        <Text mb={5}>
          I recently worked as a technical administrative assistant at ADES-UK.
          I handled a variety of tasks in the company ranging from graphic
          designing, scheduling meetings, etc, and I built an online platform
          where people were applying for Services from everywhere in the world
          and the team could manage the data from applicants with ease.
        </Text>
        <Heading
          fontFamily={'Andika'}
          fontSize={'1.5rem'}
          color={'brand.100'}
          mb={2}
        >
          Current
        </Heading>
        <UnorderedList mb={5}>
          <ListItem>
            I am currently working as a computer science and ICT tutor at WeCare
            school complex
          </ListItem>
          <ListItem>
            I am offering a training program aimed at preparing students for the
            fast-changing job market. More on that at
            <Text fontWeight={'bold'} color={'brand.100'} as={'span'}>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={'https://encadev.vercel.app/'}
              >
                {' '}
                &#x1F517; ENCADEV
              </Link>
            </Text>
          </ListItem>
          <ListItem>
            I am also volunteering as a building construction technician.
          </ListItem>
        </UnorderedList>
        <Heading
          fontFamily={'Andika'}
          w={'fit-content'}
          borderBottom={'5px solid #05bd33'}
          mb={5}
        >
          Uses
        </Heading>
        <Text mb={5}>
          Here are the things I use in my day to day life in my journey to
          become a software engineer
        </Text>
        <Image src="/images/tools.jpeg" width={630} mb={5} />
        <Heading
          fontFamily={'Andika'}
          fontSize={'1.5rem'}
          color={'brand.100'}
          mb={2}
        >
          Desktop Setup
        </Heading>
        <Flex flexDirection={'column'} mb={5}>
          <Text>HP-ProBook </Text>
          <Text>HP mouse </Text>
          <Text>HP S2031 Monitor</Text>
          <Text>Wireless Speaker </Text>
          <Text>Webcam </Text>
        </Flex>
        <Heading
          fontFamily={'Andika'}
          fontSize={'1.5rem'}
          color={'brand.100'}
          mb={2}
        >
          Development Tools
        </Heading>
        <Flex flexDirection={'column'} mb={5}>
          <Text>VS Code</Text>
          <Text>Chrome Browser</Text>
          <Text>Git/GitHub</Text>
          <Text>Firebase </Text>
          <Text>Netlify</Text>
          <Text>Heruku</Text>
          <Text>Canva</Text>
          <Text>Figma</Text>
        </Flex>
        <Heading
          fontFamily={'Andika'}
          fontSize={'1.5rem'}
          color={'brand.100'}
          mb={2}
        >
          Languages
        </Heading>
        <Flex flexDirection={'column'} mb={5}>
          <Text>Javascript</Text>
          <Text>Html</Text>
          <Text>Css</Text>
          <Text>Python</Text>
          <Text>SQL / Postgres</Text>
          <Text>C</Text>
        </Flex>
        <Heading
          fontFamily={'Andika'}
          fontSize={'1.5rem'}
          color={'brand.100'}
          mb={2}
        >
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
