import cx from 'classnames'
import styles from './styles/Footer.module.css'

import FooterForm from './FooterForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// for brand icons
import {
  faFacebook,
  faTwitter,
  
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { Box, Flex, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import {  faEnvelope, faMessage, faSquarePhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

const [isLargerThan700] = useMediaQuery('(min-width: 700px)')

  return (
    <div  className={`${styles.footer} flex-col`}>
      <Flex flexDirection={isLargerThan700 ? 'row' : 'column'}  className="container">
       
        <div
          className={`${styles.contact_container}  flex items-start px-4 pt-2 font-medium text-white dark:text-white  lg:pt-0`}
          
        >
           
          <Flex
            fontSize={'1.5rem'}

            
            className={`${styles.social} flex-col items-start justify-start`}
          ><Heading fontSize={'1.5rem'} mb={2} color={'brand.100'}>
          Contact
        </Heading>
            <Flex
              align={'center'}
              target="_blank"
              rel="noreferrer"
            >
              
                <FontAwesomeIcon icon={faEnvelope} />
              
              <Text ml={3}>chenwieugene.j@gmail.com</Text>
            </Flex>
            <a
              href="tel:+237651395832"
              className={cx(
                styles.footer__link,
                'footer__links transition-colors'
              )}
              rel="noreferrer"
            >
              <span>
                <FontAwesomeIcon icon={faSquarePhone} />{' '}
              </span>{' '}
              <span >+237651395832</span>
            </a>

            <Heading mb={2} mt={5} fontSize={'1.5rem'} color={'brand.100'}>
              Social
            </Heading>

            <Flex gap={5} fontSize={'1.5rem'}>
              <a
                href="https://github.com/Chenwi32"
                className={cx(
                  styles.footer__link,
                  'footer__links transition-colors'
                )}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
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
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                href="https://twitter.com/ChenwiEugene"
                className={cx(
                  styles.footer__link,
                  'footer__links transition-colors'
                )}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a
                href="https://www.linkedin.com/in/chenwi-eugene-44b63412b/"
                className={cx(
                  styles.footer__link,
                  'footer__links transition-colors'
                )}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Flex>
          </Flex>
        </div>

        <div>
          <FooterForm />
        </div>
      </Flex>
      </div>
    
  )
}
export default Footer
