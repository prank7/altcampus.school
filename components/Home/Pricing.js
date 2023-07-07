import React, { useEffect, useState } from 'react';
import { numberWithCommas } from '../../lib/helper';
import { getCourses } from '../../lib/courseData';
import Link from 'next/link';
import CurrencyToggle from '../Common/CurrencyToggle';
import courseData from '../../data/course.json'

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
  const [currency, setCurrency] = useState('INR');
  let symbol = currency === 'INR' ? '₹' : '$';

  let specificSkills = props.courses.filter((a) => a.isMiniTrack);
  let fullTracks = props.courses.filter((a) => !a.isMiniTrack);

  let fullTrackLowest = [...fullTracks].sort(
    (a, b) => a.pricing.standard.INR - b.pricing.standard.INR
  )[0];
  let specificSkillLowest = [...specificSkills].sort(
    (a, b) => a.pricing.standard.INR - b.pricing.standard.INR
  )[0];

  return (
    <section className="py-24 bg-blur-background bg-contain bg-center">
      <div className="container mx-auto px-8 sm:px-3">
        <header>
          <h3 className="text-center font-bold text-royal-blue-800 text-4xl leading-snug">
            Take control of your career, <br />{' '}
            <span className="text-green-theme-900">start by choosing</span>
          </h3>
        </header>

        <div className="flex items-center justify-center mt-8">
          <CurrencyToggle setComponentCurrency={setCurrency} />
        </div>

        <div className="grid lg:grid-cols-2  mx-auto mt-20  lg:px-12">
          <article className="lg:pr-16 lg:border-r-2 border-gray-200">
            <header className="text-center">
              <h3 className="text-gray-500 font-bold text-2xl">
                a specific skill
              </h3>
              <strong className="text-gray-500 font-normal">{`starting at ${symbol} ${specificSkillLowest.pricing.standard[currency]}`}</strong>
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
                          width="20"
                          height="20"
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
              <strong className="text-gray-500 font-normal">{`starting at ${symbol} ${fullTrackLowest.pricing.standard[currency]}`}</strong>
            </header>
            <div className="mt-10">
              {fullTracks.map((track, i) => {
                return (
                  <Link key={i} href={`/courses/${track.slug}`}>
                    <article
                      key={i}
                      className={` bg-white py-5 px-4 rounded-md shadow-lg-custom border-2 border-white hover:border-royal-blue-600 transition-all duration-200 cursor-pointer ${
                        i != 0 ? ' mt-7' : ''
                      }`}
                    >
                      <div className='flex justify-between items-center'>
                        <h3 className="text-lg font-semibold text-royal-blue-800 w-72">
                          {track.name}
                        </h3>
                        <figure className="flex flex-start -space-x-9">
                          {/* <img
                            className="w-auto"
                            src={track.image || '/images/icons/js-rounded.svg'}
                            alt={track.name}
                            width="246"
                            height="57"
                          /> */}
                          {
                            courseData.tracks[track.name].moduleImages.map((image, i) => {
                              return <img className='h-20 w-20 rounded-full' key={i} src={image || "/images/icons/react-rounded.svg"} alt={track.name} />
                            })
                          }
                        </figure>
                      </div>
                      <div className="flex justify-between mt-0 pt-1 px-0">
                        <span className="text-sm font-semibold text-gray-600">
                          {symbol} {track.pricing.standard[currency]}
                        </span>
                        <img
                          className="arrow-slide w-5"
                          src="/images/icons/arrow-right-green.svg"
                          alt="Arrow Right Icon"
                          width="20"
                          height="20"
                        />
                      </div>
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
