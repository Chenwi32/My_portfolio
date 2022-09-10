import cx from 'classnames'
import styles from './styles/Footer.module.css'

import FooterForm from './FooterForm'

const Footer = () => {
  return (
    <div className={`${styles.footer} flex-col`}>
      <div className="container">
        <h1 id="contact">Contact</h1>
      <div className={`${styles.contact_container}  flex items-start px-4 pt-2 font-medium text-white dark:text-white  lg:pt-0`}>
        <div className={`${styles.social} flex-col items-start justify-start`}>
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

          <div>
           <FooterForm /> 
          </div>
        
      </div>
      </div>
      
    </div>
  )
}
export default Footer
