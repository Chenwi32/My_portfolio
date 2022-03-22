import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import cx from 'classnames'
import EmblaCarousel from '../components/emblacarousel'

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="item-center flex-col text-center lg:-mx-4 lg:space-x-5 ">
        <div className="about-image_container mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            /* priority={true} */
            className={cx(styles.about_image, 'rounded-full')}
            id="profile"
            width={250}
            height={250}
          />
        </div>

        <div className=" lg:mt-10   lg:px-4">
          <h2 className={cx(styles.title, 'text-2xl lg:text-3xl')}>Chenwi Eugene</h2>
          <EmblaCarousel />
        </div>
      </div>
    </div>
  )
} /* dark:text-white font-bold */

export default HomePage
