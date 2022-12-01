import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import '../styles/project.css'
import Layout from '../components/layout'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      100: ' #05bd33',
      200: '#000',
      300: '#fff',
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (

    <ChakraProvider theme={theme} >
       <Layout>
      {<Component {...pageProps} />}
    </ Layout>
    </ChakraProvider>
   
  )
}

export default MyApp
