// import NetworkBlip from "../public/videos/video2.mp4";
export default function HANetwork() {
  return (
    <>
      <section>
        <div className="max-w-7xl mx-auto px-4 md:py-16 pb-6 sm:px-6 lg:px-8">
          <div className="">
            <h1 className="text-5xl font-bold text-white pb-4 md:text-center">
              High Availability 24x7
            </h1>
            <p className="text-gray-300 md:text-center max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <video
            className="w-full aspect-video shadow-2xl rounded-lg my-10"
            // controls
            autoPlay
            muted
            loop
            src="/videos/video2.mp4"
            type="video/mp4"
          ></video>
        </div>
      </section>
    </>
  );
}
