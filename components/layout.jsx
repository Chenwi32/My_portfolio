import Navigation from './Navigation'
import Footer from './Footer'
import { Box, Container, Flex, useMediaQuery } from '@chakra-ui/react'

function Layout({ children }) {

  return (
    <Container maxW={'unset'} minW={'fit-content'} p={0} m={0}>
      
        <Navigation />

        {/* layout__content  */}
        <Box width={'100%'}>{children}</Box>
       
      <Footer />
    </Container>
  )
}

export default Layout
