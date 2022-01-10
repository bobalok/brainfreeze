import Head from "next/head";
import BetterNetForNewGeneration from "../components/BetterNetForNewGeneration";
import Gamers from "../components/Gamers";
import HorizontalLine from "../components/HorizontalLine";
import Pricing from "../components/Pricing";
import UnifiedMediaService from "../components/UnifiedMediaService";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | internet for new generation</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="flex flex-col items-center h-full">
        <BetterNetForNewGeneration />
        <HorizontalLine />
        <WhatMakesUsDifferent />
        <HorizontalLine />
        <UnifiedMediaService />
        <HorizontalLine />
        <Pricing />
      </div>
    </>
  );
}
