import Head from "next/head";
import BetterNetForNewGeneration from "../components/BetterNetForNewGeneration";
import CompleteWifi from "../components/CompleteWifi";
import ContactUs from "../components/ContactUs";
import Gamers from "../components/Gamers";
import HANetwork from "../components/HANetwork";
import HorizontalLine from "../components/HorizontalLine";
import PricingPlans from "../components/PricingPlans";
import UnifiedMediaService from "../components/UnifiedMediaService";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent";
import MediaServiceYouDeserve from "../components/MediaServiceYouDeserve";

export default function Home() {
  return (
    <>
      <Head>
        <title>betternet | Home</title>
      </Head>

      <div className='flex flex-col items-center h-full'>
        <BetterNetForNewGeneration />
        <HorizontalLine />
        <MediaServiceYouDeserve />
        <UnifiedMediaService />
        <Gamers />
        <HorizontalLine />
        <HANetwork />
        <WhatMakesUsDifferent />
        <HorizontalLine />
        <CompleteWifi />
        <HorizontalLine />
        <PricingPlans />
        <HorizontalLine />
        <ContactUs />
      </div>
    </>
  );
}
