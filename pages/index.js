import Head from "next/head";
import Image from "next/image";
import OttPlatform from "../components/OttPlatform";
import Pricing from "../components/Pricing";
import plexImg from "../public/images/plex.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | internet for new generation</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="flex flex-col items-center h-full">
        {/* Section I Start */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto pt-20">
            <h1 className="text-5xl md:text-7xl text-white font-extrabold px-6 py-20">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                betternet
              </span>{" "}
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
                </span>{" "}
                and more efficient
              </h1>

              <p className="text-lg max-w-lg">
                consume the bandwidth more efficiently ever than before enjoy up
                to{" "}
                <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                  1Gbps
                </span>{" "}
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
                  src="./neutechLogobwNoText.svg"
                  alt="neutech"
                />
                <span className=" px-4 py-4 text-gray-500">
                  and more with terms and conditions applied*
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* Section I End */}
        <div className="max-w-screen-xl w-full h-[2.5px] bg-gradient-to-l from-gray-700 via-gray-100 to-gray-700"></div>
        {/* Section II Start*/}
        <section className="text-white">
          <div className="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <p className="mt-6 text-gray-300">WHY US</p>
              <h2 className="text-3xl font-bold sm:text-5xl">
                What makes us{" "}
                <span className="text-3xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
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
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </span>

                <div className="ml-3 md:mt-3 md:ml-0">
                  <dt className="text-xl font-medium">Broadband Internet</dt>

                  <dd className="mt-1 text-gray-300">
                    Stream movies and TV shows, plus live TV channels,
                    instantly, without a subscription. Watch your favorite TV
                    shows and series, live channels and free movies anywhere,
                    from any device.
                  </dd>
                </div>
              </div>

              <div className="flex items-start md:flex-col">
                <span className="flex-shrink-0 p-4 bg-tatsuBTN rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </span>

                <div className="ml-3 md:mt-3 md:ml-0">
                  <dt className="text-xl font-medium">Corporate/SME Support</dt>

                  <dd className="mt-1 text-gray-300">
                    From security, backup, and disaster recovery to cloud
                    services, hardware, software, IP-based, and other network
                    solutions, find the ideal IT support for your Corporate/SME
                    businesses with{" "}
                    <span className="font-bold">neutech internet.</span>
                  </dd>
                </div>
              </div>

              <div className="flex items-start md:flex-col">
                <span className="flex-shrink-0 p-4 bg-tatsuBTN rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                </span>

                <div className="ml-3 md:mt-3 md:ml-0">
                  <dt className="text-xl font-medium">
                    Institutional Internet
                  </dt>

                  <dd className="mt-1 text-gray-300">
                    Besides the library, the Internet is an important source for
                    information for learning and research. The Internet allows
                    students and other ones to broaden their academic
                    experience.
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
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <div className="ml-3 md:mt-3 md:ml-0">
                  <dt className="text-xl font-medium">
                    Developer Friendly Network
                  </dt>

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
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </span>

                <div className="ml-3 md:mt-3 md:ml-0">
                  <dt className="text-xl font-medium">
                    Research & Development
                  </dt>

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
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
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
        {/* Section II End */}
        <div className="max-w-screen-xl w-full h-[1.5px] bg-gradient-to-l from-gray-700 via-gray-100 to-gray-700"></div>
        {/* Section III Start*/}
        <section className="text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-4">
            <div className="max-w-xl">
              <p className="mt-6 text-gray-300">STREMING SERVICE FOR FREE</p>
              <h1 className="text-3xl font-bold sm:text-5xl">
                Unified media service
              </h1>
              <p className="mt-6 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mx-auto pt-8">
                <button className="hidden bg-transparent hover:bg-tatsuBTN2 transition-all ease-linear text-white text-base font-bold hover:text-white py-4 px-4 border-2 border-slate-400 hover:border-transparent rounded md:inline-flex items-center">
                  Learn more!
                </button>
              </div>
            </div>

            <div className="">
              <Image
                src={plexImg}
                className="rounded-lg"
                alt="smarthome"
                // width="850"
                // height="478.125"
                layout="intrinsic"
                // blurDataURL="data:" //automatically provided
                placeholder="blur"
                // quality="100"
                // priority
              />
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 pb-16 sm:px-6 lg:px-8 grid grid-cols-1">
            <div className="md:h-96 h-64">
              <OttPlatform />
            </div>
          </div>
        </section>
        {/* Section III End */}
        <div className="max-w-screen-xl w-full h-[1.5px] bg-gradient-to-l from-gray-700 via-gray-100 to-gray-700"></div>
        {/* Sectionn IV Start */}
        <Pricing />
        {/* Sectionn IV End */}
        <div className="max-w-screen-xl w-full h-[1.5px] bg-gradient-to-l from-gray-700 via-gray-100 to-gray-700"></div>
      </div>
    </>
  );
}
