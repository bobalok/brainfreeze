/* This example requires Tailwind CSS v2.0+ */
// import { Fragment, useState } from "react";

// import { Disclosure, Menu, Transition, Switch } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import {
  // BriefcaseIcon,
  // BellIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
// import Image from "next/image";

const navigation = [
  // { name: "Residential", href: "/residential", current: false },
  // { name: "Business", href: "/", current: false },
  // { name: "Blog", href: "#", current: false },
  { name: "Contact", href: "#contact", current: false },
  { name: "Business", href: "#corporate", current: false },
  { name: "Gaming", href: "#gaming", current: false },
  { name: "Wifi", href: "#wifi", current: false },
  { name: "Why-us", href: "#whyus", current: false },
  // { name: "F.A.Q", href: "/", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

export default function Navi() {
  return (
    <Disclosure
      as='nav'
      className='stiky top-0 z-50 w-full backdrop-blur-0 bg-white/90 dark:bg-black/90'
    >
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-24'>
              <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center md:items-stretch md:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  {/* <img
                    className='block md:hidden h-14 w-auto'
                    src='/LogosForNeutechWeb/betternetLogoBW.svg'
                    alt='betternet logo'
                  /> */}
                  {/* <img
                    className='hidden md:block h-16 w-auto bg-logo-white bg-no-repeat'
                    src='/LogosForNeutechWeb/betternetTextBW.svg'
                    alt='betternet logo'
                  /> */}
                  {/* <Link href=''>
                    <span className="className='bg-logo-white bg-no-repeat w-48 h-14 dark:bg-logo-dark"></span>
                  </Link> */}

                  <Link
                    href='/'
                    className='bg-logo-white bg-no-repeat w-48 h-14 dark:bg-logo-dark'
                  ></Link>
                </div>
                <div className='hidden md:block sm:ml-6 select-none'>
                  <div className='flex md:space-x-0 lg:space-x-4 py-4'>
                    {navigation.map((item) => (
                      <MyLink
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "focus:text-tatsuBTN2 xs:bg-gray-900"
                            : "dark:text-gray-300 text-gray-700 hover:text-tatsuBTN",
                          "px-3 py-2 rounded-md text-md font-medium focus:text-tatsuBTN2"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </MyLink>
                    ))}
                    {/* MyToggle */}
                    {/* <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={`${
                        enabled ? "bg-primaryBlue" : "bg-secondaryBlue"
                      }
          relative inline-flex flex-shrink-0 h-[28px] w-[44px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span className='sr-only'>Use setting</span>
                      <span
                        aria-hidden='true'
                        className={`${
                          enabled ? "translate-x-4" : "translate-x-0"
                        }
            pointer-events-none inline-block h-[24px] w-[24px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                      />
                    </Switch> */}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <button className='hidden bg-secondaryBlue hover:bg-white transition-all ease-linear py-4 px-4 border-2 border-secondaryBlue hover:border-transparent rounded md:inline-flex items-center text-white text-base font-bold hover:text-secondaryBlue'>
                  {/* <BriefcaseIcon className='h-6 w-6 mr-1' aria-hidden='true' /> */}
                  <span className='uppercase select-none'>
                    ⌛ under development
                  </span>
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  // as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
