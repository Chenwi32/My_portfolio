import Navigation from './Navigation'
import Footer from './Footer'
import { ThemeProvider } from 'next-themes'

function Layout({ children }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
