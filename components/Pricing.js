import { CheckIcon, XIcon } from "@heroicons/react/solid";

export default function Pricing() {
  return (
    <>
      <section className="text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-2">
          {/* package one */}
          <div className="flex flex-col md:flex-row px-2 md:px-0">
            <div className="w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
              <h3 className="text-gray-800 uppercase font-bold">grappler</h3>
              <div className="flex mt-8 justify-center">
                <h1 className="text-5xl text-indigo-800 font-black">৳700</h1>
                <p className="text-xl text-gray-700 self-end">/month</p>
              </div>
              <div className="text-sm text-gray-600 mt-4 space-y-3">
                <p className="uppercase text-black">what are you getting</p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>2 AM-8 PM - 40 Mbps.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>8 PM-2 AM - 10 Mbps.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Unlimited BDIX Bandwidth.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>4K Youtube and Facebook Stream.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>IPv6 Public IP Only</span>
                </p>
              </div>
              <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
                Choose Plan
              </button>
            </div>
          </div>

          {/* package two */}
          <div className="flex flex-col md:flex-row px-2 md:px-0">
            <div className="w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
              <h3 className="text-gray-800 uppercase font-bold">mainstream</h3>
              <div className="flex mt-8 justify-center">
                <h1 className="text-5xl text-indigo-800 font-black">৳1000</h1>
                <p className="text-xl text-gray-700 self-end">/month</p>
              </div>
              <div className="text-sm text-gray-600 mt-4 space-y-3">
                <p className="uppercase text-black">what are you getting</p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>2 AM-8 PM - 40 Mbps.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>8 PM-2 AM - 10 Mbps.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Unlimited BDIX Bandwidth.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>4K Youtube and Facebook Stream.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>IPv6 Public IP Only</span>
                </p>
              </div>
              <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
                Choose Plan
              </button>
            </div>
          </div>

          {/* package three */}
          <div className="flex flex-col md:flex-row px-2 md:px-0">
            <div className="w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
              <h3 className="text-gray-800 uppercase font-bold">express</h3>
              <div className="flex mt-8 justify-center">
                <h1 className="text-5xl text-indigo-800 font-black">৳2000</h1>
                <p className="text-xl text-gray-700 self-end">/month</p>
              </div>
              <div className="text-sm text-gray-600 mt-4 space-y-3">
                <p className="uppercase text-black">what are you getting</p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>2 AM-8 PM - 40 Mbps.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>8 PM-2 AM - 10 Mbps.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Unlimited BDIX Bandwidth.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>4K Youtube and Facebook Stream.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>IPv6 Public IP Only</span>
                </p>
              </div>
              <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
                Choose Plan
              </button>
            </div>
          </div>

          {/* package three */}
          <div className="flex flex-col md:flex-row px-2 md:px-0">
            <div className="w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl transition duration-100 ease-in-out p-6 md:mr-4 mb-10 md:mb-0">
              <h3 className="text-gray-800 uppercase font-bold">ultimate</h3>
              <div className="flex mt-8 justify-center">
                <h1 className="text-5xl text-indigo-800 font-black">৳3000</h1>
                <p className="text-xl text-gray-700 self-end">/month</p>
              </div>
              <div className="text-sm text-gray-600 mt-4 space-y-3">
                <p className="uppercase text-black">what are you getting</p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>2 AM-8 PM - 40 Mbps.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>8 PM-2 AM - 10 Mbps.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>Unlimited BDIX Bandwidth.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>4K Youtube and Facebook Stream.</span>
                </p>
                <p className="my-2 flex">
                  <CheckIcon
                    className="h-5 w-5 mr-1 text-green-500"
                    aria-hidden="true"
                  />
                  <span>IPv6 Public IP Only</span>
                </p>
              </div>
              <button className="w-full text-purple-700 border border-purple-700 rounded hover:bg-purple-700 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
