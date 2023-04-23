import React, { useState } from 'react';
import { numberWithCommas } from '../../lib/helper';
import { getCourses } from '../../lib/courseData';
import Link from 'next/link';

let pricingData = {
  online: {
    priceINR: '5',
    priceUSD: '1344',
    inr: '5K',
    usd: '1119'
  },
  bootcamp: {
    priceINR: '56249',
    priceUSD: '740',
    inr: '61.5K',
    usd: '539'
  }
};

function Pricing(props) {
  let [currency, setCurrency] = useState('inr');
  let symbol = currency === 'inr' ? '₹' : '$';

  let specificSkills = props.courses.tracks.filter((a) => a.isMiniTrack);
  let fullTracks = props.courses.tracks.filter((a) => !a.isMiniTrack);

  return (
    <section className="py-24">
      <div className="container mx-auto px-8 sm:px-3">
        <div className="max-w-5xl mx-auto px-3 sm:px-0">
          <header>
            <h3 className="text-center font-bold text-gray-500 text-2xl">
              Price is what you pay, Value is what you get
            </h3>
          </header>
          <div className="md:grid md:grid-cols-2 gap-x-24 mt-24">
            <article className="bg-white shadow-lg-custom rounded-2xl">
              <header className="relative bg-white">
                <div className="bg-white px-8 py-8 rounded-t-2xl relative z-10 flex justify-between">
                  <h3 className="text-royal-blue-800 text-3xl font-bold">
                    Learn Specific Technology
                  </h3>
                  <img src="/images/icons/frontend.svg" alt="FrontEnd Course" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-6 bg-gray-500 bg-opacity-20 rounded-circle blur-lg filter"></div>
              </header>
              <div className="px-8 py-6 font-Karla text-lg text-royal-blue-800">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Placeat nihil sint perferendis, cum atque corporis aut
                  suscipit.
                </p>
              </div>
              <ul className="px-8 py-4 leading-relaxed text-lg text-royal-blue-800">
                {
                  specificSkills.map((course, i) => {
                    return (
                      <li key={i} className="flex items-center">
                        <div>
                          <img
                            src="/images/icons/html.svg"
                            className="shadow-xs-custom rounded-full"
                            alt="HTML"
                          />
                          <strong className="ml-4 font-medium">
                            {course.name}
                          </strong>
                        </div>
                        <div>
                          <br/>
                          <p>{"₹" + course.pricing.standard.INR}</p>
                          <p><Link href={`/courses/${course.slug}`}>Learn More</Link></p>
                        </div>
                      </li>
                    )
                  })
                }
              
              </ul>
              <footer className="px-8 py-10">
                <div className="border-solid border-t border-royal-blue-200 pt-6">
                  {/* <span className="text-2xl text-gray-500 font-bold line-through">
                    {symbol +
                      numberWithCommas(
                        pricingData.online['price' + currency.toUpperCase()]
                      )}
                  </span> */}
                  <span className="text-2xl text-gray-500 font-bold">
                    Starting From
                  </span>
                  <div className="mt-6">
                    <div className="flex justify-between items-center">
                      <h3 className="tex text-4.5xl font-bold text-royal-blue-800">
                        {symbol +
                          numberWithCommas(pricingData.online[currency])}
                      </h3>
                      {/* <a
                        className="text-gray-500 text-base underline leading-loose"
                        href="#"
                      >
                        6 Easy EMIs of 10K
                      </a> */}
                      <a
                        className="flex text-green-theme-900 font-semibold text-xl animate-arrow"
                        href="#"
                      >
                        Learn more
                        <img
                          className="ml-6 arrow-slide"
                          src="/images/icons/arrow-right-green.svg"
                          alt="Arrow Right Icon"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </article>
            <article className="bg-white shadow-lg-custom rounded-2xl mt-12 md:mt-0 relative">
              <header className="relative bg-white">
                <div className="bg-white px-8 py-8 rounded-t-2xl relative z-10 flex justify-between">
                  <h3 className="text-royal-blue-800 text-3xl font-bold">
                    Career Path Related Courses
                  </h3>
                  <img src="/images/icons/frontend.svg" alt="FrontEnd Course" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-6 bg-gray-500 bg-opacity-20 rounded-circle blur-lg filter"></div>
              </header>
              <div className="px-8 py-6 font-Karla text-lg text-royal-blue-800">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Placeat nihil sint perferendis, cum atque corporis aut
                  suscipit.
                </p>
              </div>
              <ul className="px-8 py-4 leading-relaxed text-lg text-royal-blue-800">
                {
                  fullTracks.map((course, i) => {
                    return (
                      <li key={i} className="flex items-center">
                        <div>
                          <img
                            src="/images/icons/html.svg"
                            className="shadow-xs-custom rounded-full"
                            alt="HTML"
                          />
                          <strong className="ml-4 font-medium">
                            {course.name}
                          </strong>
                        </div>
                        <div>
                          <br/>
                          <p>{"₹" + course.pricing.standard.INR}</p>
                          <p><Link href={`/courses/${course.slug}`}>Learn More</Link></p>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
              <footer className="px-8 py-10 md:absolute bottom-0 right-0 left-0">
                <div className="border-solid border-t border-royal-blue-200 pt-6">
                  {/* <span className="text-2xl text-gray-500 font-bold line-through">
                    {symbol +
                      numberWithCommas(
                        pricingData.bootcamp['price' + currency.toUpperCase()]
                      )}
                  </span> */}
                  <span className="text-2xl text-gray-500 font-bold">
                    Starting From
                  </span>
                  <div className="mt-6">
                    <div className="flex justify-between items-center">
                      <h3 className="tex text-4.5xl font-bold text-royal-blue-800">
                        {symbol +
                          numberWithCommas(pricingData.bootcamp[currency])}
                      </h3>
                      {/* <a
                        className="text-gray-500 text-base underline leading-loose"
                        href="#"
                      >
                        6 Easy EMIs of 10K
                      </a> */}
                      <a
                        className="flex text-green-theme-900 font-semibold text-xl animate-arrow"
                        href="#"
                      >
                        Learn more
                        <img
                          className="ml-6 arrow-slide"
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
          <div className="flex items-center justify-center mt-24">
            <input
              type="checkbox"
              name="toggle"
              className="hidden"
              id="togglePrice"
              defaultChecked={currency === 'usd'}
              onChange={() => {
                setCurrency(currency === 'inr' ? 'usd' : 'inr');
              }}
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
        </div>
      </div>
    </section>
  );
}


export const getStaticProps = async () => {
  const courses = await getCourses();
  return {
    props: {
      courses
    }
  };
};

export default Pricing;
