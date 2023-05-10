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

export const courseItems = [
  {
    name: 'Specific Skills',
    skills: [
      { name: 'HTML & CSS', icon: '/images/icons/html.svg', href: '/courses/' },
      {
        name: 'JavaScript',
        icon: '/images/icons/js-rounded.svg',
        href: '/courses/',
        description: ''
      },
      {
        name: 'React.js',
        icon: '/images/icons/react-rounded.svg',
        href: '/courses/',
        description: ''
      },
      {
        name: 'Node.js',
        icon: '/images/icons/node-md.svg',
        href: '/courses/',
        description: ''
      },
      {
        name: 'React.js',
        icon: '/images/icons/react-rounded.svg',
        href: '/courses/',
        description: ''
      },
      {
        name: 'Node.js & MongodDB',
        icon: '/images/icons/react-rounded.svg',
        href: '/courses/',
        description: ''
      },
      {
        name: 'Server side apps with Express and Mongo',
        icon: '/images/icons/react-rounded.svg',
        href: '/courses/',
        description: ''
      },
      {
        name: 'MERN stack Capstone Project',
        icon: '/images/icons/react-rounded.svg',
        href: '/courses/',
        description: ''
      }
    ]
  },
  {
    name: 'Learning Tracks',
    skills: [
      {
        name: 'Front-end Development',
        icon: '/images/icons/react-rounded.svg',
        href: '/courses/',
        description:
          'Learn all the required skills like HTML, CSS, JS & React to be a industry fit Front-End Developer.'
      },
      {
        name: 'Back-end Development',
        icon: '/images/icons/react-rounded.svg',
        href: '/courses/',
        description:
          'Learn all the required skills like HTML, CSS, JS & React to be a industry fit Front-End Developer.'
      },
      {
        name: 'Full-stack Development',
        icon: '/images/icons/react-rounded.svg',
        href: '/courses/',
        description:
          'Learn all the required skills like HTML, CSS, JS & React to be a industry fit Front-End Developer.'
      }
    ]
  }
];

export default function CourseMenu(props) {
  return (
    <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-sm text-gray-500 inline-flex items-center hover:text-royal-blue-900 transition outline-none`}
            >
              <span>Courses</span>
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
              <Popover.Panel className="absolute z-10 w-screen max-w-xl lg:max-w-3xl px-4 mt-5 lg:mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                <div className="overflow-hidden max-w-4xl w-full rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
                  <div className="relative grid gap-8 px-4 pt-4 grid-cols-2">
                    <div>
                      <div className="">
                        <h4 className="text-sm font-medium text-gray-500">
                          Specific Skills
                        </h4>
                        <ul>
                          {props.coursesWithBasicInfo
                            .filter((c) => c.isMiniTrack)
                            .map((skill, i) => {
                              return (
                                <li className="my-4" key={skill.name}>
                                  <Link
                                    className="flex items-start p-1 rounded-lg hover:bg-gray-200 transition ease-in-out duration-150"
                                    href={`/courses/${skill.slug}`}
                                  >
                                    <img
                                      className="w-6"
                                      src={
                                        skill.image ||
                                        'https://altcampus/images/icons/js-rounded.svg'
                                      }
                                      alt={skill.name}
                                    />
                                    <div className="ml-2">
                                      <strong className="text-sm font-medium text-royal-blue-800">
                                        {skill.name}
                                      </strong>
                                      <p className="text-sm text-gray-500 mt-1"></p>
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </div>

                    <div className="">
                      <h4 className="text-sm font-medium text-gray-500">
                        Learning Tracks
                      </h4>
                      <ul>
                        {props.coursesWithBasicInfo
                          .filter((c) => !c.isMiniTrack)
                          .map((skill, i) => {
                            return (
                              <li className="my-4" key={skill.name}>
                                <Link
                                  className="flex items-start p-1 rounded-lg hover:bg-gray-200 transition ease-in-out duration-150"
                                  href={`/courses/${skill.slug}`}
                                >
                                  <img
                                    className="w-8"
                                    src={
                                      skill.image ||
                                      'https://altcampus/images/icons/js-rounded.svg'
                                    }
                                    alt={skill.name}
                                  />
                                  <div className="ml-2">
                                    <strong className="text-sm font-medium text-royal-blue-800">
                                      {skill.name}
                                    </strong>
                                    <p className="text-sm text-gray-500 mt-1">
                                      {skill.description}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                  <div className="text-center py-6 border-t">
                    <Link
                      className="bg-green-theme-900 hover:bg-green-theme-700 rounded-md inline-block py-3 px-8 text-white"
                      href="/courses"
                    >
                      Browse all courses
                    </Link>
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
