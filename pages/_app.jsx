import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import '../styles/project.css'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {<Component {...pageProps} />}
    </ Layout>
  )
}

export default MyApp
