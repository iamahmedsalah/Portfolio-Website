import '../styles/globals.css';

// import the Head component 
import Head from "next/head";



// router
import {useRouter} from 'next/router';

// framer motion
import {AnimatePresence, motion} from 'framer-motion';

// Components
import Layout from '../components/Layout';
import Transition from '../components/Transition';


function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return(

    <Layout>
      {/* Add the favicon */}
      <Head>
        <link rel='favicon' href='/favicon.ico' />
      </Head>
      <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition/>
            <Component {...pageProps} />
          </motion.div>
      </AnimatePresence>
    </Layout>
  );
}


export default MyApp;
