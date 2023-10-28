
import Img from'next/image'



// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'MIS Gradution Project',
          path: '/thumb1.png',
          url:'https://toy-toon.onrender.com/'
        }
      ],
    },
    {
      images: [
        {
          title: 'Weather Journal App',
          path: '/thumb3.png',
          url:'https://iamahmedsalah.github.io/Weather-Journal-App/'
        }
      ],
      
    },
    {
      images: [
        {
          title: 'Fhad Foil Factory',
          path: '/thumb2.png',
          url:'https://www.fahdfoil.com/',
        }
      ],
    },
  ],
};



// Swiper react conponents
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {Pagination} from 'swiper';


import {BsArrowRight} from 'react-icons/bs'


const WorkSlider = () => {
  return <Swiper 
    spaceBetween={5}
    pagination={{
      clickable: true
    }}
    modules={[Pagination]}
    className='h-[240px] sm:h-[340px]'
    >
      {workSlides.slides.map((slides, index)=>{
          return  (
          <SwiperSlide key={index}>
            <div>
              {slides.images.map((image, index)=>{
                return <div  className=' relative rounded-lg overflow-hidden flex items-center justify-center group '
                key={index}>
                  <div className='flex justify-center'>
                    {/* images */} 
                    <a href={image.url}  target='_blank' >
                    <Img 
                    src={image.path} 
                    width={685} 
                    height={200}
                    alt=''
                    priority='true'
                    className='rounded-3xl w-auto h-auto '
                    />
                    {/* overlay */}
                    <div className=' absolute inset-0 w-auto rounded-3xl  bg-gradient-to-l  ml-1 
                    from-transparent via-[#f19524] to-[#d2d0bf]
                    opacity-0 group-hover:opacity-50 transition-all duration-300'></div>
                    </a>
                    {/* title */}
                    <div className=' absolute bottom-0 translate-y-full 
                    group-hover:-translate-y-10 group-hover:xl:-translate-y-[140px] transition-all duration-300  text-[30px] font-mono '>
                      <div className=' flex items-center delay-100'>
                      {image.title}
                      </div>
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
