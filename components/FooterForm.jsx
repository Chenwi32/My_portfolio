import { useState } from 'react'
import styles from './styles/Footer.module.css'
import { db } from '../firebase'

import { toast, ToastContainer } from 'react-nextjs-toast'

import { addDoc, doc, getFirestore, setDoc } from 'firebase/firestore'

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
        toast.notify(
          'Sent successfully. Thank you very much. I will get to you within 24 hours',
          {
            duration: 5,
            type: 'success',
          }
        )
      } catch (error) {
        console.log(error);
      }


    setMessage("");
    setName("");
    setEmail("");
    } else {
      
          
          toast.notify(
            'Some field are still empty. Please make sure you fill in all the information required. Thank you.',
            {
              duration: 5,
            }
          )
          setButtonValue('Send')
    }
  }

  return (
    <div className={`${styles.form_container}`}>
      <ToastContainer
        align={'right'}
        position={'bottom'}
        primaryColor="#FFCB2B"
      />

      <form action="" className={styles.form}>
        <h3>Leave me a message</h3>

        <div className={styles.form_fields}>
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
        </div>

        <div className={styles.form_fields}>
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
        </div>

        <div className={styles.form_fields}>
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
        </div>

        <input
          className={`${styles.submit_btn} btn`}
          type="submit"
          button
          value={buttonValue}
          onClick={(e) => {
            handleSubmit(e)

            setButtonValue('Sending...')
          }}
        />
      </form>
    </div>
  )
}

export default FooterForm
