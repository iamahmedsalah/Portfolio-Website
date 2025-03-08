// Next image

// Next links
import Link from 'next/link';


import {motion} from 'framer-motion';
// Components


// Animte text

const spanText = ' A S E '

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      staggerChildren: 0.2,
      delayChildren: 0.4,
      staggerDirection: 1,
    },
  },
}

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
              variants={spanVariants} key={index}>
              {char}
              <span className='hidden max-md:visible  '>
              </span>
            </motion.span>)}
        </motion.h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
