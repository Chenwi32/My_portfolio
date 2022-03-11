import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class" enableSystem={false}>
        {/* attribute=class is to enable dark and light mode manually. I have disabled system preference by enableSystem=false */}

        <Navigation />

        {<Component {...pageProps} />}

        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp
