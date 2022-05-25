import Navigation from './Navigation'
import Footer from './Footer'
/* import { createGlobalStyle } from 'styled-components' */
import { ThemeProvider } from 'next-themes'
import ChatBot from './ChatBot'

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

      <div className="layout_container flex flex-col">
       
      <div className="secondary_container  layout__content flex">
        <main className=" main__content_container container mx-auto">
          {children}
        </main>
        <div className="sidebar__container">
          <aside className="asside justify-center flex">
          <h5>Advertisements</h5>
          </aside>
          <ChatBot/>
        </div>
        
      </div>

        <div className="layout_footer_position">
          <Footer />
        </div>
      
      </div>
      
    </ThemeProvider>
  )
}

export default Layout
