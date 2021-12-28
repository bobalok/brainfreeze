import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Bimg from '../components/Bimg';

export default function dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | internet for new generation</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="flex flex-col items-center h-full">
        <section className="text-center">
          <div className="max-w-2xl mx-auto pt-20">
            <h1 className="text-5xl md:text-7xl text-white font-extrabold px-6 py-20">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                betternet
              </span>{' '}
              for new generation
            </h1>
            <p className="text-lg md:text-2xl text-white">
              neutechbd.com is the most unified <br />
              internet service provider, <br />
              enterprise grade solution
              <br />
              everywhere.
            </p>
            <div className="px-8 pt-14">
              <button className="bg-tatsuBTN hover:bg-white transition-all ease-linear text-white text-base font-bold hover:text-tatsuBTN py-4 px-4 border-2 border-indigo-400 hover:border-transparent rounded inline-flex items-center">
                Get started
              </button>
              <span className="mx-1 text-white">or</span>
              <button className="bg-transparent hover:bg-tatsuBTN2 transition-all ease-linear text-white text-base font-bold hover:text-white py-4 px-4 border-2 border-slate-400 hover:border-transparent rounded inline-flex items-center">
                Try free!
              </button>
            </div>
            <div className=" pt-14 text-white text-center max-w-2xl grid justify-items-center">
              <h1 className="mb-2 text-2xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                  70% faster internet
                </span>{' '}
                and more efficient
              </h1>

              <p className="text-lg max-w-lg">
                consume the bandwidth efficiently more than ever before enjoy
                upto{' '}
                <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                  1Gbps
                </span>{' '}
                fast transfer speed from these servers
              </p>
            </div>
            <div className="pb-10">
              <div className="flex flex-wrap gap-10 mb-10 justify-center items-center pt-10">
                <img
                  width="64"
                  height="auto"
                  src="./LogosForNeutechWeb/steam.svg"
                  alt="Steam"
                />
                <img
                  width="64"
                  height="auto"
                  src="./LogosForNeutechWeb/epic.svg"
                  alt="Epic Games"
                />
                <img
                  width="64"
                  height="auto"
                  src="./LogosForNeutechWeb/rockstar.svg"
                  alt="Rockstar Games"
                />
                <img
                  width="64"
                  height="auto"
                  src="./LogosForNeutechWeb/origin.svg"
                  alt="EA Origin"
                />
                <img
                  width="84"
                  height="auto"
                  src="./LogosForNeutechWeb/riotgames.svg"
                  alt="riotgames"
                />
                <img
                  width="64"
                  height="auto"
                  src="./LogosForNeutechWeb/ubisoft.svg"
                  alt="ubisoft"
                />
              </div>
              <div className="flex flex-wrap gap-10 justify-center items-center">
                <img
                  width="64"
                  height="auto"
                  src="./LogosForNeutechWeb/bdix.svg"
                  alt=""
                />
                <img
                  width="64"
                  height="auto"
                  src="./LogosForNeutechWeb/ftp.svg"
                  alt="best ftp in bangladesh"
                />
                <img
                  width="64"
                  height="auto"
                  src="./LogosForNeutechWeb/youtube.svg"
                  alt="youtube"
                />
                <img
                  width="64"
                  height="auto"
                  src="./LogosForNeutechWeb/wsus.svg"
                  alt="windows software update server"
                />
                <img
                  width="64"
                  height="auto"
                  src="./LogosForNeutechWeb/facebook.svg"
                  alt="metaverse"
                />
                <img
                  width="50"
                  height="auto"
                  src="./LogosForNeutechWeb/0gradiantneutech.svg"
                  alt="neutech"
                />
                <span className=" px-4 py-4 text-gray-500">
                  and more with terms and conditions applied*
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl w-full h-[2.5px] bg-gradient-to-l from-gray-700 via-gray-100 to-gray-700"></div>

        <section className="text-white">
          <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                What makes us{' '}
                <span className="text-3xl font-extrabold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                  different
                </span>
              </h2>

              <p className="mt-6 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <dl className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3 sm:mt-16">
              <div className="flex items-start md:flex-col">
                <span className="flex-shrink-0 p-4 bg-tatsuBTN rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                </span>

                <div className="ml-3 md:mt-3 md:ml-0">
                  <dt className="text-xl font-medium">Home Internet</dt>

                  <dd className="mt-1 text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </dd>
                </div>
              </div>

              <div className="flex items-start md:flex-col">
                <span className="flex-shrink-0 p-4 bg-tatsuBTN rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>

                <div className="ml-3 md:mt-3 md:ml-0">
                  <dt className="text-xl font-medium">Corporate/SME Support</dt>

                  <dd className="mt-1 text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </dd>
                </div>
              </div>

              <div className="flex items-start md:flex-col">
                <span className="flex-shrink-0 p-4 bg-tatsuBTN rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                </span>

                <div className="ml-3 md:mt-3 md:ml-0">
                  <dt className="text-xl font-medium">Customized Services</dt>

                  <dd className="mt-1 text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </section>
        <div className="max-w-6xl w-full h-[2.5px] bg-gradient-to-l from-gray-700 via-gray-100 to-gray-700"></div>
      </div>
    </>
  );
}
