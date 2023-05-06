import React, { useEffect, useState } from 'react';
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
  let [currency, setCurrency] = useState('INR');
  let symbol = currency === 'INR' ? '₹' : '$';

  let specificSkills = props.courses.filter((a) => a.isMiniTrack);
  let fullTracks = props.courses.filter((a) => !a.isMiniTrack);

  let fullTrackLowest = [...fullTracks].sort(
    (a, b) => a.pricing.standard.INR - b.pricing.standard.INR
  )[0];
  let specificSkillLowest = [...specificSkills].sort(
    (a, b) => a.pricing.standard.INR - b.pricing.standard.INR
  )[0];

  useEffect(() => {
    if (localStorage.getItem('ac_currency')) {
      return setCurrency(localStorage.getItem('ac_currency'));
    }

    localStorage.setItem('ac_currency', currency);
  }, []);

  useEffect(() => {
    localStorage.setItem('ac_currency', currency);
  }, [currency]);

  return (
    <section className="py-24 bg-blur-background bg-contain bg-center">
      <div className="container mx-auto px-8 sm:px-3">
        <header>
          <h3 className="text-center font-bold text-royal-blue-800 text-4xl leading-snug">
            Take control of your career, <br />{' '}
            <span className="text-green-theme-900">start by choosing</span>
          </h3>
        </header>
        {/* 
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
                {specificSkills.map((course, i) => {
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
                        <br />
                        <p>{'₹' + course.pricing.standard.INR}</p>
                        <p>
                          <Link href={`/courses/${course.slug}`}>
                            Learn More
                          </Link>
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <footer className="px-8 py-10">
                <div className="border-solid border-t border-royal-blue-200 pt-6">
                  <span className="text-2xl text-gray-500 font-bold line-through">
                    {symbol +
                      numberWithCommas(
                        pricingData.online['price' + currency.toUpperCase()]
                      )}
                  </span>
                  <span className="text-2xl text-gray-500 font-bold">
                    Starting From
                  </span>
                  <div className="mt-6">
                    <div className="flex justify-between items-center">
                      <h3 className="tex text-4.5xl font-bold text-royal-blue-800">
                        {symbol +
                          numberWithCommas(pricingData.online[currency])}
                      </h3>
                      <a
                        className="text-gray-500 text-base underline leading-loose"
                        href="#"
                      >
                        6 Easy EMIs of 10K
                      </a>
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
                {fullTracks.map((course, i) => {
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
                        <br />
                        <p>{'₹' + course.pricing.standard.INR}</p>
                        <p>
                          <Link href={`/courses/${course.slug}`}>
                            Learn More
                          </Link>
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <footer className="px-8 py-10 md:absolute bottom-0 right-0 left-0">
                <div className="border-solid border-t border-royal-blue-200 pt-6">
                  <span className="text-2xl text-gray-500 font-bold line-through">
                    {symbol +
                      numberWithCommas(
                        pricingData.bootcamp['price' + currency.toUpperCase()]
                      )}
                  </span>
                  <span className="text-2xl text-gray-500 font-bold">
                    Starting From
                  </span>
                  <div className="mt-6">
                    <div className="flex justify-between items-center">
                      <h3 className="tex text-4.5xl font-bold text-royal-blue-800">
                        {symbol +
                          numberWithCommas(pricingData.bootcamp[currency])}
                      </h3>
                      <a
                        className="text-gray-500 text-base underline leading-loose"
                        href="#"
                      >
                        6 Easy EMIs of 10K
                      </a>
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
*/}

        <div className="flex items-center justify-center mt-8">
          <input
            type="checkbox"
            name="toggle"
            className="hidden"
            id="togglePrice"
            checked={currency !== 'INR'}
            onChange={() => {
              setCurrency(currency === 'INR' ? 'USD' : 'INR');
            }}
          />
          <label
            htmlFor="togglePrice"
            className="w-16 h-10 bg-royal-blue-200 rounded-full shadow-inner-custom flex items-center p-1 toggle-price order-1 mx-4 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-b from from-royal-blue-600 to-royal-blue-800"></div>
          </label>
          <strong className="font-normal text-base text-gray-500 dollar">
            USD
          </strong>
          <strong className="font-normal text-base text-gray-500 order-2 rupee">
            INR
          </strong>
        </div>

        <div className="grid lg:grid-cols-2  mx-auto mt-20  lg:px-12">
          <article className="lg:pr-16 lg:border-r-2 border-gray-200">
            <header className="text-center">
              <h3 className="text-gray-500 font-bold text-2xl">
                a specific skill
              </h3>
              <h5 className="text-gray-500 font-normal">{`starting at ${symbol} ${specificSkillLowest.pricing.standard[currency]}`}</h5>
            </header>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-center mt-10 items-stretch">
              {specificSkills.map((skill, i) => {
                return (
                  <Link key={i} href={`/courses/${skill.slug}`}>
                    <figure
                      key={i}
                      className="shadow-lg-custom pt-5 pb-3 px-2 rounded-md border-2 border-white hover:border-royal-blue-600 transition-all duration-200 cursor-pointer bg-white"
                    >
                      <img
                        className="inline-block h-24"
                        width="96"
                        height="96"
                        src={skill.image || '/images/icons/js-rounded.svg'}
                        alt={skill.name}
                      />
                      <figcaption className="text-royal-blue-800 font-semibold text-sm h-12 md:h-14">
                        {skill.name}
                      </figcaption>

                      <div className="flex justify-between border-t mt-5 pt-3 px-4">
                        <span className="text-sm font-semibold text-gray-600">
                          {symbol + skill.pricing.standard[currency]}
                        </span>
                        <img
                          className="arrow-slide w-5"
                          src="/images/icons/arrow-right-green.svg"
                          alt="Arrow Right Icon"
                        />
                      </div>
                    </figure>
                  </Link>
                );
              })}

              {/* <figure className="shadow-lg-custom pt-5 pb-3 px-2 rounded-md border-2 border-white hover:border-royal-blue-600 hover:scale-105 transform transition-all duration-200 cursor-pointer bg-white">
                <div className="w-16 h-16 bg-royal-blue-200 rounded-full inline-flex justify-center items-center">
                  <span className="text-base text-royal-blue-800 font-semibold">
                    +5
                  </span>
                </div>
                <figcaption className="text-royal-blue-800 mt-6 font-semibold text-base">
                  See all
                </figcaption>
              </figure> */}
            </div>
          </article>
          <article className="lg:pl-16 mt-16 lg:mt-0">
            <header className="text-center">
              <h3 className="text-gray-500 font-bold text-2xl">
                or a learning track
              </h3>
              <h5 className="text-gray-500 font-normal">{`starting at ${symbol} ${fullTrackLowest.pricing.standard[currency]}`}</h5>
            </header>
            <div className="mt-10">
              {fullTracks.map((track, i) => {
                return (
                  <Link key={i} href={`/courses/${track.slug}`}>
                    <article
                      key={i}
                      className={`flex justify-between items-center bg-white py-5 px-4 rounded-md shadow-lg-custom border-2 border-white hover:border-royal-blue-600 transition-all duration-200 cursor-pointer ${
                        i != 0 ? ' mt-8' : ''
                      }`}
                    >
                      <h3 className="text-base font-semibold text-royal-blue-800">
                        {track.name}
                      </h3>
                      <figure className="flex gap-x-3">
                        <img
                          src={track.image || '/images/icons/js-rounded.svg'}
                          alt="react-rounded"
                        />
                        {/* <img src="/images/icons/react-rounded.svg" alt="html" />
                        <img src="/images/icons/node-md.svg" alt="CSS" />
                        <img src="/images/icons/mongo.svg" alt="js" /> */}
                      </figure>
                    </article>
                  </Link>
                );
              })}
            </div>
          </article>
        </div>
        <footer className="text-center mt-20">
          <Link
            className="hover-btn inline-block mt-16 py-5 px-10 border-2 border-solid border-royal-blue-800 rounded text-royal-blue-800 font-bold text-center capitalize"
            href="/courses"
          >
            <strong className="relative z-10">Browse Courses</strong>
          </Link>
        </footer>
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
