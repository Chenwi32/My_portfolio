import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import Layout from '../components/layout'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import '@fortawesome/fontawesome-svg-core/styles.css' //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

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
    <ChakraProvider theme={theme}>
      <Layout>{<Component {...pageProps} />}</Layout>
    </ChakraProvider>
  )
}

export default MyApp
