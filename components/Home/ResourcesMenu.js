import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';

const solutions = [
  {
    name: 'Blog Posts',
    description: 'Measure actions your users take',
    href: '/community/posts',
    icon: IconOne
  },
  {
    name: 'Guides',
    description: 'Create your own targeted content',
    href: '##',
    icon: IconTwo
  },
  {
    name: 'Roadmaps',
    description: 'Keep track of your growth',
    href: '/community/web-development',
    icon: IconFour
  },
  {
    name: 'Couse Timeline Estimator',
    description: 'Keep track of your growth',
    href: '##',
    icon: IconThree
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
                text-4xl md:text-lg text-gold-500 inline-flex items-center  md:text-dark-blue-300 hover:text-dark-blue-500`}
            >
              <span>Resources</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-1 mt-1 h-5 w-5 text-gold-500 md:text-dark-blue-300 transition ease-in-out duration-150`}
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
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 text-white">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-4xl md:text-lg text-gold-500  md:text-dark-blue-300 hover:text-dark-blue-500">
                            {item.name}
                          </p>
                          {/* <p className="text-sm text-gray-500">
                            {item.description}
                          </p> */}
                        </div>
                      </a>
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

function IconOne() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g
          id="5125412361595601822"
          transform="translate(1.000000, 1.000000)"
          stroke="#6672E5"
          stroke-width="2"
        >
          <polygon
            id="Path"
            points="10.8 14 8 14 8 11.2 18.6 0.6 21.4 3.4"
          ></polygon>
          <path
            d="M18,7 L18,20 C18,21.1 17.1,22 16,22 L2,22 C0.9,22 0,21.1 0,20 L0,6 C0,4.9 0.9,4 2,4 L15.2,4"
            id="Path"
          ></path>
        </g>
      </g>
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="24px"
      height="22px"
      viewBox="0 0 24 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g
          id="18430276001543238902"
          transform="translate(1.000000, 1.000000)"
          stroke="#6672E5"
          stroke-width="2"
        >
          <polygon
            id="Path"
            points="0 4 0 20 7 16 15 20 22 16 22 0 15 4 7 0"
          ></polygon>
          <path d="M7,0 L7,16" id="Path"></path>
          <path d="M15,4 L15,20" id="Path"></path>
        </g>
      </g>
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="22px"
      height="12px"
      viewBox="0 0 22 12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="14783957361617256532" fill="#6672E5">
          <path
            d="M22,2 C22,3.1 21.1,4 20,4 C19.82,4 19.65,3.98 19.49,3.93 L15.93,7.48 C15.98,7.64 16,7.82 16,8 C16,9.1 15.1,10 14,10 C12.9,10 12,9.1 12,8 C12,7.82 12.02,7.64 12.07,7.48 L9.52,4.93 C9.36,4.98 9.18,5 9,5 C8.82,5 8.64,4.98 8.48,4.93 L3.93,9.49 C3.98,9.65 4,9.82 4,10 C4,11.1 3.1,12 2,12 C0.9,12 0,11.1 0,10 C0,8.9 0.9,8 2,8 C2.18,8 2.35,8.02 2.51,8.07 L7.07,3.52 C7.02,3.36 7,3.18 7,3 C7,1.9 7.9,1 9,1 C10.1,1 11,1.9 11,3 C11,3.18 10.98,3.36 10.93,3.52 L13.48,6.07 C13.64,6.02 13.82,6 14,6 C14.18,6 14.36,6.02 14.52,6.07 L18.07,2.51 C18.02,2.35 18,2.18 18,2 C18,0.9 18.9,0 20,0 C21.1,0 22,0.9 22,2 Z"
            id="Path"
          ></path>
        </g>
      </g>
    </svg>
  );
}
function IconFour() {
  return (
    <svg
      width="25px"
      height="25px"
      viewBox="0 0 25 25"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="8883398171558965383" fill="#6672E5" fill-rule="nonzero">
          <path
            d="M23.935272,22.8412918 L3.61497182,22.8412918 L7.31773221,15.435771 L12.3258091,19.6172721 C12.5500115,19.8040668 12.8447025,19.8834465 13.132395,19.8345388 C13.4200875,19.7856311 13.6719928,19.61333 13.8218739,19.3629411 L19.6976684,9.5898978 L20.1876297,11.1196241 C20.3193645,11.5333984 20.7033926,11.8146159 21.1376308,11.8152942 C21.2405827,11.8156095 21.3429013,11.799188 21.4405839,11.7666721 C21.963255,11.5969941 22.2518648,11.0381253 22.087632,10.5137178 L20.819717,6.63516982 C20.739885,6.38285656 20.5628163,6.17274722 20.327678,6.05131764 C20.0925398,5.92988805 19.8187112,5.90714593 19.5667628,5.98812179 L15.7817188,7.19619412 C15.285964,7.3846464 15.0240013,7.92776047 15.1851384,8.4330544 C15.3462754,8.93834833 15.8742958,9.22953866 16.3876251,9.09619641 L17.9547529,8.59875487 L12.7110458,17.3544741 L7.62068533,13.0981698 C7.38611732,12.903723 7.07584205,12.8265215 6.77750303,12.8883722 C6.47916402,12.950223 6.22515241,13.1444109 6.08721891,13.4160835 L2.99036477,19.5985713 L2.99036477,1.89638456 C3.01308176,1.52570747 2.82822599,1.17304109 2.51046314,0.980831991 C2.19270029,0.788622897 1.7945229,0.788622897 1.47676005,0.980831991 C1.1589972,1.17304109 0.974141434,1.52570747 0.996858422,1.89638456 L0.996858422,23.8361749 C1.0030887,23.8827411 1.01182847,23.928937 1.02303956,23.9745609 C1.03002955,24.0470713 1.04508321,24.1185762 1.0679215,24.1877501 C1.09398407,24.2453535 1.12528362,24.3004407 1.16142555,24.3523172 C1.1915155,24.4077363 1.2265671,24.4603137 1.26615009,24.509404 C1.31724455,24.5591226 1.37369149,24.6030258 1.43445738,24.6403097 C1.46923139,24.6733753 1.50676982,24.703406 1.54666224,24.7300736 L1.58780402,24.7300736 L1.64390645,24.7487744 C1.75445865,24.7937705 1.87239935,24.8178659 1.99174151,24.8198375 L23.935272,24.8198375 C24.3059491,24.8425545 24.6586155,24.6576987 24.8508246,24.3399358 C25.0430336,24.022173 25.0430336,23.6239956 24.8508246,23.3062328 C24.6586155,22.9884699 24.3059491,22.8036141 23.935272,22.8263311 L23.935272,22.8412918 Z"
            id="Path"
          ></path>
        </g>
      </g>
    </svg>
  );
}
