import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import styles from './styles/Navigation.module.css'
import cx from 'classnames'

/* lg:max-w-4xl px-4*/

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 bg-white py-2 dark:bg-black md:mb-6 md:py-6">
      <div className="container mx-auto flex items-center justify-between  ">
        <Link href="/">
          <a
            className={
              'font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white'
            }
          >
            <Image
              src="/images/logo.png"
              alt="Profile"
              priority={true}
              className={styles.logo}
              id="profile"
              width={100}
              height={60}
            />
          </a>
        </Link>

        <div className="nav_right flex items-center justify-between">
          <ul className="flex items-center">
            <li className={styles.list_item}>
              <span className={styles.link_container}>
                <Link href={'/'}>Home</Link>
              </span>
            </li>

            <li className={styles.list_item}>
              <span className={styles.link_container}>
                <Link href={'/about'}>About</Link>
              </span>
            </li>

            <li className={styles.list_item}>
              <span className={styles.link_container}>
                <Link href={'/projects'}>Projects</Link>
              </span>
            </li>

            <li className={styles.list_item}>
              <span className={styles.link_container}>
                <Link href={'/resume'}>Resume</Link>
              </span>
            </li>

            <li className={styles.list_item}>
              <span className={styles.link_container}>
                <Link href={'/blog'}>Blog</Link>
              </span>
            </li>

            <li className={cx('btn')}>
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}

export default Navigation
