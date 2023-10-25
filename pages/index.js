// Next image
import Img from 'next/image';


// Componnets
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';


// Framer motion
import {motion} from 'framer-motion'

// Variants
import {fadeIn} from'../variants'


const Home = () => {
  return <div className=' bg-primary/60 h-full'>
    {/* text */}
    <div className=' w-full h-full bg-gradient-to-r from-primary/10 via-black/30
    to-black/10'>
      <div className=" text-center flex flex-col justify-center xl:pt-40 xl:text-left
      h-full  container mx-auto">
        {/* title */}
        <motion.h1 variants={fadeIn('down',0.3)} 
        initial='hidden'  
        animate='show' 
        exit='hidden'
        className='h1'> Transforming Ideas <br/> into 
        <span className='text-amber-500'> Digital Reality </span>
        </motion.h1>
        {/* subtitle */}
        <motion.p 
        variants={fadeIn('down',0.3)} 
        initial='hidden'  
        animate='show' 
        exit='hidden'
        className=' max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5'>
        In publishing and graphic design,placeholder text commonly used to
        demonstrate the visual form of a document or a typeface without relying on meaningful content.
        </motion.p>
        {/* project btn */}
        <div className=' flex justify-center xl:hidden relative'>
          <ProjectsBtn/>
        </div>
        <motion.div variants={fadeIn('down',0.4)} 
        initial='hidden'  
        animate='show' 
        exit='hidden'
        className=" hidden xl:flex"> 
          <ProjectsBtn/>
        </motion.div>
      </div>
    </div>
    <div>
      {/* image */}
    </div>
    <div className='w-[1200px] h-full absolute right-0 bottom-0 '> 

    {/* Particles */}
    {/* <ParticlesContainer/> */}
    {/* Avatar  Img*/}
    <motion.div
    variants={fadeIn('up',0.4)} 
    initial='hidden'  
    animate='show' 
    exit='hidden'
    transition={{duration: 1, ease: 'easeInOut'}}
    className=' w-full h-full max-w-[737] max-h-[678] absolute -bottom-20
    lg:bottom-0 lg:left-[35%]'>
      <Avatar/>
    </motion.div>
    </div>
  </div>;
};

export default Home;
