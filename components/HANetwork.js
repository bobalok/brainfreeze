import Image from "next/image";

import WFH from "../public/images/wfh.gif";
import WFO from "../public/images/wfo.gif";
import IIS1 from "../public/images/islam-geo.gif";
import IIS2 from "../public/images/islam.gif";
import EDU1 from "../public/images/edu1.gif";
import EDU2 from "../public/images/edu2.gif";

// import NetworkBlip from "../public/videos/video2.mp4";

export default function HANetwork() {
  return (
    <>
      <section className='dark:text-white text-textGray'>
        <div className='xl:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:py-16 sm:px-6 lg:px-8'>
          <div className=''>
            <h1 className='text-3xl font-bold sm:text-5xl  pb-4 md:text-center mt-6'>
              High Availability 24x7
            </h1>
            <p className='0 md:text-center max-w-xl mx-auto'>
              Your Internet should be at its best every day. We’re committed to
              investing in the capacity and reliability of our network
            </p>
          </div>
          <video
            className='w-full aspect-video shadow-2xl rounded-lg my-10'
            // controls
            autoPlay
            muted
            loop
            src='/videos/HANetwork.webm'
            type='video/webm'
          ></video>
        </div>
        {/* ------------##################==================+++++++++++++++ */}
        <div className='xl:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:py-16 sm:px-6 lg:px-8 text-white'>
          <div className='max-w-2xl'>
            <p className='dark:text-white text-textGray uppercase'>
              special services
            </p>
            <h1 className='text-3xl font-bold sm:text-5xl dark:text-white text-textGray pb-4'>
              Catered for{" "}
              <span className='text-3xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                specific
              </span>{" "}
              needs
            </h1>
            <p className='dark:text-white text-textGray max-w-xl'>
              Institutions like schools, universities, and Islamic training
              centers need distinctive internet connectivity. So our R&D team
              has developed a few ways to provide internet services to an
              institution like these, so the students or employees don't get
              distracted while they are learning or trying to be more
              productive...
            </p>
          </div>

          <div className='mt-6 py-6 grid  sm:gap-6 gap-4 place-items-center lg:grid-cols-4 grid-cols-2'>
            <div className='rounded-lg'>
              <Image
                className='rounded-lg'
                src={IIS2}
                width={310}
                height={220}
                blurDataURL={IIS2}
                placeholder='blur'
                quality={70}
              />
            </div>
            <div className='rounded-lg'>
              <Image
                className='rounded-lg'
                src={WFH}
                width={310}
                height={220}
                blurDataURL={WFH}
                placeholder='blur'
                quality={70}
              />
            </div>
            <div className='rounded-lg'>
              <Image
                className='rounded-lg'
                src={EDU1}
                width={310}
                height={220}
                blurDataURL={EDU1}
                placeholder='blur'
                quality={70}
              />
            </div>
            <div className='rounded-lg'>
              <Image
                className='rounded-lg'
                src={WFO}
                width={310}
                height={220}
                blurDataURL={WFO}
                placeholder='blur'
                quality={70}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
