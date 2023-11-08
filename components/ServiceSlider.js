// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'The process of creating the brand identity of a company.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Create, fashion, execute, or construct according to plan.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'The active placement of a product or service and make it up to date.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Type of intellectual property that protects original works of authorship .',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'The process of making your site better for search engines.',
  },
];

// Swiper react conponents
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {FreeMode, Pagination} from 'swiper';

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView:1,
      spaceBetween:15,
    },
    640: {
      slidesPerView:3,
      spaceBetween:15,
    },
  }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[FreeMode,Pagination ]}
    className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item, index)=>{
          return <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex 
            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer  hover:bg-[rgba(89,65,169,0.15)]
            transition-all duration-300">
            {/* Icons */}  
            <div className="text-4xl text-amber-500 mb-4">{item.icon}</div>
             {/* title & desc */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title} </div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
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

export default ServiceSlider;
