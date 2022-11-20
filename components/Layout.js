// import Navbar from './Navbar';

import Navi from "./Navi";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-to-top";
import { ChevronUpIcon } from "@heroicons/react/solid";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='./meta/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='./meta/favicon-32x32.png'
        />
        <link
          rel='icon'
          // type='image/png'
          sizes='16x16'
          href='./meta/favicon-16x16.png'
        />
        <link rel='manifest' href='./meta/site.webmanifest' />
        <link
          rel='mask-icon'
          href='./meta/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Navi />

      <ScrollToTop
        smooth
        top={1000}
        component={
          <ChevronUpIcon className='bg-gradient-to-br from-sky-400 to-blue-500 rounded-sm text-white' />
        }
      />

      <main className='font-default select-none dark:bg-tatsuBG bg-thirdGray bg-hero-pattern bg-hero-size'>
        {children}
      </main>
      <Footer />
    </>
  );
}
