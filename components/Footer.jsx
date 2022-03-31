import cx from 'classnames'
import styles from './styles/Footer.module.css'
/* max-w-4xl px-4 */
const Footer = () => {
  return (
    <div
      className={cx(
        styles.footer,
        'lg:mt-18 container mx-auto mt-12 py-6 sm:py-12 sm:pb-36'
      )}
    >
      <div className=" px-4 text-gray-800 dark:text-white">
        <div className="dark:border-white-300 mb-2  border-gray-300 pb-8"></div>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <p>Chenwi Eugene</p>
          <div className="flex flex-wrap space-x-2 pt-2 font-medium sm:space-x-4 lg:pt-0">
            <a
              href="#"
              className={cx(
                styles.footer__link,
                'footer__links transition-colors'
              )}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="#"
              className={cx(
                styles.footer__link,
                'footer__links transition-colors'
              )}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            
            <a
              href="#"
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
              href="#"
              className={cx(
                styles.footer__link,
                'footer__links transition-colors'
              )}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
