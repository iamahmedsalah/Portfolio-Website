
import Img from 'next/image'

import { SiMongodb, SiHtml5, SiBootstrap, SiExpress, SiCss3, SiJavascript, SiNodedotjs ,SiFreelancer } from 'react-icons/si'
import { TbApi , TbBrandNextjs , TbBrandFramerMotion} from 'react-icons/tb'
import { SiTailwindcss } from "react-icons/si";
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Toy Toon E-Commerce',
          about: 'ISC Gradution Project',
          tech: [
            <SiHtml5 key='' />,
            <SiCss3 key='' />,
            <SiJavascript key='' />,
            <SiBootstrap key='' />,
            <SiMongodb key='' />,
            <SiExpress key='' />,
          ],
          path: '/graduation-project.png',
          url: 'https://toy-toon.onrender.com/',
          note: 'Note: This project first access may take a while due to the server is sleeping',
        }
      ],
    },
    {
      images: [
        {
          title: 'Weatherly',
          about: 'Weather simple website tracking my progress - Project fetch api',
          tech: [
            <SiJavascript key='' />,
            <TbBrandNextjs key=''/>,
            <SiTailwindcss  key='' />,
            <TbBrandFramerMotion key='' />,
            <TbApi key='' />,
        ],
          path: '/weatherly.png',
          url: 'https://weatherly-five-pi.vercel.app/'
        }
      ],
    },
    {
      images: [
        {
          title: 'Fhad Foil Factory',
          about: 'First Freelance Work',
          tech: [<SiFreelancer key='' />],
          path: '/fahd-freelance.png',
          url: 'https://www.fahdfoil.com/',
          note:'Note: This project is low-code project, I used Odoo to build it'
        }
      ],
    },
    ,
    {
      images: [
        {
          title: 'Weather Journal App',
          about: 'Egfwd Project - Udacity nanodagree',
          tech: [
          <SiHtml5 key='' />,
          <SiCss3 key='' />,
          <SiJavascript key='' />,
          <SiNodedotjs key='' />,
          <TbApi key='' />,],
          path: '/egfwd-project.png',
          url: 'https://iamahmedsalah.github.io/Weather-Journal-App/'
        }
      ],
    },
  ],
};



// Swiper react conponents
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';





const WorkSlider = () => {
  return <Swiper
    spaceBetween={5}
    pagination={{
      clickable: true
    }}
    modules={[Pagination]}
    className='h-[240px] sm:h-[340px]'
  >
    {workSlides.slides.map((slides, index) => {
      return (
        <SwiperSlide key={index}>
          <div>
            {slides.images.map((image, index) => {
              return <div className=' relative rounded-lg overflow-hidden flex items-center justify-center group '
                key={index}>
                <div className='flex justify-center'>
                  {/* images */}
                  <a href={image.url} target='_blank' >
                    <Img
                      src={image.path}
                      width={685}
                      height={200}
                      alt=''
                      priority='true'
                      className='rounded-3xl w-auto h-auto '
                    />
                    {/* overlay */}
                    <div className=' absolute inset-0 w-auto rounded-3xl bg-primary/90
                    opacity-0 group-hover:opacity-50 transition-all duration-300'></div>
                  </a>
                  {/* title */}
                  <div className=' absolute bottom-0 translate-y-full 
                    group-hover:-translate-y-10 group-hover:xl:-translate-y-[140px] transition-all duration-300  text-[30px] font-mono '>
                    <div className=' flex items-center justify-center  delay-100 text-amber-500'>
                      {image.title}
                    </div>
                    <h1 className='flex items-center justify-center text-center space-x-[15px] space-2.5'> {image.tech}</h1>
                    <h6 className='text-sm text-center mt-2  '>{image.about}</h6>
                    <p className='text-sm text-center mt-2'>{image.note} </p>
                  </div>
                </div>
              </div>
            })}
          </div>
        </SwiperSlide>
      )
    })
    }
  </Swiper>
};

export default WorkSlider;
