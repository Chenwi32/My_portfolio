import { useState } from 'react'
import styles from './styles/Footer.module.css'
import { db } from '../firebase'
import 'react-toastify/dist/ReactToastify.css'

import { addDoc, doc, getFirestore, setDoc } from 'firebase/firestore'
import { border, Button, Container, Flex, Heading, HStack, VStack } from '@chakra-ui/react'
import { toast, ToastContainer } from 'react-toastify'



const FooterForm = () => {
  const [nameI, setName] = useState('')
  const [emailI, setEmail] = useState('')
  const [messageI, setMessage] = useState('')
  

  const [buttonValue, setButtonValue] = useState('Send')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const timestamp = Date.now().toString()

    const myMessages = doc(db, `mymessages/${timestamp}`)

    const data = {
      nameI,
      emailI,
      messageI,
    }

        if ( emailI !== "" && nameI !== "" && messageI !== "") {
      setButtonValue("Sending...");
      try {
        await setDoc(myMessages, data).then(() => {
          setButtonValue("Send");
        });

        toast('Sent successfully. Thank you very much. I will get to you within 24 hours')
        
      } catch (error) {
        console.log(error);
      }


    setMessage("");
    setName("");
    setEmail("");
    } else {
      
          setButtonValue('Send')

           toast(
             'Some field are still empty. Please make sure you fill in all the information required. Thank you.'
           )
      
          
    }
  }

  return (
    <Container maxW={1200} p={0}>
      <Flex direction={'column'}>
        <Heading mb={2} fontSize={'1.5rem'} color={'brand.100'}>
          Leave me a message
        </Heading>

        <VStack mb={5} align={'left'}>
          <label htmlFor="name">Name: </label>
          <input
            className={styles.inputfield}
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={nameI}
            type="text"
            name="name"
            id="name"
          />
        </VStack>

        <VStack mb={5} align={'left'}>
          <label htmlFor="email">Email: </label>
          <input
            value={emailI}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className={styles.inputfield}
            type="email"
            name="email"
            id="email"
          />
        </VStack>

        <VStack mb={5} align={'left'}>
          <label htmlFor="name">Message: </label>
          <textarea
            value={messageI}
            className={styles.inputfield}
            name=""
            id="message"
            cols="25"
            rows="5"
            onChange={(e) => {
              setMessage(e.target.value)
            }}
          ></textarea>
        </VStack>

        <Button
          bg={'brand.100'}
          _hover={{
            bg: 'brand.200',
            border: '1px solid #fff',
          }}
          mt={5}
          boxShadow={'2xl'}
          onClick={(e) => {
            handleSubmit(e)

            setButtonValue('Sending...')
          }}
        >
          {buttonValue}
        </Button>
      </Flex>
      <ToastContainer />
    </Container>
  )
}

export default FooterForm
