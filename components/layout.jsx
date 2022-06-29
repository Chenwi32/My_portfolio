import Navigation from './Navigation'
import Footer from './Footer'
import { ThemeProvider } from 'next-themes'
import ChatBot from './ChatBot'


function Layout({ children }) {


  return (
    <ThemeProvider
      themes={['light', 'dark']}
      attribute="class"
      enableSystem={false}
    >
      
       <div className="layout_container">

     <Navigation />
       
      <div className="secondary_container  layout__content flex">
        <main className=" main__content_container  mx-auto">
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
