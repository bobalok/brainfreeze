import Head from "next/head";
import { motion } from "framer-motion";
import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import FAQ from "../components/FAQ";
import meshrouter from "../public/images/meshrouter.jpg";
import Completewifi from "../components/CompleteWifi";

export default function meshnetwork() {
  return (
    <>
      <Head>
        <title>Mesh Network | betternet</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <motion.section exit={{ opacity: 0 }}>
        {/* flex flex-col items-center */}
        <div className='h-full'>
          <div className=''>
            {/* headline */}

            <div className='max-w-7xl mx-auto'>
              <div className='py-16 px-8 grid sm:grid-cols-2 gap-4'>
                <div className=''>
                  <h1 className='text-5xl md:text-7xl font-extrabold dark:text-white text-textGray'>
                    Experience{" "}
                    <span className='bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                      Wi-Fi
                    </span>{" "}
                    Like Never Before
                  </h1>
                  <p className='text-lg md:text-2xl dark:text-white text-textGray pt-10'>
                    Try out the Mesh technology to cover your entire home in
                    powerful Wi-Fi. Multiple units seamlessly work together to
                    create a home network like nothing you’ve ever experienced.
                  </p>
                </div>
                <div className='self-center'>
                  <Image
                    src={meshrouter}
                    className='rounded-lg'
                    alt='Games'
                    width={600}
                    height={328}
                    layout='responsive'
                    objectFit='cover'
                    // blurDataURL='data:' //automatically provided
                    // placeholder='blur'
                    // quality='70'
                    // priority
                  />
                </div>
              </div>

              {/* Grid Logos goes here */}
              {/* <div className='max-w-2xl mx-auto h-32 bg-slate-700 rounded-lg place-items-center'>
                <div className='grid grid-cols-3 gap-4 items-center justify-items-center'>
                  <div>
                    <img
                      width='74'
                      height='auto'
                      src='./LogosForNeutechWeb/homewifi.png'
                      alt='Steam'
                    />
                  </div>
                  <div>
                    <img
                      width='74'
                      height='auto'
                      src='./LogosForNeutechWeb/meshwifi.png'
                      alt='Epic Games'
                    />
                  </div>
                  <div>
                    <img
                      width='74'
                      height='auto'
                      src='./LogosForNeutechWeb/parentalControlls.png'
                      alt='Rockstar Games'
                    />
                  </div>
                </div>
              </div> */}
              {/* 2 Grid */}
              <div className='max-w-screen-2xl mx-auto'>
                <div className='grid sm:grid-cols-2 gap-5 px-6 place-content-center'>
                  <div className='dark:text-white text-textGray text-xl'>
                    <p className='mb-5 underline'>With Mesh Wi-Fi setup:</p>
                    <video
                      className='w-full shadow-2xl rounded-lg'
                      // controls
                      autoPlay
                      muted
                      loop
                      src='/videos/mesh.mp4'
                      type='video/mp4'
                    ></video>
                  </div>
                  <div className='dark:text-white text-textGray text-xl'>
                    <p className='mb-5 underline'>Without Mesh Wi-Fi setup:</p>
                    <video
                      className='w-full shadow-2xl rounded-lg'
                      // controls
                      autoPlay
                      muted
                      loop
                      src='/videos/nomesh.mp4'
                      type='video/mp4'
                    ></video>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}

            <div className='px-8 pt-10 '>
              {/* <button className="bg-tatsuBTN hover:bg-white transition-all ease-linear text-white text-base font-bold hover:text-tatsuBTN py-4 px-4 border-2 border-indigo-400 hover:border-transparent rounded inline-flex items-center">
              Get started
            </button>
            <span className="mx-1 text-white">or</span> */}
            </div>
            <FAQ />
            {/* ShortParagraph/marketing Goes Here */}
          </div>
        </div>
      </motion.section>
    </>
  );
}
