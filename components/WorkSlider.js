import Img from "next/image";

import {
  SiMongodb,
  SiHtml5,
  SiBootstrap,
  SiExpress,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiVite,
  SiTailwindcss,
  SiDaisyui,
} from "react-icons/si";
import { TbApi, TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Toy Toon E-Commerce",
          about: "MIS Gradution Project",
          tech: [
            <SiHtml5 key="1" />,
            <SiCss3 key="2" />,
            <SiJavascript key="3" />,
            <SiBootstrap key="4" />,
            <SiMongodb key="5" />,
            <SiExpress key="6" />,
          ],
          path: "/graduation-project.png",
          url: "https://toy-toon.onrender.com/",
          note: "Note: This project first access may take a while due to the server is sleeping",
        },
      ],
    },
    {
      images: [
        {
          title: "Weatherly",
          about:
            "Weather simple website tracking my progress - Project fetch api",
          tech: [
            <SiJavascript key="7" />,
            <TbBrandNextjs key="8" />,
            <SiTailwindcss key="9" />,
            <TbBrandFramerMotion key="10" />,
            <TbApi key="11" />,
          ],
          path: "/weatherly.png",
          url: "https://weatherly-five-pi.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "MERN-AUTH",
          about:
            "AUTH App a full MERN project for user authentication,authorization ",
          tech: [
            <FaReact key="7" />,
            <SiVite key="8" />,
            <SiTailwindcss key="9" />,
            <TbBrandFramerMotion key="10" />,
            <FaNodeJs key="12" />,
            <TbApi key="11" />,
          ],
          path: "/auth-shot.png",
          url: "https://auth-mern-gilt.vercel.app/login/",
        },
      ],
    },
    {
      images: [
        {
          title: "Dashborad UI",
          about:
            "Front End Project for admin panel UI",
          tech: [
            <FaReact key="7" />,
            <SiVite key="8" />,
            <SiTailwindcss key="9" />,
            <TbBrandFramerMotion key="10" />,
            <SiDaisyui  key="12" />,
            <TbApi key="11" />,
          ],
          path: "/dashborad-shot.png",
          url: "https://dashborad-front-end.vercel.app/",
        },
      ],
    },
    ,
    {
      images: [
        {
          title: "Weather Journal App",
          about: "Egfwd Project - Udacity nanodagree",
          tech: [
            <SiHtml5 key="13" />,
            <SiCss3 key="14" />,
            <SiJavascript key="15" />,
            <SiNodedotjs key="16" />,
            <TbApi key="17" />,
          ],
          path: "/egfwd-project.png",
          url: "https://iamahmedsalah.github.io/Weather-Journal-App/",
        },
      ],
    },
  ],
};

// Swiper react conponents
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={5}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {workSlides.slides.map((slides, index) => {
        return (
          <SwiperSlide key={index}>
            <div>
              {slides.images.map((image, index) => {
                return (
                  <div
                    className=" relative rounded-lg overflow-hidden flex items-center justify-center group "
                    key={index}
                  >
                    <div className="flex justify-center ">
                      {/* images */}
                      <Link href={image.url} target="_blank">
                        <Img
                          src={image.path}
                          width={685}
                          height={200}
                          alt=""
                          key={index}
                          priority="true"
                          className="rounded-3xl w-auto h-auto "
                        />
                        {/* overlay */}
                        <div
                          className=" absolute inset-0 w-auto rounded-3xl bg-primary/50 
                    opacity-0 group-hover:opacity-75 transition-all duration-300"
                        >
                          {/* title */}
                          <div
                            className="absolute inset-0 flex flex-col items-center justify-center
                          bg-primary/50 transition-all duration-300 rounded-3xl"
                          >
                            <div className=" flex items-center justify-center delay-100 text-amber-500 font-ubuntu font-semibold text-2xl">
                              {image.title}
                            </div>
                            <h1 className="text-center py-1">
                              {image.about}
                            </h1>
                            <h1 className="flex items-center justify-center text-center space-x-[15px] space-2.5  text-lg">
                              {" "}
                              {image.tech}
                            </h1>
                            <p className="text-xs text-center mt-2">
                              {image.note}{" "}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
