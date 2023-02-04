import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'

function projects() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [isLargerThan700] = useMediaQuery('(min-width: 700px)')

  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

  const projectData = [
    {
      id: 0,
      title: '237 Lost and Found',
      headline: 'A web application that helps in the search of lost documents',
      details:
        'The problems people face due to lost of their document got me thinking, what if we create a digital solution to make the search easier and faster? So after a careful thought, I finally created "237 Lost and Found" to help in the search. I built The front-end with Next.Js and hosted it on firebase, using firestore for the database. I used Chakra UI for as my UI library',
      link: 'https://lost-and-found-8ef8a.firebaseapp.com/',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1673511256/237_lefz1i.png',
      status: 'In progress',
    },

    {
      id: 1,
      title: 'MAfriculture',
      headline: 'An e-commerce platform to sell African arts and crafts.',
      details:
        'MAfriculture is an e-commerce platform that sells African arts and crafts. I used Next.Js for the front-end, Chakra UI Library, Flutterwave for payment API and firebase hosting',
      link: 'https://mafriculture.web.app/',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1673511258/maf_kjbl6x.png',
      status: 'In progress',
    },

    {
      id: 2,
      title: "Titus' Funiture",
      headline: "A website to display the company's products and services.",
      details:
        'I did this for a client who came to me with nothing but poor images. His end gaol was that people views his work and contact him. I used Next.Js for front-end, Chakra UI Library, Cloudinary for images and vercel hosting',
      link: 'https://titus-furniture.vercel.app/',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1673511257/titus_pikz13.png',
      status: 'Delivered',
    },

    {
      id: 3,
      title: 'NALDCCAM',
      headline:
        'A website for a green agriculture company which talks about the company, their projects and the services they offer.',
      details:
        "I am working on this closely with the company's project manager, structuring it to their taste. I used Next.Js for front-end, Chakra UI Library, GitHub for the version control and vercel hosting",
      link: 'https://naldccm.vercel.app/',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1673511257/naldccam_sympke.png',
      status: 'In progress',
    },
    {
      id: 4,
      title: 'Vitroscript',
      headline:
        'A website for a green agriculture company which talks about the company, their projects and the services they offer.',
      details:
        "I am working on this closely with the company's project manager, structuring it to their taste. I used Next.Js for front-end, Chakra UI Library, GitHub for the version control and vercel hosting",
      link: 'https://naldccm.vercel.app/',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1673511257/naldccam_sympke.png',
      status: 'In progress',
    },
  ]
  const [projId, setProjId] = useState(0)
  return (
    <Container
      minW={isLargerThan700 ? 'unset' : '100vw'}
      width={'fit-content'}
      p={5}
      maxW={1200}
      mb={10}
    >
      <Heading className="title">My personal projects</Heading>

      <SimpleGrid
        columns={isLargerThan700 ? 2 : 1}
        spacing={isLargerThan700 ? '24px' : '2rem'}
        margin={'auto'}
      >
        {projectData.map((project) => {
          return (
            <Box
              boxShadow={'xl'}
              bg='brand.300'
              borderRadius={'lg'}
              p={isLargerThan1000 ? '1.5rem 2rem' : 5}
              key={project.id}
            >
              <Heading fontSize={'1.3rem'} mb={5}>
                {project.title}
              </Heading>
 <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
              >
                <Image src={project.image} mb={5}
              /> 
                      </a>
                           <Text mb={5} className="projects__text">
                {project.headline}
              </Text>

              <Box
                height={0}
                width={'100%'}
                borderBottom={'1px solid #05bd33'}
                mb={5}
              />

              <Button
                bg={'brand.100'}
                color={'brand.300'}
                _hover={{
                  bg: 'brand.200',
                  color: 'brand.100',
                }}
                onClick={() => {
                  setProjId(project.id)
                  onOpen()
                }}
              >
                See more{' '}
              </Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>{projectData[projId].title}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text mb={5}>{projectData[projId].details}</Text>
                    <Box
                      boxShadow={'lg'}
                      p={'1rem'}
                      border={'1px solid #05bd33'}
                    >
                      <Text>Status:</Text>
                      <Text fontWeight={800} color={'brand.100'}>
                        {projectData[projId].status}
                      </Text>
                    </Box>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Close
                    </Button>

                    <Button
                      bg={'brand.100'}
                      color={'brand.300'}
                      _hover={{
                        bg: 'brand.200',
                        color: 'brand.100',
                      }}
                    >
                      <a
                        href={projectData[projId].link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        See project
                      </a>
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          )
        })}
      </SimpleGrid>
    </Container>
  )
}

export default projects
