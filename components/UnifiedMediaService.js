import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import GamersBG from "../public/images/gamer-bg.png";
import reqserver from "../public/images/reqserver-bg.png";
import primevideo from "../public/images/primevideo-bg.png";
import netflix from "../public/images/netflix-bg.png";
import hbomax from "../public/images/hbomax-bg.png";
import disneyplus from "../public/images/disneyplus-bg.png";
import plexImg from "../public/images/plex.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import "../styles/swiper.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, EffectFade]);

export default function UnifiedMediaService() {
  return (
    <>
      <section className='text-white'>
        <div className='xl:max-w-5xl 2xl:max-w-7xl mx-auto px-4 lg:py-16 sm:px-6 lg:px-8 grid lg:grid-cols-2 md:grid-cols-1 gap-4'>
          <div className='max-w-xl'>
            <p className='mt-6 text-gray-300'>STREMING SERVICE FOR FREE</p>
            <h1 className='text-3xl font-bold sm:text-5xl'>
              Unified{" "}
              <span className='text-3xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                media
              </span>{" "}
              service
            </h1>
            <p className='mt-6 text-gray-300'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='mx-auto pt-8'>
              <button className='hidden bg-transparent hover:bg-tatsuBTN2 transition-all ease-linear text-white text-base font-bold hover:text-white py-4 px-4 border-2 border-slate-400 hover:border-transparent rounded md:inline-flex items-center'>
                Learn more!
              </button>
            </div>
          </div>

          <div className=''>
            <Image
              src={plexImg}
              className='rounded-lg'
              alt='smarthome'
              // width={600}
              // height={328}
              layout='intrinsic'
              objectFit='cover'
              // blurDataURL="data:" //automatically provided
              placeholder='blur'
              // quality="60"
              // priority
            />
          </div>
        </div>
        <div className='xl:max-w-5xl 2xl:max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 grid grid-cols-1'>
          <div className='md:h-96 h-64'>
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
                  src={netflix}
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
                  src={hbomax}
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
                  src={disneyplus}
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
                  src={primevideo}
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
                  src={reqserver}
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
              <SwiperSlide className='text-gray-800'>
                <Image
                  className='rounded-lg'
                  src={GamersBG}
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
          </div>
        </div>
      </section>
    </>
  );
}
