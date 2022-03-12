import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import cx from 'classnames'
const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="lg:mt-12 lg:px-4 ">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Hey there,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
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
      </div>
    </div>
  )
}

export default About
