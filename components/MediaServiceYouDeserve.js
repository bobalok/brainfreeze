import React from "react";

export default function MediaServiceYouDeserve() {
  return (
    <>
      <section className='dark:text-white text-textGray'>
        <div className='xl:max-w-5xl 2xl:max-w-7xl mx-auto px-4 md:py-16 sm:px-6 lg:px-8'>
          <div className=''>
            {/* <h1 className='text-3xl font-bold sm:text-5xl  pb-4 md:text-center mt-6'>
              Media Service You Deserve
            </h1>
            <p className='md:text-center max-w-xl mx-auto'>
              why wait for the downloads while you can directly stream your
              favorite titles on your devices seamlessly regardless of the
              bandwidth speed entitled to your subscribed plans
            </p> */}
          </div>
          <video
            className='w-full aspect-video shadow-2xl rounded my-10'
            controls
            // autoPlay
            muted
            loop
            src='/videos/Streamingservice.mp4'
            type='video/mp4'
          ></video>
        </div>
      </section>
    </>
  );
}
