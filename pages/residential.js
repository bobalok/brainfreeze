import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import residentialPic from "../public/images/residential.jpg";
import completeWifi from "../public/images/complete-wifi.gif";

export default function residential() {
  return (
    <>
      <motion.section exit={{ opacity: 0 }}>
        {/* 👇👇👇 Hero goes here 👇👇👇 */}
        <div className='w-full h-[500px] sm:h-[600px] relative flex items-center justify-center text-white'>
          <Image
            src={residentialPic}
            className='rounded'
            alt='Games'
            // width={1280}
            // height={200}
            layout='fill'
            objectFit='cover'
            // blurDataURL='data:'
            placeholder='blur'
          />
          <div className='absolute backdrop-blur-sm bg-black/80 w-full h-[500px] sm:h-[600px]'>
            <div className='max-w-2xl mx-auto'>
              <h1 className='text-4xl md:text-7xl font-extrabold py-8 sm:py-16 sm:px-0 px-8'>
                Take your home{" "}
                <span className='bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                  entertainment
                </span>{" "}
                to the next level
              </h1>
              <p className='text-lg md:text-2xl sm:px-0 px-8'>
                Enjoy all your favorite Shows, Movies, and songs directly from
                your Smart TV, Mobile, PC, Consoles, and more without any extra
                charges included with all plans. Also, you can request
                media-on-demand using our user-friendly web app.
              </p>
              <div className='py-8 sm:px-0 px-8'>
                <button>
                  <Link href=''>
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
          </div>
        </div>
        <div className='w-full h-max bg-blue-500 bg-hero-pattern bg-hero-size flex items-center text-white'>
          <div className='xl:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:py-16 sm:px-6 lg:px-8'>
            <div className=''>
              <h1 className='text-3xl font-bold sm:text-5xl  pb-4 md:text-center mt-6'>
                The Media Service You Deserve
              </h1>
              <p className='md:text-center max-w-xl mx-auto'>
                Huge collection of High-definition (HD) Defination TV-Shows,
                Movies and Music
              </p>
              <div class='pt-6 justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4'>
                <a class='w-full sm:w-auto md:flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'>
                  <svg
                    class='mr-3 w-7 h-7'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='apple'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 384 512'
                  >
                    <path
                      fill='currentColor'
                      d='M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'
                    ></path>
                  </svg>
                  <div class='text-left'>
                    <div class='mb-1 text-xs'>Download on the</div>
                    <div class='-mt-1 font-sans text-sm font-semibold'>
                      Mac App Store
                    </div>
                  </div>
                </a>
                <a class='w-full sm:w-auto md:flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700'>
                  <svg
                    class='mr-3 w-7 h-7'
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fab'
                    data-icon='google-play'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z'
                    ></path>
                  </svg>
                  <div class='text-left'>
                    <div class='mb-1 text-xs'>Get in on</div>
                    <div class='-mt-1 font-sans text-sm font-semibold'>
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <video
              className='w-full aspect-video shadow-2xl rounded my-10'
              controls
              // autoPlay
              muted
              loop
              src='/videos/StreamingService.webm'
              type='video/webm'
            ></video>
          </div>
        </div>

        <div className='w-full h-[1084px] bg-green-500 bg-hero-pattern bg-hero-size flex items-center text-white'>
          <h1 className='text-3xl font-bold sm:text-5xl  pb-4 md:text-center mt-6'>
            The Media Service You Deserve
          </h1>
        </div>

        {/* 👆👆👆 Hero goes here 👆👆👆 */}
      </motion.section>
    </>
  );
}
