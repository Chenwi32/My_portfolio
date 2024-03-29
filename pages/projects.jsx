import {
  Box,
  Button,
  Container,
  Flex,
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
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure()

  const [isLargerThan700] = useMediaQuery('(min-width: 700px)')

  const [isLargerThan1000] = useMediaQuery('(min-width: 1000px)')

  const graphics = [
    {
      id: 0,
      title: '',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1709304190/1_pjypvd.png',
    },
    {
      id: 1,
      title: '',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1709304174/2_k613ov.png',
    },
    {
      id: 2,
      title: '',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1709304331/Untitled_design_hohid7.png',
    },
    {
      id: 3,
      title: '',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1709304211/A_vgvczw.png',
    },
    {
      id: 4,
      title: '',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1709304638/1_yyrp6v.png',
    },
    {
      id: 5,
      title: '',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1709304419/briefing_uzdjpr.png',
    },

    {
      id: 6,
      title: '',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1709304150/CMNA_Flyer_1_zt5dw6.png',
    },
    {
      id: 7,
      title: '',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1709304495/Engineering_Career_tfhjmj.png',
    },
    {
      id: 8,
      title: '',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1709308132/french_promo_m1mdlp.png',
    },
    {
      id: 9,
      title: '',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1709307960/1_quvpwj.png',
    },
    {
      id: 10,
      title: '',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1709307967/2_v3uta3.png',
    },
  ]
  const projectData = [
    {
      id: 0,
      title: '237 Lost and Found',
      headline: 'A web application that helps in the search of lost documents',
      details:
        'The problems people face due to lost of their document got me thinking, what if we create a digital solution to make the search easier and faster? So after a careful thought, I finally created "237 Lost and Found" to help in the search. I built The front-end with Next.Js and hosted it on firebase, using firestore for the database. I used Chakra UI for as my UI library',
      link: 'https://237-lost-and-found.vercel.app/',
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
        "A website for a start-up writing company based in Cameroon with one of it's branches in Sierra Leone",
      details:
        "I am working closely with the founder of company. Features of the project include a dashboard where an admin can create blog posts to be viewed by others, template page where people can download templates. I used Next.Js for front-end, Chakra UI Library, GitHub for the version control, vercel hosting and it's serverless with firebase for the database",
      link: 'https://vitroscript.vercel.app/',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1675978544/vitro_sfqrrk.jpg',
      status: 'In progress',
    },
    {
      id: 5,
      title: 'Goldas',
      headline: 'A web form that collects user inputs and stores in a database',
      details:
        'This is a user friendly multi-step form that collect data for a currency project of the Golden Age Soccer (Goldas) organisation that is ongoing.',
      link: 'https://goldas.vercel.app/',
      image:
        'https://res.cloudinary.com/dphx0rfui/image/upload/v1709300455/goldas-form-image_z09ywu.png',
      status: 'In progress',
    },
  ]
  const [projId, setProjId] = useState(0)
  const [graphicId, setGraphicId] = useState(0)
  return (
    <Container
      minW={isLargerThan700 ? 'unset' : '100vw'}
      width={'fit-content'}
      p={5}
      maxW={1200}
      mb={10}
    >
      <Heading fontFamily={'Andika'} className="title">
        Web Projects
      </Heading>

      <SimpleGrid
        columns={isLargerThan700 ? 2 : 1}
        spacing={isLargerThan700 ? '24px' : '2rem'}
        margin={'auto'}
        mb={10}
      >
        {projectData.map((project) => {
          return (
            <Box
              boxShadow={'xl'}
              bg="brand.300"
              borderRadius={'lg'}
              p={isLargerThan1000 ? '1.5rem 2rem' : 5}
              key={project.id}
            >
              <Heading fontSize={'1.3rem'} mb={5}>
                {project.title}
              </Heading>
              <a href={project.link} target="_blank" rel="noreferrer">
                <Image src={project.image} mb={5} />
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
      <Heading id="graphics" fontFamily={'Andika'} className="title">
        Graphic Designs
      </Heading>

      <SimpleGrid
        columns={isLargerThan700 ? 2 : 1}
        spacing={isLargerThan700 ? '24px' : '2rem'}
        margin={'auto'}
        mb={10}
      >
        {graphics.map((graphic) => {
          return (
            <Box
              boxShadow={'xl'}
              bg="brand.300"
              borderRadius={'lg'}
              p={isLargerThan1000 ? '1.5rem 2rem' : 5}
              key={graphic.id}
            >
              <Heading fontSize={'1.3rem'} mb={5}>
                {graphic.title}
              </Heading>
              <Image
                onClick={() => {
                  setGraphicId(graphic.id)
                  onOpen2()
                }}
                src={graphic.image}
                mb={5}
              />
              <Text mb={5} className="projects__text">
                {graphic.headline}
              </Text>

              <Box
                height={0}
                width={'100%'}
                borderBottom={'1px solid #05bd33'}
                mb={5}
              />

              <Modal isOpen={isOpen2} onClose={onClose2}>
                <ModalOverlay />
                <ModalContent
                  maxW={'unset'}
                  w={isLargerThan1000 ? 900 : '100%'}
                  h={500}
                  bg={''}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <ModalHeader>{graphics[graphicId].title}</ModalHeader>
                  <ModalCloseButton color={'#fff'} />
                  <ModalBody>
                    <Image
                      margin={'auto'}
                      w={'100%'}
                      h={600}
                      src={graphics[graphicId].image}
                    />
                  </ModalBody>

                  <ModalFooter w={'100%'}>
                    <Flex w={'100%'} justifyContent={'space-between'}>
                      <Button
                        _hover={{
                          backgroundColor: 'rgba(0, 0, 0, 0.137)',
                          color: '#fff',
                        }}
                        onClick={() => {
                          if (graphicId <= 0) {
                            return
                          } else {
                            setGraphicId(graphicId - 1)
                          }
                        }}
                      >
                        &#60;
                      </Button>
                      <Button
                        _hover={{
                          backgroundColor: 'rgba(0, 0, 0, 0.137)',
                          color: '#fff',
                        }}
                        onClick={() => {
                          if (graphicId + 1 >= graphics.length) {
                            return
                          } else {
                            setGraphicId(graphicId + 1)
                          }
                        }}
                      >
                        &#62;
                      </Button>
                    </Flex>
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
