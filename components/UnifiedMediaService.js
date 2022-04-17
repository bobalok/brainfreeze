import React, { useEffect, useRef, useState } from "react";
// Import heroicon component
// import { ArrowNarrowRight } from "@heroicons/react/solid";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import swiperOne from "../public/images/forswiper/swiperOne.png";
import swiperTwo from "../public/images/forswiper/swiperTwo.png";
import swiperThree from "../public/images/forswiper/swiperThree.png";
import swiperFour from "../public/images/forswiper/swiperFour.png";
import swiperFive from "../public/images/forswiper/swiperFive.png";
import swiperSix from "../public/images/forswiper/swiperSix.png";
import uifiedImageOne from "../public/images/unifiedImageOne.jpg";
// import plexImg from "../public/images/plex.jpg";
// import remote from "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import "../styles/swiper.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import Link from "next/link";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, EffectFade]);

export default function UnifiedMediaService() {
  return (
    <>
      <section className='dark:text-white text-textGray'>
        <div className='xl:max-w-5xl 2xl:max-w-7xl mx-auto px-4 lg:py-16 sm:px-6 lg:px-8 grid lg:grid-cols-2 md:grid-cols-1 gap-4'>
          <div className='max-w-xl'>
            <p className='mt-6 '>ENTERTAINMENT & STREAMING</p>
            <h1 className='text-3xl font-bold sm:text-5xl'>
              Unified{" "}
              <span className='text-3xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                media
              </span>{" "}
              service
            </h1>
            <p className='mt-6 text-lg'>
              Take your home entertainment to the next level. Enjoy all your
              favorite TV Shows, Movies, and songs directly from your Smart TV,
              Mobile, PC, Consoles, and more without any extra charges included
              with all plans. Also, you can request media-on-demand using our
              user-friendly web app.{" "}
            </p>
            <div className='pt-8'>
              <button>
                <Link href='/#pricing'>
                  <a className="bg-transparent hover:bg-tatsuBTN2 dark:text-white text-textGray transition-all ease-linear text-base font-bold hover:text-white py-4 px-4 border-2 border-slate-400 hover:border-transparent rounded md:inline-flex flex items-center'">
                    Subscribe Now
                    <svg
                      className='ml-1 w-6 h-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17 8l4 4m0 0l-4 4m4-4H3'
                      />
                    </svg>
                  </a>
                </Link>
              </button>
            </div>
          </div>

          <div className='self-center'>
            <Image
              src={uifiedImageOne}
              className='rounded'
              alt='unified entertainment for you'
              // width={600}
              // height={328}
              // layout='intrinsic'
              // objectFit='cover'
              // blurDataURL='data:'
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
              className='mySwiper rounded'
            >
              <SwiperSlide className='text-gray-800'>
                <Image
                  className='rounded'
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
                  className='rounded'
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
                  className='rounded'
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
                  className='rounded'
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
                  className='rounded'
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
              <SwiperSlide className='text-gray-800'>
                <Image
                  className='rounded'
                  src={swiperSix}
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
