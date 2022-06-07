import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationIcon,
  PlusCircleIcon,
  PlayIcon,
  ArrowCircleUp,
  CloudUploadIcon,
  ArrowCircleDownIcon,
  CloudDownloadIcon,
  UserIcon,
} from "@heroicons/react/solid";

export default function PricingPlans() {
  return (
    <>
      <section id='pricing'>
        <div className='xl:max-w-5xl 2xl:max-w-7xl w-screen lg:py-16 px-4 sm:px-10 md:px-8 lg:px-8 lg:pb-16'>
          <div className='mb-6'>
            <p className='mt-6 dark:text-white text-textGray uppercase'>
              pricing
            </p>
            <h2 className='text-3xl font-bold sm:text-5xl dark:text-white text-textGray'>
              Subscription{" "}
              <span className='text-3xl font-extrabold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                plans
              </span>
            </h2>
            <p className='mt-6 dark:text-white text-textGray sm:text-lg'>
              Are you a light surfer or a high speed streamer? Just checking
              email or gaming for hours online? Whether you use the Internet a
              lot or a little, we have packages that will suit your needs.{" "}
              <span className='italic'>
                Enjoy up to 1Gbps fast download speed from BDIX, Game-clients
                and local FTPs applicable for every plans
              </span>{" "}
              {/* <br /> */}
              <a href='#' className='text-blue-600 underline'>
                learn more
              </a>
            </p>
          </div>
          <div className='space-y-8 pb-4 mt-14 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2 2xl:grid-cols-4'>
            {/* GRAPPLER package one */}
            <div className='flex flex-col md:flex-row px-2 md:px-0'>
              <div className='w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl  duration-300 ease-in-out transition-transform transform hover:-translate-y-2 p-6 mb-10 md:mb-0'>
                <h3 className='text-gray-700 uppercase text-xl font-bold'>
                  grappler 🔰
                </h3>
                <div className='flex mt-8 justify-center'>
                  <h1 className='text-5xl font-black bg-clip-text text-transparent bg-gradient-to-bl from-green-200 via-green-400 to-purple-700'>
                    <span className='font-mono'>৳</span>1000
                  </h1>
                  <p className='text-xl text-gray-700 self-end'>/month</p>
                </div>
                <span className='absolute -mt-3 mr-3 top-0 shadow-xl right-0 text-xs font-semibold inline-block py-1 px-2 rounded text-green-600 bg-green-200 uppercase'>
                  popular
                </span>
                <div className='text-sm text-gray-600 mt-4 space-y-3'>
                  <p className=''>
                    <span className='text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                      10Mbps{" "}
                    </span>
                    (up to 40Mbps)
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Secure | private FTP Access</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Value-added services</span>
                  </p>
                  <p className='my-2 flex'>
                    <ExclamationIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Gigabit Networking</span>
                  </p>
                  <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-orange-500'
                      aria-hidden='true'
                    />
                    <span>Public IPv4</span>
                  </p>
                  <p className='my-2 flex'>
                    <ExclamationIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>QoS Optimization</span>
                  </p>
                  <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-orange-500'
                      aria-hidden='true'
                    />
                    <span>Advance Network Filtration</span>
                  </p>
                  {/* <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-gray-500'
                      aria-hidden='true'
                    />
                    <span>Smart Home Integration</span>
                  </p> */}

                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Parental Control Access*</span>
                  </p>
                  {/* <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-gray-500'
                      aria-hidden='true'
                    />
                    <span>Workstation Optimization</span>
                  </p> */}
                  <hr className='text-gray-200' />
                  <p className='my-2 flex'>
                    <UserIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>1 Individual VAS Account</span>
                  </p>
                  <p className='my-2 flex'>
                    <PlayIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Media-on-demand</span>
                  </p>
                  <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-orange-500'
                      aria-hidden='true'
                    />
                    <span>Remoteplay Access</span>
                  </p>
                </div>
                <a
                  href='https://docs.google.com/forms/d/e/1FAIpQLSc1Sqr6wkSqnee0sRN4jlgJxtGXFL01XQ0f_AqYZ2GOAIRp0Q/viewform?usp=pp_url&entry.1911656282=GRAPPLER+%F0%9F%94%B0+%7C%7C+TK.1000+%7C%7C+up+to+40mbps'
                  target='_blank'
                >
                  <button className='font-bold w-full text-tatsuBTN2 border border-tatsuBTN2 rounded hover:bg-tatsuBTN2 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4'>
                    GET STARTED
                  </button>
                </a>
              </div>
            </div>
            {/* MAINSTREAM package two */}

            <div className='flex flex-col md:flex-row px-2 md:px-0'>
              <div className='w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl duration-300 ease-in-out transition-transform transform hover:-translate-y-2 p-6 mb-10 md:mb-0'>
                <h3 className='text-gray-700 uppercase text-xl font-bold'>
                  mainstream ✨
                </h3>

                <div className='flex mt-8 justify-center'>
                  <h1 className='text-5xl font-black bg-clip-text text-transparent bg-gradient-to-bl from-rose-400 via-fuchsia-500 to-indigo-500'>
                    <span className='font-mono'>৳</span>1200
                  </h1>
                  <p className='text-xl text-gray-700 self-end'>/month</p>
                </div>
                {/* <span className='absolute -mt-3 mr-3 top-0 shadow-xl right-0 text-xs font-semibold inline-block py-1 px-2 rounded text-fuchsia-600 bg-fuchsia-200 uppercase'>
                  popular
                </span> */}

                <div className='text-sm text-gray-600 mt-4 space-y-3'>
                  <p className=''>
                    <span className='text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                      15Mbps{" "}
                    </span>
                    (up to 50Mbps)
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Secure | private FTP Access</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Value-added services</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Gigabit Networking</span>
                  </p>
                  <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-orange-500'
                      aria-hidden='true'
                    />
                    <span>Public IPv4</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>QoS Optimization</span>
                  </p>
                  <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-orange-500'
                      aria-hidden='true'
                    />
                    <span>Advance Network Filtration</span>
                  </p>
                  {/* <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-gray-500'
                      aria-hidden='true'
                    />
                    <span>Smart Home Integration</span>
                  </p> */}

                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Parental Controll Access*</span>
                  </p>
                  {/* <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-gray-500'
                      aria-hidden='true'
                    />
                    <span>Workstation Optimization</span>
                  </p> */}
                  <hr className='text-gray-200' />
                  <p className='my-2 flex'>
                    <UserIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>2 Individual VAS Account</span>
                  </p>
                  <p className='my-2 flex'>
                    <PlayIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Media-on-demand</span>
                  </p>
                  <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-orange-500'
                      aria-hidden='true'
                    />
                    <span>Remoteplay Access</span>
                  </p>
                </div>
                <a
                  href='https://docs.google.com/forms/d/e/1FAIpQLSc1Sqr6wkSqnee0sRN4jlgJxtGXFL01XQ0f_AqYZ2GOAIRp0Q/viewform?usp=pp_url&entry.1911656282=MAINSTREAM+%E2%9C%A8+%7C%7C+TK.1200+%7C%7C+up+to+50mbps'
                  target='_blank'
                >
                  <button className='font-bold w-full text-tatsuBTN2 border border-tatsuBTN2 rounded hover:bg-tatsuBTN2 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4'>
                    GET STARTED
                  </button>
                </a>
              </div>
            </div>

            {/* EXPRESS package three */}
            <div className='flex flex-col md:flex-row px-2 md:px-0'>
              <div className='w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl duration-300 ease-in-out transition-transform transform hover:-translate-y-2 p-6 mb-10 md:mb-0'>
                <h3 className='text-gray-700 uppercase text-xl font-bold'>
                  express 🎨
                </h3>
                <div className='flex mt-8 justify-center'>
                  <h1 className='text-5xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600'>
                    <span className='font-mono'>৳</span>1500
                  </h1>
                  <p className='text-xl text-gray-700 self-end'>/month</p>
                </div>
                <span className='absolute -mt-3 mr-3 top-0 shadow-xl right-0 text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 uppercase'>
                  recomended
                </span>
                <div className='text-sm text-gray-600 mt-4 space-y-3'>
                  <p className=''>
                    <span className='text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                      30Mbps{" "}
                    </span>
                    (up to 60Mbps)
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Secure | private FTP Access</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Value-added services</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Gigabit Networking</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Public IPv4</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>QoS Optimization</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Advance Network Filtration</span>
                  </p>
                  {/* <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-gray-500'
                      aria-hidden='true'
                    />
                    <span>Smart Home Integration</span>
                  </p> */}

                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Parental Controll Access*</span>
                  </p>
                  {/* <p className='my-2 flex'>
                    <XCircleIcon
                      className='h-5 w-5 mr-1 text-gray-500'
                      aria-hidden='true'
                    />
                    <span>Workstation Optimization</span>
                  </p> */}
                  <hr className='text-gray-200' />
                  <p className='my-2 flex'>
                    <UserIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>3 Individual VAS Account</span>
                  </p>
                  <p className='my-2 flex'>
                    <PlayIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Media-on-demand</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Remoteplay Access</span>
                  </p>
                </div>
                <a
                  href='https://docs.google.com/forms/d/e/1FAIpQLSc1Sqr6wkSqnee0sRN4jlgJxtGXFL01XQ0f_AqYZ2GOAIRp0Q/viewform?usp=pp_url&entry.1911656282=EXPRESS+%F0%9F%8E%A8+%7C%7C+TK.1500+%7C%7C+up+to+60mbps'
                  target='_blank'
                >
                  <button className='font-bold w-full text-tatsuBTN2 border border-tatsuBTN2 rounded hover:bg-tatsuBTN2 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4'>
                    GET STARTED
                  </button>
                </a>
              </div>
            </div>

            {/* SUPREME package four */}
            <div className='flex flex-col md:flex-row px-2 md:px-0'>
              <div className='w-full md:w-1/1 bg-white rounded-lg shadow hover:shadow-2xl duration-300 ease-in-out transition-transform transform hover:-translate-y-2 p-6 mb-10 md:mb-0'>
                <h3 className='text-gray-700 uppercase text-xl font-bold'>
                  supreme 🚀
                </h3>
                <div className='flex mt-8 justify-center'>
                  <h1 className='text-5xl font-black bg-clip-text text-transparent bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500'>
                    <span className='font-mono'>৳</span>2500
                  </h1>
                  <p className='text-xl text-gray-700 self-end'>/month</p>
                </div>
                <div className='text-sm text-gray-600 mt-4 space-y-3'>
                  <p className=''>
                    <span className='text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-500'>
                      50Mbps{" "}
                    </span>
                    (up to 90Mbps)
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Secure | private FTP Access</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Value-added services</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Gigabit Networking</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Public IPv4</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>QoS Optimization</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Advance Network Filtration</span>
                  </p>
                  {/* <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Smart Home Integration</span>
                  </p> */}
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Parental Controll Access*</span>
                  </p>

                  {/* <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Workstation Optimization</span>
                  </p> */}
                  <hr className='text-gray-200' />
                  <p className='my-2 flex'>
                    <UserIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>3+ Individual VAS Account</span>
                  </p>
                  <p className='my-2 flex'>
                    <PlayIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Media-on-demand</span>
                  </p>
                  <p className='my-2 flex'>
                    <CheckCircleIcon
                      className='h-5 w-5 mr-1 text-green-500'
                      aria-hidden='true'
                    />
                    <span>Remoteplay Access</span>
                  </p>
                </div>
                <a
                  href='https://docs.google.com/forms/d/e/1FAIpQLSc1Sqr6wkSqnee0sRN4jlgJxtGXFL01XQ0f_AqYZ2GOAIRp0Q/viewform?usp=pp_url&entry.1911656282=SUPREME+%F0%9F%9A%80+%7C%7C+TK.2500+%7C%7C+up+to+90mbps'
                  target='_blank'
                >
                  <button className='font-bold w-full text-tatsuBTN2 border border-tatsuBTN2 rounded hover:bg-tatsuBTN2 hover:text-white hover:shadow-xl transition duration-150 ease-in-out py-4 mt-4'>
                    GET STARTED
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* <div className='h-[.5px] bg-gradient-to-l from-gray-700 via-gray-100 to-gray-700'></div> */}
          {/* <div className='py-14 lg:py-4'>
            <div className='rounded-lg bg-gradient-to-bl from-sky-400 to-blue-500 md:max-w-4xl xl:max-w-7xl mx-auto'>
              <div className='h-full bg-hero-pattern bg-hero-size'>
                <div className='min-h-full flex items-center justify-center text-white'>
                  <div className='grid md:grid-cols-2 2xl:grid-cols-4 gap-4 p-6 md:p-20 max-w-7xl'>
                    <div className='p-6 rounded  md:col-span-2 bg-black/20 '>
                      <h1 className='uppercase'>Enhance Your Business With</h1>
                      <h1 className='text-3xl font-bold sm:text-5xl'>
                        Our Customized Services
                      </h1>
                      <p className='mt-6 '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                    </div>

                    <div className=' p-6 rounded md:col-span-2  bg-white text-gray-800'>
                      <form action='' className='space-y-4'>
                        <div>
                          <label className='sr-only' htmlFor='company-name'>
                            Company Name
                          </label>
                          <input
                            className='w-full p-3 text-sm border-gray-200 rounded-lg'
                            placeholder='Company Name'
                            type='text'
                            id='cname'
                          />
                        </div>

                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                          <div>
                            <label className='sr-only' htmlFor='email'>
                              Email
                            </label>
                            <input
                              className='w-full p-3 text-sm border-gray-200 rounded-lg'
                              placeholder='Company Email address'
                              type='email'
                              id='email'
                            />
                          </div>

                          <div>
                            <label className='sr-only' htmlFor='phone'>
                              Phone
                            </label>
                            <input
                              className='w-full p-3 text-sm border-gray-200 rounded-lg'
                              placeholder='Phone Number'
                              type='tel'
                              id='phone'
                            />
                          </div>
                        </div>

                        <div className='grid grid-cols-1 gap-4 text-center sm:grid-cols-3'>
                          <div>
                            <input
                              className='sr-only'
                              id='option1'
                              type='radio'
                              tabIndex='-1'
                            />
                            <label
                              htmlFor='option1'
                              className='block w-full p-3 border border-gray-200 rounded-lg'
                              tabIndex='0'
                            >
                              <span className='text-sm font-medium'>
                                {" "}
                                Small{" "}
                              </span>
                            </label>
                          </div>

                          <div>
                            <input
                              className='sr-only'
                              id='option2'
                              type='radio'
                              tabIndex='-1'
                            />
                            <label
                              htmlFor='option2'
                              className='block w-full p-3 border border-gray-200 rounded-lg'
                              tabIndex='0'
                            >
                              <span className='text-sm font-medium'>
                                {" "}
                                Medium{" "}
                              </span>
                            </label>
                          </div>

                          <div>
                            <input
                              className='sr-only'
                              id='option3'
                              type='radio'
                              tabIndex='-1'
                            />
                            <label
                              htmlFor='option3'
                              className='block w-full p-3 border border-gray-200 rounded-lg'
                              tabIndex='0'
                            >
                              <span className='text-sm font-medium'>
                                {" "}
                                Enterprise{" "}
                              </span>
                            </label>
                          </div>
                        </div>

                        <div>
                          <label className='sr-only' htmlFor='message'>
                            Message
                          </label>
                          <textarea
                            className='w-full p-3 text-sm border-gray-200 rounded-lg'
                            placeholder='Message'
                            rows='8'
                            id='message'
                          ></textarea>
                        </div>

                        <div className='mt-4'>
                          <button
                            type='submit'
                            className='inline-flex items-center justify-center w-full px-5 py-3 text-white bg-gradient-to-bl from-rose-400 via-fuchsia-500 to-indigo-500 rounded-lg sm:w-auto'
                          >
                            <span className='font-medium'>
                              {" "}
                              Get A Quotation{" "}
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
