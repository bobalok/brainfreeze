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
        <div className='w-full h-[450px] sm:h-[600px] relative flex items-center justify-center text-white'>
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
          <div className='absolute backdrop-blur-sm bg-black/80 w-full h-[450px] sm:h-[600px]'>
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
              <div className='pt-8 sm:px-0 px-8'>
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

          {/* <div className='absolute -bottom-8 rounded bg-rose-500'>
            <div className='max-w-7xl mx-auto text-4xl px-6 py-10'>
              helkajsd;lf
            </div>
          </div> */}
        </div>

        {/* 👆👆👆 Hero goes here 👆👆👆 */}
      </motion.section>
    </>
  );
}
