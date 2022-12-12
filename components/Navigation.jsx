import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import styles from './styles/Navigation.module.css'
import cx from 'classnames'
import { Button, Container, Flex, useMediaQuery } from '@chakra-ui/react'

/* lg:max-w-4xl px-4*/

const Navigation = () => {
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)')

  return (
    <Container
      maxW={1200}
      width={isLargerThan1200 ? '100%' : '95%'}
      className={styles.nav}
      p={isLargerThan700 ? 3 : 1}
      mt={2}
      mb={10}
      borderRadius={'lg'}
      position={'sticky'}
      top={0}
      zIndex={1}
    >
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <Link href="/">
          <a>
            <Image
              src="/images/logo.png"
              alt="eugenen's logo"
              priority={true}
              className={styles.logo}
              id="profile"
              width={100}
              height={60}
            />
          </a>
        </Link>

        <Flex alignItems={'center'}>
          <Flex
            gap={isLargerThan700 ? 5 : 2}
            alignItems={'center'}
            fontSize={isLargerThan700 ? 'inherit' : '.7rem'}
          >
            <Link href={'/'}>
              <a>Home</a>
            </Link>

            <Link href={'/aboutme'}>
              <a>About</a>
            </Link>

            <Link href={'/projects'}>
              <a>Projects</a>
            </Link>

            <Link href={'/blog'}>
              <a>Blog</a>
            </Link>

            <Link href="#contact">
              <Button
                bg={'brand.100'}
                color={'brand.300'}
                _hover={{
                  bg: 'brand.200',
                  color: 'brand.100',
                }}
                p={isLargerThan700 ? 3 : 2}
              >
                Contact
              </Button>
            </Link>
          </Flex>

          <div className={cx(styles.hover__message, styles.tooltip)}>
            <ThemeSwitch />
            <span className={styles.tooltiptext}>
              Dark mode hasn't been fully implemented, I'm still working on it!!
            </span>
          </div>
        </Flex>
      </Flex>
    </Container>
  )
}

export default Navigation
