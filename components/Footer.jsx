import cx from 'classnames'
import styles from './styles/Footer.module.css'
/* max-w-4xl px-4 */
const Footer = () => {
  return (
    <div
      className={cx(
        styles.footer,
        'lg:mt-18 mx-auto mt-12 py-6 sm:py-12 sm:pb-36 '
      )}
    >
      <div className=" flex flex-wrap items-center justify-center container space-x-2 px-4 pt-2 font-medium text-gray-800 dark:text-white sm:space-x-4 lg:pt-0">
        <a
          href="#"
          className={cx(styles.footer__link, 'footer__links transition-colors')}
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>
        <a
          href="#"
          className={cx(styles.footer__link, 'footer__links transition-colors')}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="#"
          className={cx(styles.footer__link, 'footer__links transition-colors')}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="#"
          className={cx(styles.footer__link, 'footer__links transition-colors')}
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
      </div>
    </div>
  )
}

export default Footer
