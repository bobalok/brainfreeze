import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/legacy/image";
import swiperOne from "../public/images/forswiper/swiperOne.png";
import swiperTwo from "../public/images/forswiper/swiperTwo.png";
import swiperThree from "../public/images/forswiper/swiperThree.png";
import swiperFour from "../public/images/forswiper/swiperFour.png";
import swiperFive from "../public/images/forswiper/swiperFive.png";

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
        className='mySwiper rounded-lg'
      >
        <SwiperSlide className='text-gray-800'>
          <Image
            className='rounded-lg'
            src={swiperOne}
            alt='Netflix'
            // width="850"
            // height="478.125"
            layout='fill'
            objectFit='cover'
            // blurDataURL="data:" //automatically provided
            placeholder='blur'
            // quality="100"
            // priority />
          />
        </SwiperSlide>
        <SwiperSlide className='text-gray-800'>
          <Image
            className='rounded-lg'
            src={swiperTwo}
            alt='HBO MAX'
            // width="850"
            // height="478.125"
            layout='fill'
            objectFit='cover'
            // blurDataURL="data:" //automatically provided
            placeholder='blur'
            // quality="100"
            // priority />
          />
        </SwiperSlide>
        <SwiperSlide className='text-gray-800'>
          <Image
            className='rounded-lg'
            src={swiperThree}
            alt='Disney+'
            // width="850"
            // height="478.125"
            layout='fill'
            objectFit='cover'
            // blurDataURL="data:" //automatically provided
            placeholder='blur'
            quality='100'
            // priority />
          />
        </SwiperSlide>
        <SwiperSlide className='text-gray-800'>
          <Image
            className='rounded-lg'
            src={swiperFour}
            alt='Amazon Prive Video'
            // width="850"
            // height="478.125"
            layout='fill'
            objectFit='cover'
            // blurDataURL="data:" //automatically provided
            placeholder='blur'
            // quality="100"
            // priority />
          />
        </SwiperSlide>
        <SwiperSlide className='text-gray-800'>
          <Image
            className='rounded-lg'
            src={swiperFive}
            alt='reqserver'
            // width="850"
            // height="478.125"
            layout='fill'
            objectFit='cover'
            // blurDataURL="data:" //automatically provided
            placeholder='blur'
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
