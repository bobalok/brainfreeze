import Head from "next/head";
import BetterNetForNewGeneration from "../components/BetterNetForNewGeneration";
import ContactUs from "../components/ContactUs";
import Gamers from "../components/Gamers";
import HorizontalLine from "../components/HorizontalLine";
import Pricing from "../components/Pricing";
import UnifiedMediaService from "../components/UnifiedMediaService";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent";

export default function Home() {
  return (
    <>
      <Head>
        <title>betternet | Home</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="flex flex-col items-center h-full">
        <BetterNetForNewGeneration />
        <HorizontalLine />
        <WhatMakesUsDifferent />
        <HorizontalLine />
        <UnifiedMediaService />
        {/* <HorizontalLine /> */}
        <Gamers />
        <HorizontalLine />
        <Pricing />
        <HorizontalLine />
        <ContactUs />
      </div>
    </>
  );
}
