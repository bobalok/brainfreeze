import { CheckIcon, XIcon } from "@heroicons/react/solid";

export default function Pricing() {
  return (
    <>
      <section className="text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-4">
          <div className="md:col-span-4 mb-6">
            <p className="mt-6 text-gray-300 uppercase">monthly</p>
            <h2 className="text-3xl font-bold sm:text-5xl">
              Pricing{" "}
              <span className="text-3xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                plans
              </span>
            </h2>
          </div>

          {/* package one */}
          <div className="flex flex-col md:flex-row px-2 md:px-0">
            <div className="w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl  duration-300 ease-in-out transition-transform transform hover:-translate-y-2 p-6 mb-10 md:mb-0">
              <h3 className="text-gray-700 uppercase text-xl font-bold">
                grappler
              </h3>
              <div className="flex mt-8 justify-center">
                <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-bl from-green-200 via-green-400 to-purple-700">
                  ৳700
                </h1>
                <p className="text-xl text-gray-700 self-end">/month</p>
              </div>
              <div className="text-sm text-gray-600 mt-4 space-y-3">
                <p className="">
                  <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                    20Mbps{" "}
                  </span>
                  (Shared)
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>----------</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>----------</span>
                </p>
                <p className="my-2 flex">
                  <XIcon
                    className="h-5 w-5 mr-1 text-red-500"
                    aria-hidden="true"
                  />
                  <span>Fixed Bandwith Speed</span>
                </p>
                <p className="my-2 flex">
                  <XIcon
                    className="h-5 w-5 mr-1 text-red-500"
                    aria-hidden="true"
                  />
                  <span>QoS Optimization</span>
                </p>
                <p className="my-2 flex">
                  <XIcon
                    className="h-5 w-5 mr-1 text-red-500"
                    aria-hidden="true"
                  />
                  <span>Real IPv4</span>
                </p>
              </div>
              <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
                Choose Plan
              </button>
            </div>
          </div>

          {/* package two */}
          <div className="flex flex-col md:flex-row px-2 md:px-0">
            <div className="w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl duration-300 ease-in-out transition-transform transform hover:-translate-y-2 p-6 mb-10 md:mb-0">
              <h3 className="text-gray-700 uppercase text-xl font-bold">
                mainstream
              </h3>
              <div className="flex mt-8 justify-center">
                <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-bl from-rose-400 via-fuchsia-500 to-indigo-500">
                  ৳1000
                </h1>
                <p className="text-xl text-gray-700 self-end">/month</p>
              </div>
              <span className="absolute top-0 right-0 text-xs font-semibold inline-block py-1 px-2 rounded-tr-lg text-fuchsia-600 bg-fuchsia-200 uppercase">
                popular ❤️
              </span>
              <div className="text-sm text-gray-600 mt-4 space-y-3">
                <p className="">
                  <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                    40Mbps{" "}
                  </span>
                  (Shared)
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>----------</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>----------</span>
                </p>
                <p className="my-2 flex">
                  <XIcon
                    className="h-5 w-5 mr-1 text-red-500"
                    aria-hidden="true"
                  />
                  <span>Fixed Bandwith Speed</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>QoS Optimization</span>
                </p>
                <p className="my-2 flex">
                  <XIcon
                    className="h-5 w-5 mr-1 text-red-500"
                    aria-hidden="true"
                  />
                  <span>Real IPv4</span>
                </p>
              </div>
              <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
                Choose Plan
              </button>
            </div>
          </div>

          {/* package three */}
          <div className="flex flex-col md:flex-row px-2 md:px-0">
            <div className="w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl duration-300 ease-in-out transition-transform transform hover:-translate-y-2 p-6 mb-10 md:mb-0">
              <h3 className="text-gray-700 uppercase text-xl font-bold">
                express
              </h3>
              <div className="flex mt-8 justify-center">
                <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
                  ৳2000
                </h1>
                <p className="text-xl text-gray-700 self-end">/month</p>
              </div>
              <span className="absolute top-0 right-0 text-xs font-semibold inline-block py-1 px-2 rounded-tr-lg text-orange-600 bg-orange-200 uppercase">
                value for money 😎
              </span>
              <div className="text-sm text-gray-600 mt-4 space-y-3">
                <p className="">
                  <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                    20Mbps{" "}
                  </span>
                  (Dedicated)
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>----------</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>----------</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Fixed Bandwith Speed</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>QoS Optimization</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Real IPv4 </span>
                </p>
              </div>
              <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
                Choose Plan
              </button>
            </div>
          </div>

          {/* package four */}
          <div className="flex flex-col md:flex-row px-2 md:px-0">
            <div className="w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl duration-300 ease-in-out transition-transform transform hover:-translate-y-2 p-6 mb-10 md:mb-0">
              <h3 className="text-gray-700 uppercase text-xl font-bold">
                ultimate
              </h3>
              <div className="flex mt-8 justify-center">
                <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600">
                  ৳4000
                </h1>
                <p className="text-xl text-gray-700 self-end">/month</p>
              </div>
              <div className="text-sm text-gray-600 mt-4 space-y-3">
                <p className="">
                  <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                    50Mbps{" "}
                  </span>
                  (Dedicated)
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>----------</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>----------</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Fixed Bandwith Speed</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>QoS Optimization</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Real IPv4</span>
                </p>
              </div>
              <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="md:col-span-4 ">
            <div className="md:h-96 h-64 rounded-lg  bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600">
              <div className="h-full w-full bg-hero-pattern bg-hero-size"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
