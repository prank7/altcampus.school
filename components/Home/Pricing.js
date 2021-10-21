import React from 'react';

function Pricing(props) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-8 sm:px-3">
        <div className="max-w-5xl mx-auto px-3 sm:px-0">
          <header>
            <h3 className="text-center font-bold text-gray-500 text-2xl">
              Price is what you pay, Value is what you get
            </h3>
            <div className="flex items-center justify-center my-16">
              <input
                type="checkbox"
                name="toggle"
                className="hidden"
                id="togglePrice"
              />
              <label
                htmlFor="togglePrice"
                className="w-16 h-10 bg-royal-blue-200 rounded-full shadow-inner-custom flex items-center p-1 toggle-price order-1 mx-4 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-b from from-royal-blue-600 to-royal-blue-800"></div>
              </label>
              <strong className="font-normal text-base text-gray-500 dollar">
                US Dollars
              </strong>
              <strong className="font-normal text-base text-gray-500 order-2 rupee">
                Rupees
              </strong>
            </div>
          </header>
          <div className="md:grid md:grid-cols-2 gap-x-24">
            <article className="bg-white shadow-lg-custom rounded-2xl relative">
              <header className="relative">
                <div className="px-14 py-8 card-banner rounded-t-2xl bg-cover relative z-10">
                  <h3 className="text-white text-3xl font-bold text-shadow">
                    Online Course
                  </h3>
                  <h5 className="font-medium text-xl text-white mt-4">
                    Self Paced or Cohor
                  </h5>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-6 bg-dark-gold-900 bg-opacity-70 rounded-circle blur-lg filter"></div>
              </header>
              <ul className="pl-14 pr-10 py-10 leading-relaxed text-xl text-royal-blue-800 font-Karla pricing-list ">
                <li className="relative">
                  Donec facilisis tortor ut augue lacinia, at viverra est
                  semper.{' '}
                </li>
                <li className="relative mt-2">Assignments</li>
                <li className="relative mt-2">
                  Donec facilisis tortor ut augue lacinia, at viverra est
                  semper.{' '}
                </li>
                <li className="relative mt-2">Github student developer pack</li>
                <li className="relative mt-2">Step by Step course content</li>
                <li className="relative mt-2">Assignments</li>
              </ul>
              <footer className="pl-12 pr-10 py-10 md:absolute bottom-0 right-0 left-0">
                <div className="border-solid border-t border-royal-blue-200 pt-6">
                  <span className="text-2xl text-gray-500 font-bold line-through">
                    ₹ 80 K
                  </span>
                  <div className="mt-6">
                    <h3 className="tex text-4.5xl font-bold text-royal-blue-800">
                      ₹ 60K
                    </h3>
                    <div className="flex justify-between items-center">
                      <a
                        className="text-gray-500 text-base underline leading-loose"
                        href="#"
                      >
                        6 Easy EMIs of 10K
                      </a>
                      <a
                        className="flex text-green-theme-900 font-semibold text-xl"
                        href="#"
                      >
                        Enroll Now!
                        <img
                          className="ml-6"
                          src="/images/icons/arrow-right-green.svg"
                          alt="Arrow Right Icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </article>
            <article className="bg-white shadow-lg-custom rounded-2xl mt-12 md:mt-0">
              <header className="relative">
                <div className="px-14 py-8 card-banner-2 rounded-t-2xl bg-cover relative z-10">
                  <h3 className="text-white text-3xl font-bold text-shadow">
                    Bootcamp
                  </h3>
                  <h5 className="font-medium text-xl text-white mt-4">
                    Mentorship & Cohort
                  </h5>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-6 bg-purple-900 bg-opacity-70 rounded-circle blur-lg filter"></div>
              </header>
              <ul className="pl-14 pr-10 py-10 leading-relaxed text-xl text-royal-blue-800 font-Karla pricing-list">
                <li className="relative">
                  Donec facilisis tortor ut augue lacinia, at viverra est
                  semper.{' '}
                </li>
                <li className="relative mt-2">Assignments</li>
                <li className="relative mt-2">
                  Donec facilisis tortor ut augue lacinia, at viverra est
                  semper.{' '}
                </li>
                <li className="relative mt-2">Github student developer pack</li>
                <li className="relative mt-2">Step by Step course content</li>
                <li className="relative mt-2">Assignments</li>
                <li className="relative mt-2">
                  Donec facilisis tortor ut augue lacinia, at viverra est
                  semper.{' '}
                </li>
              </ul>
              <footer className="pl-12 pr-10 py-10">
                <div className="border-solid border-t border-royal-blue-200 pt-6">
                  <span className="text-2xl text-gray-500 font-bold line-through">
                    ₹ 1.1 Lacs
                  </span>
                  <div className="mt-6">
                    <h3 className="tex text-4.5xl font-bold text-royal-blue-800">
                      ₹ 90K
                    </h3>
                    <div className="flex justify-between items-center">
                      <a
                        className="text-gray-500 text-base underline leading-loose"
                        href="#"
                      >
                        6 Easy EMIs of 10K
                      </a>
                      <a
                        className="flex text-green-theme-900 font-semibold text-xl"
                        href="#"
                      >
                        Enroll Now!
                        <img
                          className="ml-6"
                          src="/images/icons/arrow-right-green.svg"
                          alt="Arrow Right Icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
