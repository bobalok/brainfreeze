import Head from "next/head";
import BetterNetForNewGeneration from "../components/BetterNetForNewGeneration";
import ContactUs from "../components/ContactUs";
import Gamers from "../components/Gamers";
import HANetwork from "../components/HANetwork";
import HorizontalLine from "../components/HorizontalLine";
import PricingPlans from "../components/PricingPlans";
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
        <Gamers />
        <HorizontalLine />
        <HANetwork />
        <HorizontalLine />
        <PricingPlans />
        <HorizontalLine />
        <ContactUs />
      </div>
    </>
  );
}
