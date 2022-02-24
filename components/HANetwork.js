import Image from "next/image";

import WFH from "../public/images/wfh.gif";
import WFO from "../public/images/wfo.gif";
import IIS1 from "../public/images/islam-geo.gif";
import IIS2 from "../public/images/islam.gif";
import EDU1 from "../public/images/edu1.gif";
import EDU2 from "../public/images/edu2.gif";

// import NetworkBlip from "../public/videos/video2.mp4";

export default function HANetwork() {
  return (
    <>
      <section className='dark:text-white text-textGray'>
        <div className='xl:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:py-16 sm:px-6 lg:px-8'>
          <div className=''>
            <h1 className='text-3xl font-bold sm:text-5xl  pb-4 md:text-center mt-6'>
              High Availability 24x7
            </h1>
            <p className='0 md:text-center max-w-xl mx-auto'>
              Your Internet should be at its best every day. We’re committed to
              investing in the capacity and reliability of our network
            </p>
          </div>
          <video
            className='w-full aspect-video shadow-2xl rounded my-10'
            // controls
            autoPlay
            muted
            loop
            src='/videos/HANetwork.webm'
            type='video/webm'
          ></video>
        </div>
        {/* ------------##################==================+++++++++++++++ */}
      </section>
    </>
  );
}
