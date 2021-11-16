import React from 'react';
import ActiveLink from './ActiveLink';
import { AltCampusIcon } from '../Icons';
import ResourcesMenu, { resourceItems } from './ResourcesMenu';
import TestimonialMenu, { testimonialItems } from './TestimonialMenu';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  CurrencyDollarIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
  HomeIcon,
  AcademicCapIcon,
  BookOpenIcon,
  LoginIcon,
  HeartIcon
} from '@heroicons/react/outline';
import Link from 'next/link';

const mobileMenu = [
  {
    name: 'Home',
    href: '/',
    icon: HomeIcon
  },
  {
    name: 'Course',
    href: '/',
    icon: CurrencyDollarIcon
  },
  {
    name: 'Placements',
    href: '/placements',
    icon: AcademicCapIcon
  },
  {
    name: 'Stories',
    href: '/stories',
    icon: BookOpenIcon
  },
  {
    name: 'Wall of love',
    href: '/wall-of-love',
    icon: HeartIcon
  },
  {
    name: 'Login',
    href: '/stories',
    icon: LoginIcon
  }
];

function Navbar() {
  return (
    <header className="fixed z-20 w-full top-0 bg-white shadow-sm-custom">
      <Popover className="container mx-auto flex justify-between items-center px-8 sm:px-3 py-4 md:py-0">
        {({ open }) => (
          <>
            <Link href="/">
              <a>
                <AltCampusIcon className="w-32 sm:w-28" />
              </a>
            </Link>

            {/* Menu Icon */}
            <div className="md:hidden">
              <Popover.Button className="bg-gray-300 rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <span className="sr-only">Open menu</span>
                <MenuIcon
                  className="h-8 w-8 text-royal-blue-900"
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>

            {/* Navigation Menu */}

            <Popover.Group
              as="nav"
              className="hidden md:flex items-center space-x-10"
            >
              <ActiveLink href="/">
                <a className="text-sm text-gray-500 hover:text-royal-blue-900 duration-300 ease-in-out transition py-5">
                  Home
                </a>
              </ActiveLink>
              <ActiveLink href="/#pricing">
                <a className="text-sm text-gray-500 hover:text-royal-blue-900 duration-300 ease-in-out transition py-5">
                  Course
                </a>
              </ActiveLink>
              <ActiveLink href="/placements">
                <a className="text-sm text-gray-500 hover:text-royal-blue-900 duration-300 ease-in-out transition py-5">
                  Placements
                </a>
              </ActiveLink>
              <ActiveLink href="/stories">
                <a className="text-sm text-gray-500 hover:text-royal-blue-900 duration-300 ease-in-out transition py-5">
                  Stories
                </a>
              </ActiveLink>
              <ResourcesMenu />
              <ActiveLink href="https://launchpad.altcampus.school/login">
                <a className="text-sm text-gray-500 hover:text-royal-blue-900 duration-300 ease-in-out transition py-5">
                  Login
                </a>
              </ActiveLink>
              <ActiveLink href="https://launchpad.altcampus.school/signup">
                <a className="bg-green-theme-900 hover:bg-green-theme-700 transition duration-300 ease-in-out text-white rounded font-semibold py-3 px-8">
                  Signup
                </a>
              </ActiveLink>
            </Popover.Group>

            <MobileNavigation open={open} />
          </>
        )}
      </Popover>
    </header>
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
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link href="/">
                <a>
                  <AltCampusIcon className="w-32" />
                </a>
              </Link>
              <div className="">
                <Popover.Button className="bg-gray-300 rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">Close menu</span>
                  <XIcon
                    className="h-8 w-8 text-royal-blue-900 rounded"
                    aria-hidden="true"
                  />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-12 mb-6">
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
                    <strong className="ml-3 text-xl font-medium text-gray-900">
                      {item.name}
                    </strong>
                  </a>
                ))}

                <h3 className="text-base font-medium tracking-wide text-gray-500 uppercase">
                  Resources
                </h3>

                {resourceItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <item.icon
                      className="flex-shrink-0 h-6 w-6 text-dark-blue-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-xl font-medium text-gray-900">
                      {item.name}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="px-5 pb-8 bg-gray-50">
            <div className="flex items-center justify-center text-center">
              <a
                className="inline-flex content-center items-center text-xl text-white font-bold px-8 py-3 md:px-4 md:py-1 rounded uppercase bg-dark-blue-600 border  shadow-md btn-hover tracking-wide mr-3 w-1/2 justify-center"
                href="https://launchpad.altcampus.school/signup"
              >
                sign up
              </a>
              <a
                className="inline-flex content-center items-center text-xl text-white font-bold px-8 py-3 md:px-4 md:py-1 rounded uppercase bg-green-theme-500 border border-green-theme-500 shadow-md btn-hover tracking-wide w-1/2 justify-center"
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

export default Navbar;
