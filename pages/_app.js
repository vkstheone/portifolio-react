import '../styles/globals.css';

// components
import Layout from '../components/Layout';
import Transition from '../components/Transition'


import { useRouter } from 'next/router';



import { AnimatePresence, motion} from 'framer-motion'
import Home from '../components/home';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
 
  return(
  
    
    <Layout>
      <Home />
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps}/>
          </motion.div>  
        </AnimatePresence>
          
    </Layout>
  
  )
}

export default MyApp;
