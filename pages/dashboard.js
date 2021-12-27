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

      <section className="text-center flex justify-center mx-auto h-screen top-full">
        <div className="max-w-2xl mx-auto pt-20">
          <h1 className="text-5xl md:text-7xl text-white font-extrabold py-20 p-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
              betternet
            </span>{' '}
            for new generation
          </h1>
          <p className="text-lg md:text-2xl text-white">
            neutechbd.com is the most unified <br />
            internet service provider <br />
            enterprise grade solution
            <br />
            everywhere.
          </p>
          <div className="px-8 p-4">
            <button className="bg-tatsuBTN hover:bg-white transition-all ease-linear text-white text-xl font-semibold hover:text-tatsuBTN py-4 px-4 border-2 border-indigo-400 hover:border-transparent rounded inline-flex items-center">
              Get started
            </button>
            <span className="mx-1 text-white">or</span>
            <button className="bg-transparent hover:bg-tatsuBTN2 transition-all ease-linear text-white text-xl font-semibold hover:text-white py-4 px-4 border-2 border-slate-400 hover:border-transparent rounded inline-flex items-center">
              Try free!
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
