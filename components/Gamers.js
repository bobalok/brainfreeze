// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import GamersBG from "../public/images/gamer-bg.png";
import hbomax from "../public/images/hbomax-bg.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import "../styles/swiper.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, EffectFade]);

export default function Gamers() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 pb-16 sm:px-6 lg:px-8 grid grid-cols-1">
        <div className="">
          <h1 className="text-3xl sm:text-5xl text-white font-extrabold py-20">
            Ultimate gaming experience
          </h1>
        </div>

        <div className="md:h-96 h-64">
          <Swiper
            effect={"fade"}
            spaceBetween={30}
            pagination={false}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            className="mySwiper rounded-lg"
          >
            <SwiperSlide className="text-gray-800">
              <Image
                className="rounded-lg"
                src={GamersBG}
                alt="Gamars"
                // width="850"
                // height="478.125"
                layout="fill"
                objectFit="cover"
                // blurDataURL="data:" //automatically provided
                placeholder="blur"
                quality="100"
                // priority />
              />
            </SwiperSlide>

            {/* <SwiperSlide className="text-gray-800">Slide 6</SwiperSlide>
        <SwiperSlide className="text-gray-800">Slide 7</SwiperSlide>
        <SwiperSlide className="text-gray-800">Slide 8</SwiperSlide>
        <SwiperSlide className="text-gray-800">Slide 9</SwiperSlide> */}
          </Swiper>
        </div>
      </section>
    </>
  );
}
