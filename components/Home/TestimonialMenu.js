import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';

const solutions = [
  {
    name: 'Placements',
    description: 'Measure actions your users take',
    href: '/placements',
    icon: IconOne
  },
  {
    name: 'Wall of Love',
    description: 'Create your own targeted content',
    href: '##',
    icon: IconTwo
  },
  {
    name: 'Stories',
    description: 'Keep track of your growth',
    href: '/community/stories',
    icon: IconThree
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
      width="18px"
      height="20px"
      viewBox="0 0 18 20"
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
          id="6391520041543238940"
          transform="translate(1.000000, 1.000000)"
          stroke="#6672E5"
          stroke-width="2"
        >
          <path
            d="M16,18 L16,16 C16,13.790861 14.209139,12 12,12 L4,12 C1.790861,12 0,13.790861 0,16 L0,18"
            id="Path"
          ></path>
          <circle id="Oval" cx="8" cy="4" r="4"></circle>
        </g>
      </g>
    </svg>
  );
}

function IconTwo() {
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
      >
        <g id="15238637081599996556" fill="#6672E5" fill-rule="nonzero">
          <path
            d="M19.0924138,7.59724138 L18.0165517,8.68965517 C17.7880201,8.91818678 17.4174971,8.91818677 17.1889655,8.68965516 C16.9604339,8.46112354 16.9604339,8.09060059 17.1889655,7.86206897 L19.1668966,5.88827586 C19.7068205,5.33789436 19.7068205,4.4565884 19.1668966,3.9062069 C18.6104836,3.38125146 17.7412405,3.38125146 17.1848276,3.9062069 L16.3572414,4.75448276 C16.1287098,4.98301437 15.7581868,4.98301437 15.5296552,4.75448275 C15.3011236,4.52595113 15.3011236,4.15542817 15.5296552,3.92689655 L17.0234483,2.48275862 C17.4035838,2.13529576 17.5620098,1.60703635 17.4358231,1.10772645 C17.3096363,0.608416555 16.9192559,0.218852805 16.4196828,0.0937119823 C15.9201097,-0.0314288406 15.3921832,0.128103127 15.0455172,0.508965517 L9.93103448,5.59862069 C9.2558877,5.22006479 8.41159696,5.33488833 7.86206897,5.88 L6.73655172,7.03448276 C6.06278155,7.71365935 6.06278155,8.80909927 6.73655172,9.48827586 L13.622069,16.3531034 C14.3012456,17.0268736 15.3966855,17.0268736 16.0758621,16.3531034 L16.4896552,15.9186207 L17.1765517,16.6055172 L14.8965517,18.9144828 L7.88689655,15.0413793 C7.7254093,14.9525482 7.52463781,14.9812298 7.39448276,15.1117241 L5.32551724,17.1806897 C5.15971024,16.957229 4.90678178,16.8147236 4.62974708,16.7886776 C4.35271238,16.7626316 4.07765501,16.8554973 3.87310345,17.0441379 L0.273103448,20.64 C-0.0859446753,21.0067525 -0.0859446753,21.5932475 0.273103448,21.96 L1.12965517,22.8124138 C1.49457104,23.1759356 2.08473931,23.1759356 2.44965517,22.8124138 L6.04551724,19.2165517 C6.23931646,19.0143832 6.33563374,18.7379388 6.30941948,18.4591144 C6.28320522,18.18029 6.1370502,17.9266421 5.90896552,17.7641379 L7.76275862,15.9144828 L14.76,19.7834483 C14.8201773,19.8188846 14.8887852,19.8374659 14.9586207,19.8372414 C15.0692052,19.8367823 15.1750049,19.7920782 15.2524138,19.7131034 L18.0744828,16.8910345 C18.2349201,16.7296397 18.2349201,16.468981 18.0744828,16.3075862 L17.097931,15.3310345 C17.7357508,14.7925848 17.9084755,13.8805981 17.5117241,13.1462069 L21.0910345,9.57103448 C21.6360824,9.01913062 21.6305246,8.1298755 21.0786207,7.58482759 C20.5267168,7.03977967 19.6374617,7.04533752 19.0924138,7.59724138 L19.0924138,7.59724138 Z M20.4827586,8.98758621 L16.9655172,12.5172414 L10.5724138,6.13241379 L15.6331034,1.07586207 C15.8616351,0.854186397 16.2266002,0.859744241 16.4482759,1.08827586 C16.6699515,1.31680748 16.6643937,1.6817726 16.4358621,1.90344828 L14.9627586,3.38068966 C14.4204619,3.92754353 14.4223078,4.80991133 14.9668879,5.35449142 C15.511468,5.8990715 16.3938358,5.90091745 16.9406897,5.35862069 L17.7889655,4.53103448 C18.0142107,4.32340885 18.3631596,4.3305077 18.5797742,4.54712231 C18.7963888,4.76373691 18.8034877,5.11268589 18.5958621,5.33793103 L16.622069,7.31586207 C16.220085,7.661157 16.0477726,8.20398335 16.1770103,8.71790686 C16.3062479,9.23183036 16.7148367,9.62857605 17.2323383,9.74264566 C17.7498398,9.85671527 18.2873645,9.66851543 18.6206897,9.25655172 L19.6965517,8.18068966 C19.925794,8.02129237 20.2366843,8.05104236 20.4315368,8.2510225 C20.6263892,8.45100265 20.6480555,8.7625607 20.4827586,8.98758621 L20.4827586,8.98758621 Z"
            id="Shape"
          ></path>
          <path
            d="M23.5862069,5.07310345 C23.0314105,4.61874696 22.2228596,4.65760654 21.7141931,5.16307389 C21.2055266,5.66854123 21.1615666,6.47683084 21.6124138,7.03448276 C22.1672102,7.48883925 22.975761,7.44997966 23.4844276,6.94451232 C23.9930941,6.43904497 24.0370541,5.63075537 23.5862069,5.07310345 L23.5862069,5.07310345 Z"
            id="Path"
          ></path>
        </g>
      </g>
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="26px"
      height="23px"
      viewBox="0 0 26 23"
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
          id="20346827411595156107"
          transform="translate(1.000000, 1.000000)"
          stroke="#6672E5"
          stroke-width="2"
        >
          <path
            d="M20.3076923,20.3076923 L3.69230769,20.3076923 C1.66153846,20.3076923 0,18.6461538 0,16.6153846 L0,3.69230769 C0,1.66153846 1.66153846,0 3.69230769,0 L20.3076923,0 C22.3384615,0 24,1.66153846 24,3.69230769 L24,16.6153846 C24,18.6461538 22.3384615,20.3076923 20.3076923,20.3076923 Z"
            id="Path"
          ></path>
          <rect
            id="Rectangle"
            x="4.61538462"
            y="5.53846154"
            width="5.53846154"
            height="5.53846154"
          ></rect>
          <path
            d="M13.8461538,11.0769231 L19.3846154,11.0769231"
            id="Path"
          ></path>
          <path
            d="M4.61538462,14.7692308 L19.3846154,14.7692308"
            id="Path"
          ></path>
        </g>
      </g>
    </svg>
  );
}
