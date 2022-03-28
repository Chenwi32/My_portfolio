import styles from '../styles/resume.module.css'

const resume = () => {
  return (
    <div className="secondary_container">
      <h1 className="title">My Resume</h1>

      <iframe
        src="/files/Chenwi_ICT_Resume.pdf"
        className={styles.iframe}
        frameBorder="0"
      ></iframe>
    </div>
  )
}

export default resume