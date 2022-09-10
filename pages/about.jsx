/* import Image from 'next/image' */
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
        My Name is Chenwi Eugene. I am from Cameroon a country in West Africa.
        <br />
        <strong>Talking about me career wise</strong>
        <br />
        I must say that I have had a very funny path in life &#x1F607;. <br />I
        sarted out as a building construction technician after completing high
        school (studying civil engineering), then later down the line I found my
        passion in software engineering —Two unrelated yet related fields
        &#x1F923;.
        {/* I am driven
        by the hunger for common solutions to problems that plague the day to day life of the common man. */}
      </p>
      <p>
        I have spent about a year learning and practicing how to code, creating
        project ideas and working on them. If you'd like to know more about the
        projects I have been doing, check the menu bar at the top and click on
        "Projects".
      </p>
      <h1 className="title">Uses</h1>
      <p>
        Here are the things I use in my day to day life in my journey to become
        a software engineer <br />
        <img
          className={styles.tools_image}
          src="/images/tools.jpeg"
          width={630}
          height={350}
        />
      </p>
      <p>
      <h2 className="secondary_title">Desktop Setup</h2>
      
         <ul className={styles.list}>
        <li>HP-ProBook &#x1F4BB;</li>
        <li>HP mouse &#x1F5B1;</li>
        <li>HP S2031 Monitor</li>
        <li>Wireless Speaker &#x1F50A;</li>
        <li>Webcam &#x1F4F7;</li>
      </ul>

      <h2 className="secondary_title">Development Tools</h2>
      
        <ul className={styles.list}>
          <li>VS Code</li>
          <li>Chrome Browser</li>
          <li>Git/GitHub</li>
          <li>Firebase &#x1F525;</li>
          <li>Netlify</li>
          <li>Heruku</li>
        </ul>
      
      <h2 className="secondary_title">Languages</h2>
      
        <ul className={styles.list}>
          <li>Javascript</li>
          <li>Html</li>
          <li>Css</li>
          <li>Python</li>
          <li>SQL (Postgres)</li>
        </ul>
      
        <h2 className="secondary_title">Frameworks</h2>
      
        <ul className={styles.list}>
          <li>React/Next Js</li>
          <li>Flask</li>
        </ul>
      </p>
     
    </div>
  )
}

export default about
