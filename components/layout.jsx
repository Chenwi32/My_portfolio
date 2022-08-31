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
      
       <div className="layout_container flex_col">

     <Navigation />
       
      <div className="secondary_container ">{/* layout__content  */}
        <main className=" main__content_container mx-auto">
          {children}
        </main>
        <div className="sidebar__container">
          <aside className="asside justify-center flex">
          <h5>Advertisements</h5>
          </aside>
        </div>
        
      </div>

        
       <Footer />
      </div>

         
     
    </ThemeProvider>
  )
}

export default Layout
