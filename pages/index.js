// Next image
import Img from 'next/image';


// Componnets
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';


// Framer motion
import { motion } from 'framer-motion'

// Variants
import { fadeIn } from '../variants'

// Animte text

const spanText = 'UI & UX designs come to life. '

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





const Home = () => {
  
  return <div className='h-full fixed w-full flex flex-col items-center justify-center '>
    <div className='h-full w-full items-center justify-center '>
      {/* text */}
      <div className=" text-center flex flex-col justify-center xl:pt-7 xl:text-left
      h-full  container mx-auto">
        {/* title */}
        <motion.h1
          variants={container}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2  xl:whitespace-pre-wrap'>Front End                              Developer <br />
            {spanText.split('').map((char, index) =>
            <motion.span className='text-amber-500 text-2xl '
              variants={spanVariants} key={index}>
              {char}
            </motion.span>)}
          {/* <span className='text-amber-500'> Digital Reality </span> */}
        </motion.h1>
        {/* subtitle */}
        <motion.p
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className=' max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 xl:whitespace-pre' >
          Recounting projects that employed a variety
          <br />
          (HTML, CSS, JavaScript, Node.js, and React.js)
        </motion.p> 
        {/* project btn */}
        {/* <div className=' flex justify-center xl:hidden absloute '>
          <ProjectsBtn />
        </div> */}
        <motion.div variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className=" hidden xl:flex ">
          <ProjectsBtn />
        </motion.div>
      </div>
    </div>
    <div>
    </div>
    <div className='w-full h-full absolute  -z-50 '>
      {/* Particles */}
      <ParticlesContainer />
      {/* Avatar  Img*/}
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='  w-full  max-w-[737] max-h-[578] absolute -bottom-10 lg:bottom-44 lg:right-[25%]   '>
        <Avatar />
      </motion.div>
    </div>
  </div>;
};


export default Home;
