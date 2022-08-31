import cx from 'classnames'
import styles from './styles/Footer.module.css'
/* max-w-4xl px-4 */
const Footer = () => {
  return (
    <div
      className={
        styles.footer}
    >

      

      <div className=" container flex flex-wrap items-start justify-start px-4 pt-2 font-medium text-white dark:text-white  lg:pt-0">
        <h1 id='contact'>Contact</h1>
        <div className="social flex flex-wrap items-start justify-start space-x-2 sm:space-x-4">
          <span
            href="#"
            className={cx(
              /* styles.footer__link, */
              'transition-colors'
            )}
            target="_blank"
            rel="noreferrer"
          >
            <span>Email:</span> <span>chenwieugene.j@gmail.com</span>
          </span>
          <a
            href="tel:+237651395832"
            className={cx(
              styles.footer__link,
              'footer__links transition-colors'
            )}
            rel="noreferrer"
          >
            <span>Phone: </span> <span>+237651395832</span>
          </a>

          <a
            href="https://github.com/Chenwi32"
            className={cx(
              styles.footer__link,
              'footer__links transition-colors'
            )}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://web.facebook.com/profile.php?id=100009608373380"
            className={cx(
              styles.footer__link,
              'footer__links transition-colors'
            )}
            target="_blank"
            rel="noreferrer"
          >
            Facebook <i className="icon-facebook"></i>
          </a>
        </div>

        <hr />

        <div className={`${styles.form_container}`}>
          
          <form action="" className={styles.form}>

            <h3>Leave me a message</h3>

            <div className={styles.form_fields}>
              <label htmlFor="name">Name: </label>
              <input className={styles.inputfield} type="text" name="name" />
            </div>

            <div className={styles.form_fields}>
              <label htmlFor="email">Email: </label>
              <input className={styles.inputfield} type="email" name="name" />
            </div>

            <div className={styles.form_fields}>
              <label htmlFor="name">Message: </label>
              <textarea
                className={styles.inputfield}
                name=""
                id=""
                cols="25"
                rows="5"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
