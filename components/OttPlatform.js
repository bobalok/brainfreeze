import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import appletv from "../public/images/appletvPlus.png";
import primevideo from "../public/images/primevideo-bg.png";
import netflix from "../public/images/netflix-bg.png";
import hbomax from "../public/images/hbomax-bg.png";
import disneyplus from "../public/images/disneyplus-bg.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import "../styles/swiper.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, EffectFade]);

function OttPlatform() {
  return (
    <>
      <Swiper
        effect={"fade"}
        spaceBetween={30}
        pagination={true}
        autoplay={{
          delay: 2600,
          disableOnInteraction: false,
        }}
        className="mySwiper rounded-lg"
      >
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
            src={hbomax}
            alt="HBO MAX"
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
            src={disneyplus}
            alt="Disney+"
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
        <SwiperSlide className="text-gray-800">
          <Image
            className="rounded-lg"
            src={primevideo}
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
            src={appletv}
            alt="AppleTV+"
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
