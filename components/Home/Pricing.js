import React from 'react';
import { BasicMedalIcon, CheckCrossIcon, CheckIcon, PriceTagIcon, ProMedalIcon } from '../Icons';

function Pricing(props) {
  return (
    <section className="py-24 bg-royal-blue-100">
      <div className="container mx-auto px-8">
        <header className="text-center md:flex md:justify-center md:items-center mb-12">
          <PriceTagIcon className="inline-block w-12 md:mr-4" />
          <h2 className="font-bold text-5xl text-dark-blue-500">
            Invest in yourself
          </h2>
        </header>
        <div className="md:flex md:justify-center">
          <div className="mb-12 md:mb-0 md:mx-8">
            <article className="shadow-2xl bg-white rounded-lg">
              <div className="bg-royal-blue-100 text-center pb-1 relative">
                <ProMedalIcon className="w-24 inline-block md:absolute left-0 top-0" />
                <div className="">
                  <div className="md:flex md:items-center md:justify-end md:py-2 md:px-2">
                    <h2 className="text-3xl font-semibold text-gold-500 mb-4 md:mr-4 md:pl-20">
                      Premium
                    </h2>
                    <div className="font-mukta">
                      <p className="bg-red-200 inline-block py-1 px-2 text-sm font-semibold text-red-800">
                        20% Off
                      </p>
                      <div className="text-gray-500 my-1 pt-2">
                        <h4 className="inline-block mx-2 line-through text-2xl font-medium font-mukta">
                          ₹102,149
                        </h4>
                        <p className="inline-block mx-2 line-through font-medium font-mukta">
                          {" "}
                          $1399{" "}
                        </p>
                      </div>
                      <div className="">
                        <h4 className="inline-block mx-2 text-4xl text-royal-blue-500 font-semibold font-mukta">
                          ₹81,249
                        </h4>
                        <p className="inline-block mx-2 text-2xl text-green-theme-500 font-mukta">
                          $1119
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">
                    Step by Step course content
                  </p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">Assignments</p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">Projects</p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">
                    Github student developer pack
                  </p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">
                    Developer community
                  </p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">
                    Personalised feedback & Code review
                  </p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">Mentorship</p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">
                    Access to office hours (Doubt clearing session)
                  </p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">
                    Coach follow up
                  </p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">
                    Portfolio preparation & placement support
                  </p>
                </li>
              </ul>
            </article>
            <div className="text-center md:text-right">
              <a
                className="inline-block bg-dark-blue-500 px-12 py-3 md:px-6 md:py-2 rounded mt-8 shadow-md btn-hover hover:bg-dark-blue-600"
                href="https://launchpad.altcampus.school/signup"
              >
                <div className="flex items-center">
                  <ProMedalIcon className="w-8" />
                  <p className="text-white tracking-wider font-bold">BUY NOW</p>
                </div>
              </a>
            </div>
          </div>
          <div className="md:mx-8">
            <article className="shadow-2xl bg-white rounded-lg">
              <div className="bg-royal-blue-100 text-center pb-1 relative">
                <BasicMedalIcon className="w-24 inline-block md:absolute left-0 top-0" />
                <div className="">
                  <div className="md:flex md:items-center md:justify-end md:py-2 md:px-2">
                    <h2 className="text-3xl text-gold-800 font-semibold mb-4 md:mr-4 md:pl-20">
                      Standard
                    </h2>
                    <div className="">
                      <p className="bg-red-200 inline-block py-1 px-2 text-sm font-semibold  text-red-800">
                        28% Off (Early Birds offer)
                      </p>
                      <div className="text-gray-500 my-1 pt-2">
                        <h4 className="inline-block mx-2 line-through text-2xl font-medium font-mukta">
                          ₹56,249
                        </h4>

                        <p className="inline-block mx-2 line-through font-medium font-mukta">
                          $749{" "}
                        </p>
                      </div>
                      <div className="offer-price">
                        <h4 className="inline-block mx-2 text-4xl text-royal-blue-500 font-semibold font-mukta">
                          ₹40,499
                        </h4>
                        <p className="inline-block mx-2 text-2xl text-green-theme-500 font-mukta">
                          $539
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">
                    Step by Step course content
                  </p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">Assignments</p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">Projects</p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">
                    Github student developer pack
                  </p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400">
                    Developer community
                  </p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckCrossIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400 line-through">
                    Personalised feedback & Code review
                  </p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckCrossIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400 line-through">
                    Mentorship
                  </p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckCrossIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400 line-through">
                    Access to office hours (Doubt clearing session)
                  </p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckCrossIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400 line-through">
                    Coach follow up
                  </p>
                </li>
                <li className="px-5 py-3 flex items-center border-t border-dark-blue-200">
                  <CheckCrossIcon className="h-6 w-6 mr-4" />
                  <p className="text-base text-dark-blue-400 line-through">
                    Portfolio preparation & placement support
                  </p>
                </li>
              </ul>
            </article>
            <div className="text-center md:text-right">
              <a
                className="inline-block bg-dark-blue-500 px-12 py-3 md:px-6 md:py-2 rounded mt-8 shadow-md btn-hover hover:bg-dark-blue-600"
                href="https://launchpad.altcampus.school/signup?plan=standard"
              >
                <div className="flex items-center">
                  <BasicMedalIcon className="w-8" />
                  <p className="text-white tracking-wider font-bold">BUY NOW</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
