import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import cx from 'classnames'
import EmblaCarousel from '../components/emblacarousel'
import { Container } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Container  maxW={'unset'} minW={'fit-content'} w={'100%'} mb={10}>
      <div className="home__page item-center flex-col text-center lg:-mx-4  lg:space-x-5">
        <div className={cx(styles.about_image_container, 'flex-shrink-0  ')}>
          <div
           
            className={styles.image}
            
          >
            
          </div>
        </div>

        <div className=" lg:mt-10   lg:px-4">
          <h2 className={cx(styles.title, 'text-2xl lg:text-3xl')}>
            Chenwi Eugene
          </h2>
          <EmblaCarousel />
        </div>
      </div>
    </Container>
  )
} 

export default HomePage
