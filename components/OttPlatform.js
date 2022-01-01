import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import appletv from "../public/images/appletvPlus.png";
import amazonPrime from "../public/images/amazonPrime.jpg";
import netflix from "../public/images/netflix.jpg";
import hulu from "../public/images/hulu.png";
import disneyPlus from "../public/images/disneyPlus.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "../styles/swiper.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

function OttPlatform() {
  return (
    <>
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide className="text-gray-800">
          <Image
            className="rounded-lg"
            src={appletv}
            alt="appletv+"
            // width="850"
            // height="478.125"
            layout="fill"
            objectFit="cover"
            // blurDataURL="data:" //automatically provided
            placeholder="blur"
            // quality="100"
            // priority />
          />
        </SwiperSlide>
        <SwiperSlide className="text-gray-800">
          <Image
            className="rounded-lg"
            src={netflix}
            alt="Netflix"
            // width="850"
            // height="478.125"
            layout="fill"
            objectFit="cover"
            // blurDataURL="data:" //automatically provided
            placeholder="blur"
            // quality="100"
            // priority />
          />
        </SwiperSlide>
        <SwiperSlide className="text-gray-800">
          <Image
            className="rounded-lg"
            src={disneyPlus}
            alt="Disney+"
            // width="850"
            // height="478.125"
            layout="fill"
            objectFit="cover"
            // blurDataURL="data:" //automatically provided
            placeholder="blur"
            // quality="100"
            // priority />
          />
        </SwiperSlide>
        <SwiperSlide className="text-gray-800">
          <Image
            className="rounded-lg"
            src={amazonPrime}
            alt="Amazon Prive Video"
            // width="850"
            // height="478.125"
            layout="fill"
            objectFit="cover"
            // blurDataURL="data:" //automatically provided
            placeholder="blur"
            // quality="100"
            // priority />
          />
        </SwiperSlide>
        <SwiperSlide className="text-gray-800">
          <Image
            className="rounded-lg"
            src={hulu}
            alt="Hulu"
            // width="850"
            // height="478.125"
            layout="fill"
            objectFit="cover"
            // blurDataURL="data:" //automatically provided
            placeholder="blur"
            // quality="100"
            // priority />
          />
        </SwiperSlide>
        {/* <SwiperSlide className="text-gray-800">Slide 6</SwiperSlide>
        <SwiperSlide className="text-gray-800">Slide 7</SwiperSlide>
        <SwiperSlide className="text-gray-800">Slide 8</SwiperSlide>
        <SwiperSlide className="text-gray-800">Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default OttPlatform;
