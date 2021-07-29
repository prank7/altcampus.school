import Link from 'next/link';
import React, { useState } from 'react';
import { AltCampusIcon } from './Icons';

function Navbar(params) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header className="bg-gray-50 py-3">
      <nav className="container mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a href="/">
              <AltCampusIcon className="h-12 w-auto sm:h-10" />
            </a>
          </Link>
          <Link href="/community">
            <a
              class="text-dark-blue-400 hover:text-dark-blue-700 text-xl ml-2 mt-1"
              href="/community"
            >
              Community
            </a>
          </Link>
        </div>
        <label htmlFor="toggle" className="bars hidden">
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#a2b7ce"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <input type="checkbox" className="toggle hidden" id="toggle" />
        <div className="community nav-menu shadow-md md:shadow-none rounded-md p-8 md:p-0">
          <label htmlFor="toggle" className="close-menu hidden">
            <svg
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#a2b7ce"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </label>
          <ul className="md:flex md:items-center">
            <li className="md:hidden">
              <Link href="/">
                <a href="/">
                  <AltCampusIcon className="h-12 w-auto sm:h-10" />
                </a>
              </Link>
            </li>
            <li className="mt-12 md:mt-0 hidden md:inline-block">
              <Link href="/">
                <a
                  href="/"
                  class="text-gray-700 text-base hover:text-gray-900 transition ease-in-out duration-150"
                >
                  Program
                </a>
              </Link>
            </li>
            <li className="mt-12 md:mt-0 md:ml-8">
              <Link href="/community/web-development">
                <a
                  href="/community/web-development"
                  class="inline-flex items-center text-gray-700 text-base hover:text-gray-900 transition ease-in-out duration-150"
                >
                  <img
                    class="h-6 w-6 text-green-theme-600 md:hidden mr-3"
                    src="/images/icons/roadmap.svg"
                  />
                  Roadmap
                </a>
              </Link>
            </li>
            <li className="mt-4 md:mt-0 md:ml-8">
              <Link href="/placements">
                <a
                  href="/placements"
                  class="inline-flex items-center text-gray-700 text-base hover:text-gray-900 transition ease-in-out duration-150"
                >
                  <img
                    class="h-6 w-6 text-green-theme-600 md:hidden mr-3"
                    src="/images/icons/roadmap.svg"
                  />
                  Placements
                </a>
              </Link>
            </li>
            <li className="mt-4 md:mt-0 md:ml-8">
              <Link href="/community/posts">
                <a
                  href="/community/posts"
                  class="inline-flex items-center text-gray-700 text-base hover:text-gray-900 transition ease-in-out duration-150"
                >
                  <img
                    class="flex-shrink-0 h-6 w-6 text-green-theme-600 md:hidden mr-3"
                    src="/images/icons/tutorials.svg"
                  />
                  Posts
                </a>
              </Link>
            </li>
            <li className="mt-4 md:mt-0 md:ml-8">
              <Link href="/community/stories">
                <a
                  href="/community/stories"
                  class="inline-flex items-center text-gray-700 text-base hover:text-gray-900 transition ease-in-out duration-150"
                >
                  <img
                    class="flex-shrink-0 h-6 w-6 text-green-theme-600 md:hidden mr-3"
                    src="/images/icons/stories.svg"
                  />
                  Stories
                </a>
              </Link>
            </li>
            <li className="grid grid-cols-2 row-gap-4 col-gap-8 border-t-2 border-dark-blue-100 md:hidden mt-8 py-8">
              <a
                href="/how-it-works"
                class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
              >
                How it works
              </a>
              <a
                href="/pricing"
                class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
              >
                Pricing
              </a>
            </li>
            <li className="mt-4 md:mt-0 md:ml-8">
              <Link href="https://launchpad.altcampus.school/signup">
                <a
                  class="flex w-full md:w-auto justify-center text-xl md:text-base text-white font-bold px-12 py-4 md:px-4 md:py-1 rounded uppercase bg-green-theme-500 border border-green-theme-500 shadow-md btn-hover tracking-wide text-center"
                  href="https://launchpad.altcampus.school/signup"
                >
                  <span className="hidden md:inline-block">signup</span>
                  <span className="md:hidden">signup for AltCampus School</span>
                </a>
              </Link>
            </li>
            <li className="md:ml-4 hidden md:inline-block">
              <Link href="/community/join">
                <a
                  href="/community/join"
                  class="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 border-indigo-600 hover:text-white hover:bg-indigo-500 focus:outline-none transition ease-in-out duration-150"
                >
                  Join the Community
                </a>
              </Link>
            </li>
            <li className="mt-8 md:ml-4 md:hidden text-center">
              <span className="text-center text-base leading-6 font-medium text-gray-500">
                Existing Student?
              </span>
              <Link href="/community/join">
                <a
                  href="https://launchpad.altcampus.school/login"
                  class="pl-2 text-green-theme-600 hover:text-green-theme-500 transition ease-in-out duration-150"
                >
                  Sign in
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
