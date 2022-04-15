// import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function BetterNetForNewGeneration() {
  return (
    <>
      <section className='max-w-2xl mx-auto'>
        {/* Heading Goes Here */}

        {/* <motion.div exit={{ opacity: 0 }}> */}
        <div className='text-center'>
          <h1 className='text-4xl md:text-7xl dark:text-white text-textGray font-extrabold px-6 py-16'>
            <span className='bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
              internet
            </span>{" "}
            for new generation
          </h1>
          {/* Subheading Goes Here */}
          <p className='text-lg md:text-2xl dark:text-white text-textGray'>
            unified internet service provider,
            <br />
            enterprise grade solution
            <br />
            anywhere we connect
            <br />
          </p>

          {/* CTA Buttons */}

          <div className='px-8 py-10'>
            {/* <button className="bg-tatsuBTN hover:bg-white transition-all ease-linear text-white text-base font-bold hover:text-tatsuBTN py-4 px-4 border-2 border-indigo-400 hover:border-transparent rounded inline-flex items-center">
              Get started
            </button>
            <span className="mx-1 text-white">or</span> */}
            {/* <a href='https://forms.gle/F2MHHRhDhCW9YDdXA' target='_blank'> */}
            <button>
              <Link href='/#pricing'>
                <a className="shadow-lg bg-tatsuBTN2 hover:bg-transparent dark:text-white text-white transition-all ease-linear text-base font-bold hover:text-textGray dark:hover:text-white py-4 px-4 border-2 bo border-transparent  hover:border-slate-400 rounded md:inline-flex flex items-center'">
                  See pricing
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
            {/* </a> */}
          </div>
          {/* ShortParagraph/marketing Goes Here */}
          <h1 className='text-2xl font-bold dark:text-white text-textGray mx-2'>
            <span className='font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
              3x faster internet
            </span>{" "}
            and more efficient 🚀
          </h1>
          <p className='text-lg max-w-lg dark:text-white text-textGray md:mx-auto mx-2 pb-8'>
            consume the bandwidth more efficiently ever than before enjoy up to{" "}
            <span className='text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
              1Gbps
            </span>{" "}
            fast transfer speed from these servers
          </p>
        </div>

        {/* Grid Logos goes here */}

        <div className='mx-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 items-center justify-items-center'>
          <div>
            <Image
              width='64'
              height='86'
              src='/LogosForNeutechWeb/steam.svg'
              alt='Steam'
            />
          </div>
          <div>
            <Image
              width='64'
              height='86'
              src='/LogosForNeutechWeb/epic.svg'
              alt='Epic Games'
            />
          </div>
          <div>
            <Image
              width='64'
              height='86'
              src='/LogosForNeutechWeb/rockstar.svg'
              alt='Rockstar Games'
            />
          </div>
          <div>
            <Image
              width='64'
              height='86'
              src='/LogosForNeutechWeb/origin.svg'
              alt='EA Origin'
            />
          </div>
          <div>
            <Image
              width='64'
              height='86'
              src='/LogosForNeutechWeb/riotgames.svg'
              alt='riotgames'
            />
          </div>
          <div>
            <Image
              width='64'
              height='86'
              src='/LogosForNeutechWeb/ubisoft.svg'
              alt='ubisoft'
            />
          </div>
          <div>
            <Image
              width='64'
              height='86'
              src='/LogosForNeutechWeb/bdix.svg'
              alt=''
            />
          </div>
          <div>
            <Image
              width='64'
              height='86'
              src='/LogosForNeutechWeb/ftp.svg'
              alt='best ftp in bangladesh'
            />
          </div>
          <div>
            <Image
              width='64'
              height='86'
              src='/LogosForNeutechWeb/youtube.svg'
              alt='youtube'
            />
          </div>
          <div>
            <Image
              width='64'
              height='86'
              src='/LogosForNeutechWeb/wsus.svg'
              alt='windows software update server'
            />
          </div>
          <div>
            <Image
              width='64'
              height='86'
              src='/LogosForNeutechWeb/facebook.svg'
              alt='metaverse'
            />
          </div>
          <div>
            <Image
              width='64'
              height='86'
              src='/LogosForNeutechWeb/betternetLogoBW.svg'
              alt='betternet logo'
            />
          </div>
        </div>
        <span className='py-4 text-gray-500 flex justify-center text-center mx-6'>
          and more. T&amp;C applicable*
        </span>
        {/* </motion.div> */}
      </section>
    </>
  );
}
