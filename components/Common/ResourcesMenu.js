import { Popover, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  LightBulbIcon,
  PaperAirplaneIcon,
  NewspaperIcon,
  TruckIcon
} from '@heroicons/react/outline';

import Link from 'next/link';
import { Fragment } from 'react';

export const resourceItems = [
  {
    name: 'Blog Posts',
    description: 'Become a full stack web developer',
    href: '/posts',
    icon: LightBulbIcon
  },
  {
    name: 'Guides',
    description: 'Ultimate guides to kickstart your developer journey',
    href: '/guides',
    icon: NewspaperIcon
  },
  {
    name: 'Roadmaps',
    description: 'Go from zero to expert with free learning roadmaps',
    href: '/roadmaps/web-development',
    icon: TruckIcon
  }
];

export default function ResourcesMenu() {
  return (
    <div className="max-w-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-sm text-gray-500 inline-flex items-center hover:text-royal-blue-900 transition`}
            >
              <span>Resources</span>
              <ChevronDownIcon
                className={`${
                  open ? '' : 'text-opacity-70'
                } w-4 ml-1 text-gray-500`}
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
                    {resourceItems.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-200 transition ease-in-out duration-150"
                      >
                        <>
                          <div className="flex items-center justify-center flex-shrink-0 text-white">
                            <item.icon
                              className=" h-5 w-5 text-royal-blue-600 mt-1"
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
