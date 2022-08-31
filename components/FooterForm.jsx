import { useState } from 'react'
import styles from './styles/Footer.module.css'

const FooterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
      name,
      email,
      message,
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application.json, text/plain, */*',
        'content-Type': '/application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true)
        setEmail('')
        setName('')
        setMessage('')
      }
    })
  }

  return (
    <div className={`${styles.form_container}`}>
      <form action="" className={styles.form}>
        <h3>Leave me a message</h3>

        <div className={styles.form_fields}>
          <label htmlFor="name">Name: </label>
          <input
            className={styles.inputfield}
            onChange={(e) => {
              setName(e.target.value)
            }}
            type="text"
            name="name"
          />
        </div>

        <div className={styles.form_fields}>
          <label htmlFor="email">Email: </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className={styles.inputfield}
            type="email"
            name="name"
          />
        </div>

        <div className={styles.form_fields}>
          <label htmlFor="name">Message: </label>
          <textarea
            className={styles.inputfield}
            name=""
            id=""
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
          value="Send"
          onClick={(e) => {
            handleSubmit(e)
          }}
        />
      </form>
    </div>
  )
}

export default FooterForm
