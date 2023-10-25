import {motion} from 'framer-motion';


// Variants
const transitionVariants ={
  initial:{
    x: '100%',
    width: '100%',
  },
  animate:{
    x: '0%',
    width: '0%',
  },
  exit:{
    x: ['0%','100%'],
    width: ['0%','100%'],
  }
}

// bg-[#514390]
const Transition = () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30
      bg-[#2e2257]'
      variants={transitionVariants} 
      initial='initial' 
      animate='animate' 
      exit='exit' 
      transition={{deley: 0.2 , duration: 0.5, ease: 'easeInOut'}} >
      </motion.div>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20
      bg-[#3b2d71]' 
      variants={transitionVariants} 
      initial='initial' 
      animate='animate' 
      exit='exit' 
      transition={{deley: 0.4 , duration: 0.7, ease: 'easeInOut'}} >
      </motion.div>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10
      bg-[#514390]' 
      variants={transitionVariants} 
      initial='initial' 
      animate='animate' 
      exit='exit' 
      transition={{deley: 0.6 , duration: 0.9, ease: 'easeInOut'}} >
      </motion.div>
    </>
  );
};

export default Transition;
