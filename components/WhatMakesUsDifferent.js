import Image from "next/image";

import WFH from "../public/images/animage/wfh.webp";
import WFO from "../public/images/animage/wfo.webp";
// import IIS1 from "../public/images/animage/islam-geo.gif";
import IIS2 from "../public/images/animage/islam.webp";
import EDU1 from "../public/images/animage/edu3.webp";
// import EDU2 from "../public/images/animage/edu2.webp";

export default function WhatMakesUsDifferent() {
  return (
    <>
      <section className='text-white'>
        <div className='xl:max-w-5xl 2xl:max-w-7xl px-4 pb-6 md:py-16 sm:px-6 lg:px-8'>
          <div className='max-w-xl'>
            <p className='mt-6 text-gray-400'>WHY US</p>
            <h2 className='text-3xl font-bold sm:text-5xl dark:text-white text-textGray'>
              What makes us{" "}
              <span className='text-3xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                different
              </span>
            </h2>

            <p className='mt-6 dark:text-white text-textGray'>
              At <strong>betternet</strong>, our primary goal is to provide
              enterprise-grade internet service combined with other value-added
              services to our end-users. We always use cutting-edge technology
              to build and upgrade our infrastructure, so our end-users always
              get the best internet experience they deserve.
            </p>
          </div>

          <dl className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-3 sm:mt-16'>
            <div className='flex items-start md:flex-col'>
              <span className='flex-shrink-0 p-4 bg-gradient-to-br from-sky-500 to-blue-600 rounded'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0'
                  />
                </svg>
              </span>

              <div className='ml-3 md:mt-3 md:ml-0 dark:text-white text-textGray'>
                <dt className='text-xl font-medium '>Broadband Internet</dt>

                <dd className='mt-1 dark:text-white text-textGray'>
                  Connect your home, office, or institutions with blazing-fast
                  internet connectivity. We offer internet service options with
                  QoS optimization to enhance your user exeperience, choose a
                  cost-effective internet plan best suited to your day-to-day
                  online activities.
                </dd>
              </div>
            </div>

            <div className='flex items-start md:flex-col'>
              <span className='flex-shrink-0 p-4 bg-gradient-to-br from-sky-500 to-blue-600 rounded'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5'
                  />
                </svg>
              </span>

              <div className='ml-3 md:mt-3 md:ml-0'>
                <dt className='text-xl font-medium dark:text-white text-textGray'>
                  Network Infrastructure
                </dt>

                <dd className='mt-1 dark:text-white text-textGray'>
                  Building a reliable network infrastructure is essential for
                  every use case for a <strong>better</strong> security and user
                  experience. Our network engineer will work with you cohesively
                  until you are satisfied with the perfect solution. We will
                  help you to design, build and manage the network
                  infrastructure.
                </dd>
              </div>
            </div>

            <div className='flex items-start md:flex-col'>
              <span className='flex-shrink-0 p-4 bg-gradient-to-br from-sky-500 to-blue-600 rounded'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
                  />
                </svg>
              </span>

              <div className='ml-3 md:mt-3 md:ml-0'>
                <dt className='text-xl dark:text-white text-textGray font-medium'>
                  Smart IoT Implementation
                </dt>

                <dd className='mt-1 dark:text-white text-textGray'>
                  Regardless of your subscribed plans, betternet offers you
                  comprehensive integration of IoT devices like Surveillance
                  systems, Smart home solutions, Mesh Wi-Fi Zone, and other
                  devices you can think of, also you can rent these devices from
                  us. <strong>T&C is applicable*</strong>
                </dd>
              </div>
            </div>

            <div className='flex items-start md:flex-col'>
              <span className='flex-shrink-0 p-4 bg-gradient-to-br from-sky-500 to-blue-600 rounded'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </span>

              <div className='ml-3 md:mt-3 md:ml-0'>
                <dt className='text-xl font-medium dark:text-white text-textGray'>
                  Built-in Entertainment
                </dt>

                <dd className='mt-1 dark:text-white text-textGray'>
                  We proudly offer you the most{" "}
                  <strong>unified media service</strong> by utilizing the best
                  tools and software currently available and used by thousands
                  of people worldwide. Stream movies and shows or request
                  unavailable titles with a counter-intuitive and easy-to-use
                  application get notified when the requested media is available
                  to the server.
                </dd>
              </div>
            </div>

            <div className='flex items-start md:flex-col'>
              <span className='flex-shrink-0 p-4 bg-gradient-to-br from-sky-500 to-blue-600 rounded'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </span>

              <div className='ml-3 md:mt-3 md:ml-0'>
                <dt className='text-xl font-medium dark:text-white text-textGray'>
                  Work Station Optimization
                </dt>

                <dd className='mt-1 dark:text-white text-textGray'>
                  As we know that the methodology of the workplace is changing
                  day by day because of the pandemic, with that in mind, we are
                  providing many solutions to make your remote work experience
                  better by optimizing the system and networks, creating a VPN,
                  and many other QoS tweakings.
                </dd>
              </div>
            </div>

            <div className='flex items-start md:flex-col'>
              <span className='flex-shrink-0 p-4 bg-gradient-to-br from-sky-500 to-blue-600 rounded'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 640 512'
                  className='w-6 h-6'
                  fill='currentColor'
                >
                  <path d='M488 191.1h-152l.0001 51.86c.0001 37.66-27.08 72-64.55 75.77c-43.09 4.333-79.45-29.42-79.45-71.63V126.4l-24.51 14.73C123.2 167.8 96.04 215.7 96.04 267.5L16.04 313.8c-15.25 8.751-20.63 28.38-11.75 43.63l80 138.6c8.875 15.25 28.5 20.5 43.75 11.75l103.4-59.75h136.6c35.25 0 64-28.75 64-64c26.51 0 48-21.49 48-48V288h8c13.25 0 24-10.75 24-24l.0001-48C512 202.7 501.3 191.1 488 191.1zM635.7 154.5l-79.95-138.6c-8.875-15.25-28.5-20.5-43.75-11.75l-103.4 59.75h-62.57c-37.85 0-74.93 10.61-107.1 30.63C229.7 100.4 224 110.6 224 121.6l-.0004 126.4c0 22.13 17.88 40 40 40c22.13 0 40-17.88 40-40V159.1h184c30.93 0 56 25.07 56 56v28.5l80-46.25C639.3 189.4 644.5 169.8 635.7 154.5z' />
                </svg>
              </span>

              <div className='ml-3 md:mt-3 md:ml-0'>
                <dt className='text-xl font-medium dark:text-white text-textGray'>
                  Service-level Agreement
                </dt>

                <dd className='mt-1 dark:text-white text-textGray'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  labore et dolore magna aliqua.
                </dd>
              </div>
            </div>
          </dl>
          <div className='xl:max-w-5xl 2xl:max-w-7xl mx-auto py-16 text-white'>
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
              <div className='rounded'>
                <Image
                  className='rounded'
                  src={IIS2}
                  width={310}
                  height={220}
                  // blurDataURL='data:'
                  placeholder='blur'
                  quality={70}
                />
              </div>
              <div className='rounded'>
                <Image
                  className='rounded'
                  src={WFH}
                  width={310}
                  height={220}
                  // blurDataURL='data:'
                  placeholder='blur'
                  quality={70}
                />
              </div>
              <div className='rounded'>
                <Image
                  className='rounded'
                  src={EDU1}
                  width={310}
                  height={220}
                  // blurDataURL='data:'
                  placeholder='blur'
                  quality={70}
                />
              </div>
              <div className='rounded'>
                <Image
                  className='rounded'
                  src={WFO}
                  width={310}
                  height={220}
                  // blurDataURL='data:'
                  placeholder='blur'
                  quality={70}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
