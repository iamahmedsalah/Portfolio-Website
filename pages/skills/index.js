


// Icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobephotoshop,
  SiBootstrap,
  SiExpress,
  SiGithub,
  SiTailwindcss
} from "react-icons/si";


// Skills Data
const skillsData = [
  {
    icon: <FaHtml5/>,
    title: 'HTML',
    description: 'Tag:(nav, section, article, aside, footer, header, main)',
  },
  {
    icon: <FaCss3 />,
    title: 'CSS',
    description: 'CSS Grid, Flexbox, Media Queries, CSS Variables, CSS Animations',
  },
  {
    icon: <FaJs />,
    title: 'JavaScript',
    description: 'javascript ES6, DOM Manipulation, Fetch API, Async/Await, OOP',
  },
  {
    icon: <FaReact />,
    title: 'React',
    description: 'React Hooks, Context API, Redux, Statless Components, React Router',
  },
  {
    icon: <SiTailwindcss />,
    title: 'Tailwindcss',
    description: 'The process of making your site better for search engines.',
  },
  {
    icon: <FaNodeJs />,
    title: 'Node.js',
    description: 'Node.js is a JavaScript runtime built on Chrome V8 JavaScript engine.',
  },
  {
    icon: <SiExpress />,
    title: 'Express.js',
    description: 'Express is a minimal and flexible Node.js web application framework.',
  },
    {
    icon: <SiNextdotjs />,
    title: 'Next.js',
    description: 'Nextk.js is a React framework that enables functionality ',
  },
  {
    icon: <SiGithub />,
    title: 'GitHub',
    description: 'Github is a web-based platform used for version control.',
  },
  {
    icon: <SiFramer/>,
    title: 'Framer',
    description: 'Framer Motion is a production-ready motion library for React.',
  },
  ,
  {
    icon: <SiBootstrap/>,
    title: 'Bootstrap',
    description: 'Framer Motion is a production-ready motion library for React.',
  },
  
  
];
// Conponents;
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// Framer Motion
import { motion } from 'framer-motion';
import { fadeIn , staggerContainer  , containerRef ,container } from '../../variants'




const Skills = () => {
  return (
    <div className="py-10 flex items-center">
      <Circles />
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 '>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="h2 xl:mt-0">
              My  <span className="text-amber-500">Skills.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              Front-end Skills refer to the visual and interactive aspects of a website or app that users directly engage with.
            </motion.p>
          </div>
          <motion.div className='grid grid-cols-4 grid-rows-4 gap-4 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 max-md:text-xs'
          variants={containerRef}
          initial='hidden'
          animate='show'
          exit='hidden'>
          {skillsData.map((item, index)=>{
            return(
            <motion.div key={index} className="bg-amber-500/50 h-fit rounded-xl flex flex-col justify-center items-center p-4"
            whileHover={{ scale: 1.25,
              color: '#000',
              backgroundColor: '#fff',}}
            initial={{ scale: 1 }}
            transition={{ duration: 0.3 }}>
              
             {/* Icons */}  
            <div className="text-3xl text-amber-500 flex items-center max-md:text-xs">{item.icon}</div>
             {/* title & desc */}
            <div className="flex justify-center ">
              <div className="">{item.title} </div>
            </div>
            </motion.div>
            )
          })
            }
          </motion.div>
        </div>
        <Bulb/>
      </div>
    </div>
  );
};

export default Skills;
