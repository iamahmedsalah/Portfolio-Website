
import Img from'next/image'



// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
          url:'http://localhost:3000/'
        }
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          url:''
        }
      ],
      
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        }
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        }
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
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
                return <div  className=' relative rounded-lg overflow-hidden flex items-center justify-center group'
                key={index}>
                  <div className=''>
                    {/* images */} 
                    <a href={image.url} >
                    <Img 
                    src={image.path} 
                    width={605} 
                    height={200}
                    alt=''
                    priority='true'
                    className='rounded-3xl'
                    />
                    </a>
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
