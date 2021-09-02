import React from 'react';
import ActiveLink from './ActiveLink';
import { AltCampusIcon } from '../Icons';
import ResourcesMenu from './ResourcesMenu';
import TestimonialMenu from './TestimonialMenu';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  AcademicCapIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  LightBulbIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon
} from '@heroicons/react/outline';
import Link from 'next/link';

const mobileMenu = [
  {
    name: 'How it works',
    href: '/how-it-works',
    icon: QuestionMarkCircleIcon
  },
  {
    name: 'Pricing',
    href: '/pricing',
    icon: CurrencyDollarIcon
  },
  {
    name: 'Blog Posts',
    href: '/posts',
    icon: LightBulbIcon
  },
  {
    name: 'Placements',
    href: '/placements',
    icon: AcademicCapIcon
  },
  {
    name: 'Success Stories',
    href: '/stories',
    icon: BookOpenIcon
  }
];

function Header() {
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative navbar border-b-2">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="flex justify-between items-center py-3 md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <Link href="/">
                    <a>
                      <AltCampusIcon className="h-12 w-auto sm:h-10" />
                    </a>
                  </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-gray-300 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon
                      className="h-6 w-6 text-gray-800"
                      aria-hidden="true"
                    />
                  </Popover.Button>
                </div>
                <div className="items-center hidden md:flex">
                  <Popover.Group
                    as="nav"
                    className="flex items-center space-x-10"
                  >
                    <ActiveLink href="/how-it-works">
                      <a className="text-4xl md:text-lg text-gold-500  md:text-dark-blue-300 pt-1 hover:text-dark-blue-500">
                        How it works
                      </a>
                    </ActiveLink>
                    <ActiveLink href="/pricing">
                      <a className="text-4xl md:text-lg text-gold-500  md:text-dark-blue-300 pt-1 hover:text-dark-blue-500">
                        Pricing
                      </a>
                    </ActiveLink>
                    <ActiveLink href="/#faqs">
                      <a className="text-4xl md:text-lg text-gold-500  md:text-dark-blue-300 pt-1 hover:text-dark-blue-500">
                        FAQs
                      </a>
                    </ActiveLink>
                    <ResourcesMenu />
                    <TestimonialMenu />
                  </Popover.Group>
                  <div className="flex">
                    <a
                      className="inline-flex content-center items-center text-xl md:text-base text-white font-bold px-12 py-4 md:px-4 md:py-1 rounded uppercase bg-dark-blue-600 border  shadow-md btn-hover tracking-wide mx-6"
                      href="https://launchpad.altcampus.school/signup"
                    >
                      sign up
                    </a>
                    <a
                      className="inline-flex content-center items-center text-xl md:text-base text-white font-bold px-12 py-4 md:px-4 md:py-1 mt-8 sm:mt-0 rounded uppercase bg-green-theme-500 border border-green-theme-500 shadow-md btn-hover tracking-wide"
                      href="https://try.altcampus.school"
                    >
                      Try for Free
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <MobileNavigation open={open} />
          </>
        )}
      </Popover>
    </div>
  );
}

function MobileNavigation({ open }) {
  return (
    <Transition
      show={open}
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus
        static
        className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <Link href="/">
                <a>
                  <AltCampusIcon className="h-10 w-auto sm:h-10" />
                </a>
              </Link>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-400">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {mobileMenu.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <item.icon
                      className="flex-shrink-0 h-6 w-6 text-dark-blue-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-gray-900">
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6 bg-gray-50">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <a
                href="#faqs"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                FAQs
              </a>

              <a
                href="/guides"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Guides
              </a>
              <a
                href="/wall-of-love"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Wall of love
              </a>
              <a
                href="/roadmaps"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Roadmaps
              </a>
            </div>
            <div className="flex items-center justify-center text-center">
              <a
                className="inline-flex content-center items-center text-sm text-white font-bold px-8 py-2 md:px-4 md:py-1 rounded uppercase bg-dark-blue-600 border  shadow-md btn-hover tracking-wide mr-3 w-1/2 justify-center"
                href="https://launchpad.altcampus.school/signup"
              >
                sign up
              </a>
              <a
                className="inline-flex content-center items-center text-sm text-white font-bold px-8 py-2 md:px-4 md:py-1 rounded uppercase bg-green-theme-500 border border-green-theme-500 shadow-md btn-hover tracking-wide w-1/2 justify-center"
                href="https://try.altcampus.school"
              >
                Try for Free
              </a>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
}

export default Header;
