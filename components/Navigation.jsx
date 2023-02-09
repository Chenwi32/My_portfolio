import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import styles from './styles/Navigation.module.css'
import cx from 'classnames'
import {
  Button,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  useMediaQuery,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,} from '@fortawesome/free-solid-svg-icons'

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
          <Image
            src="/images/logo.png"
            alt="eugenen's logo"
            priority={true}
            className={styles.logo}
            id="profile"
            width={100}
            height={60}
          />
        </Link>

        <Flex alignItems={'center'}>
          <Flex
            gap={isLargerThan700 ? 5 : 2}
            alignItems={'center'}
            fontSize={isLargerThan700 ? 'inherit' : '0.7rem'}
            display={isLargerThan700 ? 'flex' : 'none'}
          >
            <Link href={'/'}>Home</Link>

            <Link href={'/aboutme'}>About</Link>

            <Link href={'/projects'}>Projects</Link>

            <Link href={'/blog'}>Blog</Link>

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

          <Menu>
            <MenuButton
              display={isLargerThan700 ? 'none' : 'block'}
              as={Button}
              bg={'inherit'}
              color="brand.500"
              _hover={{
                bg: '',
              }}
              _active={{
                bg: '',
              }}
              fontSize="2xl"
            >
              <FontAwesomeIcon icon={faBars} />
            </MenuButton>

            <MenuList p={5} minW={'97vw'} minH="80vh" boxShadow={'xl'} mr={3}>
              <MenuGroup title="Menu">
                <Link href={'/'}>
                  <MenuItem
                    _hover={{
                      bg: 'inherit',
                    }}
                  >
                    Home
                  </MenuItem>
                </Link>

                <Link href={'/aboutme'}>
                  <MenuItem
                    _hover={{
                      bg: 'inherit',
                    }}
                  >
                    About
                  </MenuItem>
                </Link>

                <Link href={'/projects'}>
                  <MenuItem
                    _hover={{
                      bg: 'inherit',
                    }}
                  >
                    Projects
                  </MenuItem>
                </Link>

                <Link href={'/blog'}>
                  <MenuItem
                    _hover={{
                      bg: 'inherit',
                    }}
                  >
                    Blog
                  </MenuItem>
                </Link>

                <Link href="#contact">
                  <MenuItem
                    _hover={{
                      bg: 'inherit',
                    }}
                  >
                    Contact
                  </MenuItem>
                </Link>
              </MenuGroup>
            </MenuList>
          </Menu>

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

