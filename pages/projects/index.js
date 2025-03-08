



// Conponents
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// Framer Motion
import {motion} from 'framer-motion';
import {fadeIn }from '../../variants';


const Work = () => {
  return (
    <div className="h-[80vh] py-36 flex items-center">
      <Circles />
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-center mb-4 xl:mb-0 lg: mt-12'>
            <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2 xl:mt-0">
              My <span className="text-amber-500">Project.</span>
            </motion.h2>
            <motion.p 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mb-4 max-w-[400px] mx-auto lg:text-center'>
              Front end developer duties include determining the structure and design of web pages, 
              some of my projects are listed in the next slider
            </motion.p>
          </div>
          <motion.div 
          variants={fadeIn('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className=' w-full xl:max-w-[65%]'>
          {/* slider */}
          <WorkSlider/>
          </motion.div>
        </div>
        <Bulb />
      </div>
    </div>
  );
};

export default Work;
