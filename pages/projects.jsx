import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

function projects() {
  const { isOpen, onOpen, onClose } = useDisclosure()

let link = 'https://mafriculture.web.app/'

  return (
    <div className="container mx-auto ">
      <div className=" projects  ">
        <h1 className="title">My personal projects</h1>

        <div className="grid grid-cols-2 gap-5">
          <Box
            boxShadow={'lg'}
            border={'1px solid #05bd33'}
            borderRadius={'lg'}
            p={'1.5rem 2rem'}
          >
            <Heading fontSize={'1.3rem'} mb={5}>
              237 Lost and Found
            </Heading>

            <Text mb={5} className="projects__text">
              A web application that helps in the search of lost documents
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
            >
              See more{' '}
            </Button>
          </Box>

          <Box
            boxShadow={'lg'}
            border={'1px solid #05bd33'}
            borderRadius={'lg'}
            p={'1.5rem 2rem'}
          >
            <Heading fontSize={'1.3rem'} mb={5}>
              MAfriculture
            </Heading>

            <Text mb={5} className="projects__text">
              An e-commerce platform to sell African arts and crafts.
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
            >
              See more{' '}
            </Button>

            
          </Box>

          <Box
            boxShadow={'lg'}
            border={'1px solid #05bd33'}
            borderRadius={'lg'}
            p={'1.5rem 2rem'}
          >
            <Heading fontSize={'1.3rem'} mb={5}>
              Titus' Funiture
            </Heading>

            <Text mb={5} className="projects__text">
              A website to display the company's products and services.
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
                onOpen()
              }}
            >
              See more{' '}
            </Button>
          </Box>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Link href={link}>MAfriculture</Link>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default projects
