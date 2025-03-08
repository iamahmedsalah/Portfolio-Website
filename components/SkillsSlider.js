// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


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
    title: 'Git Hub',
    description: 'Github is a web-based platform used for version control.',
  },
  {
    icon: <SiFramer />,
    title: 'Framer',
    description: 'Framer Motion is a production-ready motion library for React.',
  },
];

// Swiper react conponents
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {FreeMode, Pagination} from 'swiper';

const SkillsSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView:2,
      spaceBetween:15,
    },
    640: {
      slidesPerView:4,
      spaceBetween:15,
    },
  }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[FreeMode,Pagination ]}
    className='h-full max-sm:h-[140px] max-lg:w-full'
    >
      {
        skillsData.map((item, index)=>{
          return <SwiperSlide key={index}>
            <div className="bg-amber-500/50 h-fit rounded-bl-3xl rounded-tr-3xl px-6 py-8 flex 
            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer  hover:bg-secondary/30 
            transition-all duration-300">
            {/* Icons */}  
            <div className="text-4xl text-amber-500 mb-4">{item.icon}</div>
             {/* title & desc */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title} </div>
            </div>
            {/* arrow */}
            <div className="text-3xl"><RxArrowTopRight className=" group-hover:rotate-45 group-hover:text-amber-500
            transition-all duration-300  "/></div>
            </div>
          </SwiperSlide>
        })
      }
  </Swiper>
};

export default SkillsSlider;
