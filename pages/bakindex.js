import Head from 'next/head';
// import streamPic from "../public/streaming.jpg";
// import smarthomePic from "../public/smarthome.jpg";
import smartofficePic from '../public/smartoffice.jpg';
import Image from 'next/image';
import Bimg from '../components/Bimg';

export default function Home() {
  return (
    <>
      <Head>
        <title>neutech | internet for new generation</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="flex flex-col items-center h-full text-center pt-32">
        {/* section 1 */}
        <section id="1" className="">
          <div className="font-body max-w-2xl mx-auto mt-6 text-5xl md:text-7xl text-white font-extrabold">
            <h1>
              a{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
                betternet
              </span>{' '}
              for new generation
            </h1>
          </div>
          <div className="md:max-w-7xl max-w-2xl mx-auto py-6 text-lg md:text-2xl text-white">
            <p>
              neutechbd.com is the most unified <br />
              internet service provider <br />
              enterprise grade solution
              <br />
              everywhere.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-8 p-4">
            <button className="bg-green-500 hover:bg-gradient-to-r from-green-500 to-blue-500 transition-all text-white font-semibold hover:text-white py-4 px-4 border border-green-500 hover:border-transparent rounded inline-flex items-center">
              Get started
            </button>
            <span className="mx-1 text-white">or</span>
            <button className="bg-transparent hover:bg-gradient-to-r from-green-500 to-blue-500 transition-all text-green-500 font-semibold hover:text-white py-4 px-4 border border-green-500 hover:border-transparent rounded inline-flex items-center">
              Try free!
            </button>
          </div>

          <div className="max-w-7xl mx-auto grid place-items-center">
            <div className="py-10 px-6 text-center max-w-lg">
              <h1 className="text-2xl mb-2 font-bold md:font-bold text-white">
                70% faster{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
                  internet
                </span>{' '}
                and more efficient
              </h1>
              <p className="text-white text-lg">
                consume the bandwidth efficiently more than ever before enjoy
                upto 1Gbps fast transfer speed from these servers
              </p>
            </div>
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
            </div>
            <span className="pt-5 text-gray-500 mb-4">
              and more with term and conditions applied*
            </span>
          </div>
        </section>

        {/* section 2 */}
        <section id="2"></section>
        <div className="w-full h-[1.2px] bg-tatsuBTN"></div>

        {/* We Provide Section */}
        <section
          id="card"
          className="max-w-4xl mx-auto grid place-items-center"
        >
          <div className="py-10 px-6 text-center max-w-lg">
            <h3 className="font-body text-2xl mb-2 font-bold text-white">
              We provide
            </h3>
            <p className="text-white text-lg">
              currently we are providing our internet services at uttara only
              but we have plans for expanding our network by
            </p>
          </div>
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-6">
            <div className="md:hover:shadow-2xl">
              <div className="bg-slate-200 rounded-xl">
                <div className="mt-0">
                  <img
                    src="/images/wfh.gif"
                    width="446.5px"
                    alt=""
                    className="object-fill rounded-t-xl"
                  />
                </div>
                <div className="mx-auto max-w-fit text-slate-900 py-2">
                  <h2 className="text-2xl font-bold mb-2">Home</h2>
                  <ul className="text-left">
                    <li>✔️surveillance system</li>
                    <li>✔️Industrial Cabling</li>
                    <li>✔️total IoT integration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:hover:shadow-2xl">
              <div className="bg-slate-200 rounded-xl">
                <div className="mt-0">
                  <img
                    src="/images/stealth-business-work.gif"
                    width="446.5px"
                    alt=""
                    className="object-fill rounded-t-xl"
                  />
                </div>
                <div className="mx-auto max-w-fit text-slate-900 py-2">
                  <h2 className="text-2xl font-bold mb-2">Office</h2>
                  <ul className="text-left">
                    <li>✔️surveillance system</li>
                    <li>✔️Industrial Cabling</li>
                    <li>✔️total IoT integration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:hover:shadow-2xl">
              <div className="bg-slate-200 rounded-xl">
                <div className="mt-0">
                  <img
                    src="/images/EI.gif"
                    width="446.5px"
                    alt=""
                    className="object-fill rounded-t-xl h-[230px]"
                  />
                </div>
                <div className="mx-auto max-w-fit text-slate-900 py-2">
                  <h2 className="text-2xl font-bold mb-2">School</h2>
                  <ul className="text-left">
                    <li>✔️surveillance system</li>
                    <li>✔️Industrial Cabling</li>
                    <li>✔️total IoT integration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:hover:shadow-2xl">
              <div className="bg-slate-200 rounded-xl">
                <div className="mt-0">
                  <img
                    src="/images/islam-geo.gif"
                    width="446.5px"
                    alt=""
                    className="object-fill rounded-t-xl"
                  />
                </div>
                <div className="mx-auto max-w-fit text-slate-900 py-2">
                  <h2 className="text-2xl font-bold mb-2">Islamic</h2>
                  <ul className="text-left">
                    <li>✔️surveillance system</li>
                    <li>✔️Industrial Cabling</li>
                    <li>✔️total IoT integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 3 */}
        <section id="3">
          <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-2xl text-white pt-20 font-bold">
              Unleash your true petentiality
            </h1>
            <p className="text-lg text-white p-4">
              do more with the neutech internet
            </p>
          </div>
          <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-2 gap-4">
            <Image
              src={smartofficePic}
              alt="smarthome"
              width="750"
              height="422"
              // layout="fixed"
              // blurDataURL="data:" //automatically provided
              placeholder="blur"
              // priority
              quality="100%"
            />
            <Image
              src={smartofficePic}
              alt="smarthome"
              width="750"
              height="422"
              // layout="fixed"
              // blurDataURL="data:" //automatically provided
              placeholder="blur"
              // priority
              quality="100%"
            />
          </div>
        </section>
      </div>
    </>
  );
}