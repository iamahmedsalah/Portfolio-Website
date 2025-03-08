import Link from "next/link";

// Icons
import { RiInstagramLine } from "react-icons/ri";
import { TbBrandHackerrank } from "react-icons/tb";
import { FiLinkedin, FiGithub, FiFacebook } from "react-icons/fi";

import {motion} from 'framer-motion';

const firVaraints = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const secVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

const Socials = () => {
  return (
    <motion.div className="relative  flex items-center gap-x-5 text-lg  dark:text-gray-50 z-50">  
      <div
        className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max 
  bottom-0 mt-auto  xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen "
      >
        {/* inner */}
        <motion.div
          variants={firVaraints}
          initial="hidden"
          animate="show"
          className="flex items-center  w-full xl:flex-col  justify-between xl:justfiy-center gap-y-10 px-4 bg-secondary/30  shadow-2xl outline outline-amber-600 
            md:px-40 xl:px-0 h-[80px] xl:h-max py-8  text-3xl xl:text-xl xl:rounded-full "
        >
          <motion.ul className="flex items-center gap-x-5 xl:flex-col xl:gap-y-5">
            <motion.li variants={secVariants}>
              {" "}
              <Link
                href={"https://www.facebook.com/iamahmedsoliman/"}
                className="w-5 text-2xl hover:text-sky-700 "
              >
                <FiFacebook  className="hover:scale-125 duration-200" />
              </Link>
            </motion.li>
            <motion.li variants={secVariants}>
              {" "}
              <Link
                href={""}
                className="w-5 text-2xl hover:text-pink-500 "
              >
                <RiInstagramLine  className="hover:scale-125 duration-200" />
              </Link>
            </motion.li>
            <motion.li variants={secVariants}>
              <Link
                href={""}
                className="w-5 text-2xl hover:text-green-700 "
              >
                <TbBrandHackerrank  className="hover:scale-125 duration-200" />
              </Link>
            </motion.li>
            <motion.li variants={secVariants}>
              {" "}
              <Link
                href={"https://github.com/iamahmedsalah"}
                className="w-5 text-2xl hover:text-slate-500 "
              >
                <FiGithub className="hover:scale-125 duration-200" />
              </Link>
            </motion.li>
            <motion.li variants={secVariants}>
              {" "}
              <Link
                href={"https://www.linkedin.com/in/iamahmedsoliman/"}
                className="w-5 text-2xl hover:text-sky-700 "
              >
                <FiLinkedin  className="hover:scale-125 duration-200" />
              </Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
              {/* dark light mode
              <label className="inline-flex items-center relative">
          <input className="peer hidden" id="toggle" type="checkbox" />
          <div className="relative w-[110px] h-[50px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
          <svg
            height="0"
            width="100"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px]"
          >
            <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
          </svg>
          <svg
            height="512"
            width="512"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px]"
          >
            <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
          </svg>
        </label> */}
    </motion.div>
  );
};

export default Socials;
