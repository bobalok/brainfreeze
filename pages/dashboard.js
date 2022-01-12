import Head from "next/head";
import Testimonials from "../components/Testimonials";
// import Image from 'next/image';
// import Banner from '../components/Banner';
// import Bimg from '../components/Bimg';

export default function Home() {
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
                Dashboard
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
                consume the bandwidth efficiently more than ever before enjoy
                upto{" "}
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

        <div className="max-w-screen-xl w-full h-[2.5px] bg-gradient-to-l from-gray-700 via-gray-100 to-gray-700"></div>
        {/* ############################################################################################### */}

        {/* <Testimonials /> */}

        {/* ############################################################################################### */}
        <div className="max-w-screen-xl w-full h-[1.5px] bg-gradient-to-l from-gray-700 via-gray-100 to-gray-700"></div>
      </div>
    </>
  );
}
