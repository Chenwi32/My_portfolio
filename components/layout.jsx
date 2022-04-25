import Navigation from './Navigation'
import Footer from './Footer'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'next-themes'

// Your themeing variables
const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #000;
    --bg: #fff;
  }

  [data-theme="dark"] {
    --fg: #fff;
    --bg: #000;
  }`
function Layout({ children }) {
  return (
    <ThemeProvider
      themes={['pink', 'red', 'blue', 'light', 'dark']}
      attribute="class"
      enableSystem={false}
    >
      <Navigation />
      <main className="main-container container mx-auto">{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
