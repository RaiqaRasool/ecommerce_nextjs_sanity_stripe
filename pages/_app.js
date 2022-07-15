import '../styles/globals.css';
import { Layout } from '../components';
import StateContext from '../context/StateContext';
import {Toaster} from 'react-hot-toast';
function MyApp({ Component, pageProps }) {
  /*Component here means the component on which we are 
    currently if we are on homepage component then it will 
    be homepage and if on product page then it will be 
    productpage component*/
  return (
    <StateContext>
    <Toaster/>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </StateContext>
)
}

export default MyApp
