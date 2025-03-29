// Next image

// Next links
import Link from 'next/link';


import {motion} from 'framer-motion';
// Components

import { staggerContainer  ,container } from '../variants'
// Animte text

const spanText = ' A S E '

const spanVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

const Text =' Front - End  Developer'



const Header = () => {
  return (
    <header className=" absolute z-10 w-full flex items-center px-16 xl:px-0 xl:h-[140px] max-md:h-[100px]">
      <div className=" container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-2
        py-8' >
          {/* logo */}
          <Link href={'/'} className='w-auto h-auto opacity-70 hover:opacity-100 transition-opacity duration-300 '>
          <motion.h1
          variants={container}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h1 '>
            {spanText.split('').map((char, index) =>
            <motion.span className='text-amber-500 '
              variants={staggerContainer} key={index}>
              {char}
              <span className='hidden max-md:visible  '>
              </span>
            </motion.span>)}
        </motion.h1>
          </Link>
                  <motion.h1
                    variants={container}
                    initial='hidden'
                    animate='show'
                    exit='hidden'>
                      {Text.split('').map((char, index) =>
                      <motion.span className='text-amber-500 h1 '
                        variants={staggerContainer} key={index}>
                        {char}
                      </motion.span>)}
                  </motion.h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
