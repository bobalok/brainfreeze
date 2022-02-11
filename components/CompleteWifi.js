import Image from "next/image";
import Link from "next/link";
import completeWifi from "../public/images/complete-wifi.gif";

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
            <div className='mx-auto pt-8 '>
              <button className='hidden bg-transparent hover:bg-tatsuBTN2 dark:text-white text-textGray transition-all ease-linear text-base font-bold hover:text-white py-4 px-4 border-2 border-slate-400 hover:border-transparent rounded md:inline-flex items-center'>
                <Link href='/meshnetwork' replace>
                  <a>What is a mesh network ?</a>
                </Link>
              </button>
            </div>
          </div>
          <div className=''>
            <Image
              src={completeWifi}
              className='rounded-lg'
              alt='smarthome'
              //   width={600}
              //   height={328}
              layout='intrinsic'
              objectFit='cover'
              blurDataURL='data:'
              placeholder='blur'
              // quality="60"
              // priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
