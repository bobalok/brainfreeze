import Link from 'next/link';
import Image from 'next/image';
function Navbar() {
  return (
    <div className="fixed top-0 z-50 w-screen shadow-sm p-6 backdrop-blur-0 bg-black/20">
      {/* <h1>i am a header</h1> */}

      <div className="max-w-7xl mx-auto relative flex items-center divide-x-2 divide-gray-200">
        <Link href="/">
          <img className="cursor-pointer h-14" src="/nlbw.svg" alt="" />
        </Link>

        <div className="hidden md:block md:ml-4 md:space-x-6 text-white font-semibold md:px-4">
          <Link href="#">
            <a className="hover:text-tatsuBTN focus:text-tatsuBTN:bg-tatsuBG:blur">
              Dashboard
            </a>
          </Link>
          <Link href="#">
            <a className="hover:text-tatsuBTN focus:text-white">Services</a>
          </Link>
          <Link href="#">
            <a className="hover:text-tatsuBTN focus:text-white">Pricing</a>
          </Link>
          <Link href="#">
            <a className="hover:text-tatsuBTN focus:text-white">Wiki</a>
          </Link>
          <Link href="#">
            <a className="hover:text-tatsuBTN focus:text-white">Contact</a>
          </Link>

          <button className="absolute inset-y-0 sm:visible right-0 bg-tatsuBTN hover:bg-white transition-all ease-linear hover:text-tatsuBTN py-4 px-4 border-2 border-indigo-400 hover:border-transparent rounded inline-flex items-center text-white text-base font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            <span>We are hiring!</span>
          </button>
        </div>
      </div>
      <div className="md:hidden text-white absolute inset-y-0 right-8 inline-flex items-center">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
