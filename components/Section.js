import Image from "next/legacy/image";
import CCC from "../public/images/businessSol.png";

export default function Section() {
  return (
    <>
      <section className="text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-4">
          <div className="max-w-xl">
            <p className="mt-6 text-gray-300 uppercase">
              secure your home and office
            </p>
            <h1 className="text-3xl font-bold sm:text-5xl">
              Best{" "}
              <span className="text-3xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                surveillance
              </span>{" "}
              solution
            </h1>
            <p className="mt-6 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="mx-auto pt-8">
              <button className="hidden bg-transparent hover:bg-tatsuBTN2 transition-all ease-linear text-white text-base font-bold hover:text-white py-4 px-4 border-2 border-slate-400 hover:border-transparent rounded md:inline-flex items-center">
                Learn more!
              </button>
            </div>
          </div>

          <div className="">
            <Image
              src={CCC}
              className="rounded-lg"
              alt="smarthome"
              // width="850"
              // height="478.125"
              layout="intrinsic"
              // blurDataURL="data:" //automatically provided
              placeholder="blur"
              // quality="100"
              // priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
