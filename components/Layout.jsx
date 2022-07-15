import Head from "next/head";
import Navbar from './Navbar';
import Footer from './Footer';
  {/*This head is same as head tag in html which has meta data about website */}


const Layout = ({children}) => {
  //children prop here gives the current page component
  return (
    <div className='layout'>
      <Head>
        <title>Raiqa Rasool Store</title>
      </Head>
      <header>
        <Navbar/>        
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout