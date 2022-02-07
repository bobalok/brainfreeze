// import Navbar from './Navbar';

import Navi from "./Navi";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-to-top";
import { ChevronDoubleUpIcon, ChevronUpIcon } from "@heroicons/react/solid";
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
          type='image/png'
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
        color='blue'
        smooth
        top={1000}
        component={<ChevronUpIcon />}
      />
      <main className='dark:bg-tatsuBG bg-thirdGray bg-hero-pattern bg-hero-size'>
        {/* <Image
          className=""
          src="/images/landing-page-background-pattern.png"
          alt="Picture of the author"
          layout="intrinsic"
          width={2881}
          height={820}
        /> */}
        {children}
      </main>
      <Footer />
    </>
  );
}
