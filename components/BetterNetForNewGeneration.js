import { LinkIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
export default function BetterNetForNewGeneration() {
  return (
    <>
      <section className="max-w-2xl mx-auto">
        {/* Heading Goes Here */}

        <motion.div exit={{ opacity: 0 }}>
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl text-white font-extrabold px-6 py-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                betternet
              </span>{" "}
              for new generation
            </h1>
            {/* Subheading Goes Here */}
            <p className="text-lg md:text-2xl text-white">
              unified internet service provider, <br />
              enterprise grade solution
              <br />
              everywhere.
            </p>

            {/* CTA Buttons */}

            <div className="px-8 py-10">
              {/* <button className="bg-tatsuBTN hover:bg-white transition-all ease-linear text-white text-base font-bold hover:text-tatsuBTN py-4 px-4 border-2 border-indigo-400 hover:border-transparent rounded inline-flex items-center">
              Get started
            </button>
            <span className="mx-1 text-white">or</span> */}
              <button className="bg-transparent hover:bg-tatsuBTN2 transition-all ease-linear text-white text-base font-bold hover:text-white py-4 px-4 border-2 border-slate-400 hover:border-transparent rounded inline-flex items-center">
                <LinkIcon className="w-6 h-6 mr-1" />
                Connect me
              </button>
            </div>
            {/* ShortParagraph/marketing Goes Here */}
            <h1 className="text-2xl font-bold text-white mx-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                70% faster internet
              </span>{" "}
              and more efficient
            </h1>
            <p className="text-lg max-w-lg text-white md:mx-auto mx-2 pb-8">
              consume the bandwidth more efficiently ever than before enjoy up
              to{" "}
              <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                1Gbps
              </span>{" "}
              fast transfer speed from these servers
            </p>
          </div>

          {/* Grid Logos goes here */}

          <div className="mx-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 items-center justify-items-center">
            <div>
              <img
                width="64"
                height="auto"
                src="./LogosForNeutechWeb/steam.svg"
                alt="Steam"
              />
            </div>
            <div>
              <img
                width="64"
                height="auto"
                src="./LogosForNeutechWeb/epic.svg"
                alt="Epic Games"
              />
            </div>
            <div>
              <img
                width="64"
                height="auto"
                src="./LogosForNeutechWeb/rockstar.svg"
                alt="Rockstar Games"
              />
            </div>
            <div>
              <img
                width="64"
                height="auto"
                src="./LogosForNeutechWeb/origin.svg"
                alt="EA Origin"
              />
            </div>
            <div>
              <img
                width="84"
                height="auto"
                src="./LogosForNeutechWeb/riotgames.svg"
                alt="riotgames"
              />
            </div>
            <div>
              <img
                width="64"
                height="auto"
                src="./LogosForNeutechWeb/ubisoft.svg"
                alt="ubisoft"
              />
            </div>
            <div>
              <img
                width="64"
                height="auto"
                src="./LogosForNeutechWeb/bdix.svg"
                alt=""
              />
            </div>
            <div>
              <img
                width="64"
                height="auto"
                src="./LogosForNeutechWeb/ftp.svg"
                alt="best ftp in bangladesh"
              />
            </div>
            <div>
              <img
                width="64"
                height="auto"
                src="./LogosForNeutechWeb/youtube.svg"
                alt="youtube"
              />
            </div>
            <div>
              <img
                width="64"
                height="auto"
                src="./LogosForNeutechWeb/wsus.svg"
                alt="windows software update server"
              />
            </div>
            <div>
              <img
                width="64"
                height="auto"
                src="./LogosForNeutechWeb/facebook.svg"
                alt="metaverse"
              />
            </div>
            <div>
              <img
                width="50"
                height="auto"
                src="./neutechLogobwNoText.svg"
                alt="neutech"
              />
            </div>
          </div>
          <span className="py-4 text-gray-500 flex justify-center text-center mx-6">
            and more with terms and conditions applied*
          </span>
        </motion.div>
      </section>
    </>
  );
}
