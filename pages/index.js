// Next image
import Img from 'next/image';


// Componnets
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import SkillsBtn from '../components/SkiilsBtn';
import Avatar from '../components/Avatar';


// Framer motion
import { motion } from 'framer-motion'

// Variants
import { fadeIn , staggerContainer  , containerRef ,container } from '../variants'

// Animte text
const leftText= ' Front - End '
const rightText= ' Developer '


const Home = () => {
  
  return <div className='h-full fixed w-full flex flex-row items-center justify-center '>
    <div className='grid grid-cols-2 grid-rows-1 gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-x-[450px] max-lg:hidden'>
      {/* container left */}
      <div className=" text-center flex flex-col justify-center ml-20 xl:pt-7 xl:text-left
      h-full  container mx-auto">
        {/* title */}
        <motion.h1
          variants={container}
          initial='hidden'
          animate='show'
          exit='hidden'>
            {leftText.split('').map((char, index) =>
            <motion.span className='text-amber-500 h1 '
              variants={staggerContainer} key={index}>
              {char}
            </motion.span>)}
        </motion.h1>
        {/* subtitle */}
        <motion.p
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className=' max-w-sm xl:max-w-xl xl:mx-0 mb-5 xl:whitespace' >
          Front-end development deals with the client-side and functionality 
          Creating and maintaining your UI/UX Implementing design changes
        </motion.p> 
        <motion.div variants={fadeIn('right', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className=" xl:flex">
          <ProjectsBtn />
        </motion.div>
      </div>
      {/* container right */}
      <div className=" text-center flex flex-col justify-center xl:pt-7 xl:text-left
      h-full  container ">
        {/* title */}
        <motion.h1
          variants={containerRef}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 xl:whitespace-pre-wrap'>
          {rightText.split('').map((char, index) =>
            <motion.span className='text-amber-500 h2 '
              variants={staggerContainer} key={index}>
              {char}
            </motion.span>)}
        </motion.h1>
        {/* subtitle */}
        <motion.p
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className=' max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 whitespace-break-spaces' >
          Recounting projects that employed a variety
          of technologies and frameworks to create like 
          (HTML, CSS, JavaScript, Node.js, and React.js)
        </motion.p> 
        <motion.p className=' max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 '
        variants={containerRef}
          initial='hidden'
          animate='show'
          exit='hidden'>
        </motion.p>
        <motion.div variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className=" xl:flex justify-center ml-20">
          <SkillsBtn/>
        </motion.div>
      </div>
    </div>
    <div className='w-full h-full absolute  -z-50 '>
      {/* Particles */}
      <ParticlesContainer/>
      {/* Avatar  Img*/}
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='  w-full  max-w-[737] max-h-[578] absolute  xl:bottom-[30px] xl:right-[-29%]   '>
        <Avatar />
      </motion.div>
    </div>
  </div>;
};


export default Home;
