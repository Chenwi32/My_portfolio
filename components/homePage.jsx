import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import cx from 'classnames'
import EmblaCarousel from '../components/emblacarousel'

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="about-image_container mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
          <Image
            src="/images/profile_pic.jpeg"
            alt="Profile"
            /* priority={true} */
            className={cx(styles.about_image, 'rounded-full')}
            id="profile"
            width={250}
            height={250}
          />
        </div>

        <div className="lg:mt-12 lg:px-4 ">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Chenwi Eugene
          </h1>
          <EmblaCarousel />
        </div>
      </div>
    </div>
  )
}

export default HomePage
