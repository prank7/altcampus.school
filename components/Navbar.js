import Link from "next/link";
import React, { useState } from "react";
import { AltCampusIcon } from "./Icons";

function Navbar(params) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="relative bg-gray-50">
      <div className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-8 sm:px-16">
          <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
            <div className="w-0 flex-1 flex">
              <Link href="/">
                <a href="/" className="inline-flex">
                  <AltCampusIcon className="h-8 sm:h-10 w-auto" />
                  <span className="sr-only">AltCampus</span>
                </a>
              </Link>
              <Link href="/community">
                <a className="self-center text-dark-blue-400 hover:text-dark-blue-700 text-xl pl-2 pt-1">
                  Community
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                onClick={() => setNavbarOpen(true)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="sr-only">Open Menu</span>
              </button>
            </div>
            <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
              <nav className="hidden md:flex space-x-10">
                <Link href="/">
                  <a href="/" className="text-gray-700 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150">
                    Program
                  </a>
                </Link>
                <Link href="/community/web-development">
                  <a href="/community/web-development" className="text-gray-700 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150">
                    Roadmap
                  </a>
                </Link>
                <Link href="/placements">
                  <a
                    href="/placements"
                    className="text-base leading-6 font-medium text-gray-700 hover:text-gray-900 transition ease-in-out duration-150"
                  >
                    Placements
                  </a>
                </Link>
                
                <Link href="/community/posts">
                  <a
                    href="/community/posts"
                    className="text-base leading-6 font-medium text-gray-700 hover:text-gray-900 transition ease-in-out duration-150"
                  >
                    Posts
                  </a>
                </Link>
                <Link href="/community/stories">
                  <a
                    href="/community/stories"
                    className="text-base leading-6 font-medium text-gray-700 hover:text-gray-900 transition ease-in-out duration-150"
                  >
                    Stories
                  </a>
                </Link>
                {/* <a href="#" className="text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 transition ease-in-out duration-150">
                  More
                </a> */}
              </nav>

              <a
                className="inline-flex content-center items-center text-xl md:text-base text-white font-bold px-12 py-4 md:px-4 md:py-1 rounded uppercase bg-green-theme-500 border border-green-theme-500 shadow-md btn-hover tracking-wide"
                href="https://launchpad.altcampus.school/signup"
              >
                signup
              </a>

              <span className="inline-flex rounded-md shadow-sm">
                <Link href="/community/join">
                  <a
                    href="/community/join"
                    className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 border-indigo-600 hover:text-white hover:bg-indigo-500 focus:outline-none transition ease-in-out duration-150"
                  >
                    Join the Community
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </div>

        {/* <!--
          Mobile menu, show/hide based on mobile menu state.

          Entering: "duration-200 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        --> */}
        {navbarOpen ? (
          <div
            className={
              "absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
            }
          >
            <div className="rounded-lg shadow-lg">
              <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link href="/">
                        <img
                          className="h-8 w-auto"
                          src="/images/altcampus-logo.svg"
                          alt="AltCampus logo"
                        />
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <button
                        onClick={() => setNavbarOpen(false)}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        <span className="sr-only">Close Menu</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <nav className="grid row-gap-8">
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        {/* <svg className="flex-shrink-0 h-6 w-6 text-green-theme-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                      </svg> */}
                        <img
                          className="flex-shrink-0 h-6 w-6 text-green-theme-600"
                          src="/images/icons/roadmap.svg"
                        />
                        <Link href="/community/web-development">
                          <a className="text-base leading-6 font-medium text-gray-900">
                            Roadmap
                          </a>
                        </Link>
                      </a>

                      <a
                        href="/placements"
                        className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        {/* <svg className="flex-shrink-0 h-6 w-6 text-green-theme-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                      </svg> */}
                        <img
                          className="flex-shrink-0 h-6 w-6 text-green-theme-600"
                          src="/images/icons/roadmap.svg"
                        />
                        <Link href="/placements">
                          <a className="text-base leading-6 font-medium text-gray-900">
                            Placements
                          </a>
                        </Link>
                      </a>

                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        {/* <svg className="flex-shrink-0 h-6 w-6 text-green-theme-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg> */}
                        <img
                          className="flex-shrink-0 h-6 w-6 text-green-theme-600"
                          src="/images/icons/tutorials.svg"
                        />
                        <Link href="/community/posts">
                          <a className="text-base leading-6 font-medium text-gray-900">
                            Posts
                          </a>
                        </Link>
                      </a>

                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                      >
                        {/* <svg className="flex-shrink-0 h-6 w-6 text-green-theme-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>
                      </svg> */}
                        <img
                          className="flex-shrink-0 h-6 w-6 text-green-theme-600"
                          src="/images/icons/stories.svg"
                        />
                        <Link href="/community/stories">
                          <a className="text-base leading-6 font-medium text-gray-900">
                            Stories
                          </a>
                        </Link>
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 row-gap-4 col-gap-8">
                    {/* <a href="/" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                    AltCampus School
                  </a> */}
                    <a
                      href="/how-it-works"
                      className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      How it works
                    </a>
                    <a
                      href="/pricing"
                      className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                    >
                      Pricing
                    </a>
                    {/* <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                    Blog
                  </a> */}
                  </div>
                  <div className="space-y-6">
                    <span className="w-full flex rounded-md shadow-sm">
                      <a
                        href="https://launchpad.altcampus.school/signup"
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-theme-600 hover:bg-green-theme-500 focus:outline-none focus:border-green-theme-700 focus:shadow-outline-green-theme active:bg-green-theme-700 transition ease-in-out duration-150"
                      >
                        Signup for AltCampus School
                      </a>
                    </span>
                    <p className="text-center text-base leading-6 font-medium text-gray-500">
                      Existing Student?
                      <a
                        href="https://launchpad.altcampus.school/login"
                        className="pl-2 text-green-theme-600 hover:text-green-theme-500 transition ease-in-out duration-150"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
