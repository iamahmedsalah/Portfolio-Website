
import "../styles/globals.css";

// import the Head component 
import Head from "next/head";



// router
import {useRouter} from 'next/router';

// framer motion
import {AnimatePresence, motion} from 'framer-motion';

// Components
import Layout from '../components/Layout';
import Preloader from '../components/Preloader';
import { useState , useEffect } from 'react';

// Metadata
export const metadata = {
  title: "A-S-E",
  description: `A front-end developer is a type of software developer who creates the user-facing side of websites and applications.
  Front-end developers use HTML, CSS, JavaScript, and other technologies to code the appearance and interactive features of web content.`,
  image: "",
  url: "",
  type: "website",
  siteName: "A-S-E",
};



function MyApp({ Component, pageProps }) {

  const router = useRouter();



  return(

    <Layout>
      {/* Add the favicon */}
      <Head>
        <link rel='favicon' href='/favicon.ico' />
        <meta name="theme-color" content="#731e1c" />
        <title>{metadata.title}</title>
        <meta name="theme-color" content="#731e1c" />
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:site_name" content={metadata.siteName} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
      </Head>
          <motion.div key={router.route} className='h-full'>
            <Component {...pageProps} />
          </motion.div>
    </Layout>
  );
}


export default MyApp;
