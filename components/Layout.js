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
          rel='icon'
          type='image/svg'
          // sizes='120x120'
          // href='./LogosForNeutechWeb/betternetLogoBW.svg'
          href='./LogosForNeutechWeb/betternetLogoBW.svg'
        />
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
