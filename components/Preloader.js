import {motion} from 'framer-motion';


// Variants
import { fadeIn } from '../variants'

// bg-[#514390]
import Image from "next/image";
import Logo from "../public/Binance-Coin-Crypto.png";

const Preloader= () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen 
      bg-accent'
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      animate='show'
      exit='hidden'
      transition={{delay:0.4, duration: 2, ease: 'easeInOut' }} >
        <Image priority={true}  className="animate-spin" src={Logo} alt="logo" width={50} height={50} />
      </motion.div>
    </>
  );
};

export default Preloader;
