import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";

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
            <p className="mt-6 text-gray-300">
              Enjoy up to 1Gbps fast download speed from BDIX, Game-clients and
              some local FTPs applicable for every plans{" "}
              <a href="#" className="text-blue-600 underline">
                learn more
              </a>
            </p>
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
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Secure|private FTP Access</span>
                </p>
                <p className="my-2 flex">
                  <ExclamationIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Multi-platform Streaming</span>
                </p>
                <p className="my-2 flex">
                  <ExclamationIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Fixed Bandwith</span>
                </p>
                <p className="my-2 flex">
                  <PlusCircleIcon
                    className="h-5 w-5 mr-1 text-orange-500"
                    aria-hidden="true"
                  />
                  <span>Real IPv4</span>
                </p>
                <p className="my-2 flex">
                  <ExclamationIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>QoS Optimization</span>
                </p>
                <p className="my-2 flex">
                  <XCircleIcon
                    className="h-5 w-5 mr-1 text-red-500"
                    aria-hidden="true"
                  />
                  <span>IoT Integration Support</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Advance Parental Controll</span>
                </p>
                <p className="my-2 flex">
                  <XCircleIcon
                    className="h-5 w-5 mr-1 text-red-500"
                    aria-hidden="true"
                  />
                  <span>Workstation Optimization</span>
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
                popular 😎
              </span>
              <div className="text-sm text-gray-600 mt-4 space-y-3">
                <p className="">
                  <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                    40Mbps{" "}
                  </span>
                  (Shared)
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Secure|private FTP Access</span>
                </p>
                <p className="my-2 flex">
                  <ExclamationIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Multi-platform Streaming</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Reliable Bandwith</span>
                </p>
                <p className="my-2 flex">
                  <PlusCircleIcon
                    className="h-5 w-5 mr-1 text-orange-500"
                    aria-hidden="true"
                  />
                  <span>Real IPv4</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>QoS Optimization</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>IoT Integration Support</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Advance Parental Controll</span>
                </p>
                <p className="my-2 flex">
                  <XCircleIcon
                    className="h-5 w-5 mr-1 text-red-500"
                    aria-hidden="true"
                  />
                  <span>Workstation Optimization</span>
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
                <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600">
                  ৳2000
                </h1>
                <p className="text-xl text-gray-700 self-end">/month</p>
              </div>
              <span className="absolute top-0 right-0 text-xs font-semibold inline-block py-1 px-2 rounded-tr-lg text-blue-600 bg-blue-200 uppercase">
                value for money 🎨
              </span>
              <div className="text-sm text-gray-600 mt-4 space-y-3">
                <p className="">
                  <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                    20Mbps{" "}
                  </span>
                  (Dedicated)
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Secure|private FTP Access</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Multi-platform Streaming</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Fixed Bandwith</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Real IPv4 </span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>QoS Optimization</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>IoT Integration Support</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Advance Parental Controll</span>
                </p>
                <p className="my-2 flex">
                  <XCircleIcon
                    className="h-5 w-5 mr-1 text-red-500"
                    aria-hidden="true"
                  />
                  <span>Workstation Optimization</span>
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
                supreme
              </h3>
              <div className="flex mt-8 justify-center">
                <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500">
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
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Secure|private FTP Access</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Multi-platform Streaming</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Fixed Bandwith</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Real IPv4</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Full QoS Support</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Smart Home & IoT Integration Support</span>
                </p>
                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Advance Parental Controll</span>
                </p>

                <p className="my-2 flex">
                  <CheckCircleIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Workstation Optimization</span>
                </p>
              </div>
              <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="md:col-span-4 h-[1.5px] bg-gradient-to-l from-gray-700 via-gray-100 to-gray-700"></div>
          <div className="md:col-span-4">
            <div className="rounded-lg bg-gradient-to-bl from-gray-700 via-gray-900 to-black">
              <div className="h-full bg-hero-pattern bg-hero-size">
                <div className="min-h-full flex items-center justify-center text-white">
                  <div className="grid md:grid-cols-4 gap-4 md:p-24 p-6 max-w-7xl">
                    {/* card 1 */}
                    <div className="p-3 rounded md:row-span-5 md:col-span-2 bg-black/20 ">
                      <h1 className="uppercase">Enhance Your Business With</h1>
                      <h1 className="text-3xl font-bold sm:text-5xl">
                        Our{" "}
                        <span className="text-3xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500">
                          Customized
                        </span>{" "}
                        Services
                      </h1>
                      <p className="mt-6 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <div className="py-6 md:py-8">
                        <button className="bg-transparent hover:bg-tatsuBTN2 transition-all ease-linear text-white text-base font-bold hover:text-white py-4 px-4 border-2 border-slate-400 hover:border-transparent rounded inline-flex items-center">
                          Get a quotation
                        </button>
                      </div>
                    </div>
                    <div className=" p-3 rounded border-l-4 border-l-emerald-400 md:col-span-2 bg-black/50">
                      <h1 className="text-lg font-bold">Managed IT Services</h1>
                      <p>------------------------</p>
                    </div>
                    <div className=" p-3 rounded border-l-4 border-l-emerald-400 md:col-span-2 bg-black/50">
                      <h1 className="text-lg font-bold">Networking Services</h1>
                      <p>------------------------</p>
                    </div>
                    <div className=" p-3 rounded border-l-4 border-l-emerald-400 md:col-span-2 bg-black/50">
                      <h1 className="text-lg font-bold">
                        Data Backup and Restoration
                      </h1>
                      <p>------------------------</p>
                    </div>
                    <div className=" p-3 rounded border-l-4 border-l-emerald-400 md:col-span-2 bg-black/50">
                      <h1 className="text-lg font-bold">
                        Cybersecurity Services
                      </h1>
                      <p>------------------------</p>
                    </div>
                    <div className=" p-3 rounded border-l-4 border-l-emerald-400 md:col-span-2 bg-black/50">
                      <h1 className="text-lg font-bold">Remote Support</h1>
                      <p>------------------------</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
