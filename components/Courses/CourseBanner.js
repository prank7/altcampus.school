import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function CourseBanner({ course }) {

  let [currency, setCurrency] = useState('INR');
  let symbol = currency === 'INR' ? '₹' : '$';

  useEffect(() => {
    if (localStorage.getItem('ac_currency')) {
      return setCurrency(localStorage.getItem('ac_currency'))
    }

    localStorage.setItem('ac_currency', currency);
  }, [])

  useEffect(() => {
    localStorage.setItem('ac_currency', currency);
  }, [currency])

  return (
    <section className="pb-16 pt-36 bg-royal-blue-200">
      <article className="container mx-auto px-8 text-center">
        <img
          className="inline-block w-32"
          src={course.image}
          alt=""
        />
        <h1 className="text-3xl font-bold leading-tight text-royal-blue-800 mt-8">
          <strong>{course.name}</strong>
        </h1>
        <p className="text-lg max-w-2xl font-normal text-gray-500 mx-auto mt-4">
          {course.description || 'Course'}
        </p>

        <div className="flex items-center justify-center mt-8">
          <input
            type="checkbox"
            name="toggle"
            className="hidden"
            id="togglePrice"
            checked={currency !== 'INR'}
            onChange={() => {
              setCurrency(currency == 'INR' ? 'USD' : 'INR');
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

        <a
          className="inline-block bg-green-theme-900 text-white text-sm font-semibold py-4 px-12 rounded-md mt-8"
          href={`https://launchpad.altcampus.com/signup?course=${course.slug}`}
        >
          {`Enroll at ${symbol} ${course.pricing.standard[currency]}`}
        </a>
        {/* <footer className="max-w-6xl mt-16 grid gap-16 md:gap-0 md:grid-cols-3 mx-auto">
          <div className="text-center px-16">
            <h3 className="text-5xl font-bold text-royal-blue-800">95%</h3>
            <p className="text-gray-500 mt-2 text-xl">
              of our existing students bought this
            </p>
          </div>
          <div className="text-center px-16 md:border-r-2 md:border-l-2 border-gray-300">
            <h3 className="text-5xl font-bold text-royal-blue-800">40%</h3>
            <p className="text-gray-500 mt-2 text-xl">
              average jump in salary after learning this skill
            </p>
          </div>
          <div className="text-center px-16">
            <h3 className="text-5xl font-bold text-royal-blue-800">16 Weeks</h3>
            <p className="text-gray-500 mt-2 text-xl">Average Course Time</p>
          </div>
        </footer> */}
      </article>
    </section>
  );
}

export default CourseBanner;
