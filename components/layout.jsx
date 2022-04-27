import Navigation from './Navigation'
import Footer from './Footer'
/* import { createGlobalStyle } from 'styled-components' */
import { ThemeProvider } from 'next-themes'

/* // Your themeing variables
const GlobalStyle = createGlobalStyle`
  :root {
    --fg: #000;
    --bg: #fff;
  }

  [data-theme="dark"] {
    --fg: #fff;
    --bg: #000;
  }` */
function Layout({ children }) {
  return (
    <ThemeProvider
      themes={['light', 'dark']}
      attribute="class"
      enableSystem={false}
    >
      <Navigation />
      <div className='secondary_container  flex layout__content'>
        <main className=" main__content_container container mx-auto">
          {children}
        </main>
        <aside className="asside">
          <h5>Advertisements</h5>
        </aside>
      </div>

      <Footer />
    </ThemeProvider>
  )
}

export default Layout
