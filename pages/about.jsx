import styles from '../styles/About.module.css'
const about = () => {
  return (
    <div className={styles.about}>
      <h1 className="title">About Me</h1>
      <p>
        First, I will like to thank you for taking your precious time to know
        about me. I am just a nobody trying to gain value in your eyes
        <span className="imojie"> &#x1F60E;</span>
      </p>

      <p>
        <strong>Let me introduce nyself formaly</strong>
        <span className="imojie2">&#x263A;</span> <br />
        My Name is Chenwi Eugene. I am from Cameroon a country in West Africa. <br />
        ...{/* I am driven
        by the hunger for common solutions to problems that plague the day to day life of the common man. */}
      </p>
    </div>
  )
}

export default about
