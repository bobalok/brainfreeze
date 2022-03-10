import Image from "next/image";
import Link from "next/link";
import completeWifi from "../public/images/animage/complete-wifi.webp";
// import Wifi from "../public/images/wifi.gif";

export default function CompleteWifi() {
  return (
    <>
      <section className='dark:text-white text-textGray'>
        <div className='xl:max-w-5xl 2xl:max-w-7xl mx-auto px-4 lg:py-16 sm:px-6 lg:px-8 grid lg:grid-cols-2 md:grid-cols-1 gap-4'>
          <div className='max-w-xl'>
            <p className='mt-6 uppercase'>Mesh Wi-Fi Extender & Booster</p>
            <h1 className='text-3xl font-bold sm:text-5xl'>
              Complete{" "}
              <span className='text-3xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                Wi-Fi
              </span>{" "}
              solution
            </h1>
            <p className='mt-6'>
              With homes becoming larger and smarter than ever before, it’s
              important to have a strong, reliable Wi-Fi signal that can keep up
              with all your devices. Unlike other boosters or Wi-Fi extenders,
              we offer you a budget-frienly, worry-free and powerful Complete
              Wi-Fi solution allows you to have the strongest Wi-Fi signal
              possible in all areas of your home.
            </p>
            <div className='pt-8 '>
              <button>
                <Link href='#'>
                  <a className=" bg-transparent hover:bg-tatsuBTN2 dark:text-white text-textGray transition-all ease-linear text-base font-bold hover:text-white py-4 px-4 border-2 border-slate-400 hover:border-transparent rounded md:inline-flex flex items-center'">
                    Get a quote
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
          <div className='self-center pb-6 sm:pb-0'>
            <Image
              src={completeWifi}
              className='rounded'
              alt='smarthome'
              // width={600}
              // height={328}
              layout='responsive'
              objectFit='cover'
              // blurDataURL='data:'
              placeholder='blur'
              // quality='100'
              // priority
            />
          </div>
        </div>
        <div className='xl:max-w-5xl 2xl:max-w-7xl mx-auto pb-16'>
          <div className='grid sm:grid-cols-2 gap-4 px-6 place-content-center'>
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
      </section>
    </>
  );
}
