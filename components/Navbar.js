import Link from "next/link";
import Image from "next/image";
function Navbar() {
  return (
    <div className="sticky z-50 top-0 shadow-md p-4 bg-purple-900">
      {/* <h1>i am a header</h1> */}

      <div className="max-w-7xl mx-auto relative flex items-center divide-x-2 divide-gray-200">
        <img className="cursor-pointer h-14" src="./g292.webp" alt="" />

        <div className="hidden md:block ml-4 space-x-6 text-gray-500 font-semibold px-4">
          <Link href="#">
            <a className="hover:text-red-500 focus:text-white">Dashboard</a>
          </Link>
          <Link href="#">
            <a className="hover:text-red-500 focus:text-white">Services</a>
          </Link>
          <Link href="#">
            <a className="hover:text-red-500 focus:text-white">Pricing</a>
          </Link>
          <Link href="#">
            <a className="hover:text-red-500 focus:text-white">Wiki</a>
          </Link>
          <Link href="#">
            <a className="hover:text-red-500 focus:text-white">Contact</a>
          </Link>

          <button className="absolute inset-y-0 sm:visible right-0 bg-transparent hover:bg-gradient-to-r from-green-500 to-blue-500 transition-all ease-linear text-green-500 font-semibold hover:text-white py-4 px-4 border border-green-500 hover:border-transparent rounded inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
    </div>
  );
}

export default Navbar;
