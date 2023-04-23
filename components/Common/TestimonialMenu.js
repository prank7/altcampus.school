import { Fragment } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import {
  AcademicCapIcon,
  BookOpenIcon,
  ChevronDownIcon,
  HeartIcon
} from '@heroicons/react/outline';

export const testimonialItems = [
  {
    name: 'Placements',
    description: 'Amazing companies where our graduates are working',
    href: '/placements',
    icon: AcademicCapIcon
  },
  {
    name: 'Success Stories',
    description: 'Awesome stories of our graduates!',
    href: '/stories',
    icon: BookOpenIcon
  },
  {
    name: 'Wall of Love',
    description: 'What people are saying about us',
    href: '/wall-of-love',
    icon: HeartIcon
  }
];

export default function TestimonialMenu() {
  return (
    <div className="max-w-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-4xl md:text-lg text-gold-500 inline-flex items-center  md:text-dark-blue-300 hover:text-dark-blue-500`}
            >
              <span>Testimonials</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-1 h-5 w-5 text-gold-500 md:text-dark-blue-300 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm lg:max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white px-8 py-8">
                    {testimonialItems.map((item) => (
                      <Link href={item.href} key={item.name} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-200 transition ease-in-out duration-150">
                        <>
                          <div className="flex items-center justify-center flex-shrink-0 text-white">
                            <item.icon
                              className="flex-shrink-0 h-5 w-5 text-royal-blue-600 mt-1"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-lg font-medium text-gray-700">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
