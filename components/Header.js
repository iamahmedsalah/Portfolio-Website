// Next image
import Img from 'next/image';
// Next links
import Link from 'next/link';


import { motion } from 'framer-motion';
// Components

import { staggerContainer, container, fadeIn } from '../variants'
// Animte text

const spanText = ' A S E '
const Text = ' Front - End  Developer'



const Header = () => {
  return (
    <header className="top-7 z-20 absolute w-full flex items-center justify-center">
      <div className=" container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-2 text-center
        py-8' >
          {/* logo */}
          <Link href={'/'} className='w-auto h-auto opacity-70 hover:opacity-100 transition-opacity duration-300 '>
            <motion.h1
              variants={container}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h1 text-amber-500'>
              {spanText.split('').map((char, index) =>
                <motion.span 
                  variants={staggerContainer} key={index}>
                  {char}
                </motion.span>)}
            </motion.h1>
          </Link>
          <motion.h1
            variants={container}
            initial='hidden'
            animate='show'
            exit='hidden'>
            {Text.split('').map((char, index) =>
              <motion.span className='text-2xl'
                variants={staggerContainer} key={index}>
                {char}
              </motion.span>)}
          </motion.h1>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'>
            <Img  src='/Binance-Coin-Crypto.png' priority={true}  width={100} height={100} alt='top img' className=' animate-spin-slow'/>
          </motion.div>
          <motion.p
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden' >
          Front-end development deals with the client-side and functionality 
        </motion.p> 
        </div>
      </div>
    </header>
  );
};

export default Header;
