import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function CourseCard({ course }) {
  const [currency, setCurrency] = useState('INR');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // call to api.
      localStorage.setItem('currency', 'USD');
      setCurrency('USD');
    }
  }, []);

  return (
    <Link href={'/courses/' + course.slug}>
      <article className="rounded-lg flex items-stretch border border-gray-200 hover:border-royal-blue-600 hover:scale-105 transform transition-all duration-500 cursor-pointer">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-royal-blue-800">
            {course.name}
          </h2>
          <p className="text-xs text-gray-500 font-Karla mt-2">
            Learn all the required skills like HTML, CSS, JS & React to be a
            industry fit Front-End Developer.
          </p>
          {course.isMiniTrack ? (
            <div className="flex items-center mt-4 text-gray-500 gap-x-2">
              <strong className="inline-block bg-gold-400 bg-opacity-40 p-1 rounded-md font-medium text-royal-blue-800 text-xs">
                Specific Skill ★
              </strong>
              <span>•</span>
              <strong className="text-gray-500 font-semibold text-xs">
                16-32 weeks
              </strong>
              <span>•</span>
              <h3 className="text-royal-blue-800 font-bold text-xs">
                {currency === 'INR'
                  ? '₹' + course.pricing.standard.INR
                  : '$' + course.pricing.standard.USD}
              </h3>
            </div>
          ) : (
            <div className="flex items-center mt-4 text-gray-500 gap-x-2">
              <strong className="flex items-center bg-royal-blue-200 bg-opacity-40 p-2 rounded-md font-medium text-royal-blue-800 text-xs">
                Learning Track
                <img
                  className="inline-block ml-1"
                  src="/images/icons/learning-path.svg"
                  alt=""
                />
              </strong>
              <span>•</span>
              <strong className="text-gray-500 font-semibold text-xs">
                16-32 weeks
              </strong>
              <span>•</span>
              <h3 className="text-royal-blue-800 font-bold text-xs">
                {currency === 'INR'
                  ? '₹' + course.pricing.standard.INR
                  : '$' + course.pricing.standard.USD}
              </h3>
            </div>
          )}
          {/* <strong className="font-mukta text-xs text-royal-blue-800 bg-royal-blue-200 px-2 py-1 inline-block rounded-sm mt-2">
            
          </strong> */}
          {/* <figure className="flex space-x-2 mt-3">
            <img
              className="w-8 shadow-lg rounded-full"
              src="/images/icons/html.svg"
              alt="HTML Icon"
            />
            <img
              className="w-8 shadow-lg rounded-full"
              src="/images/icons/css.svg"
              alt="CSS Icon"
            />
            <img
              className="w-8 shadow-lg rounded-full"
              src="/images/icons/js-rounded.svg"
              alt="JavaScript Icon"
            />
            <img
              className="w-8 shadow-lg rounded-full"
              src="/images/icons/react-rounded.svg"
              alt="ReactJS Icon"
            />
          </figure> */}
        </div>
        {/* <footer className="flex justify-between mt-6 items-start">
        <a
          href={`https://launchpad.altcampus.com/signup?course=${course.slug}&currency=INR`}
          className="flex"
        >
          <strong className="font-semibold mr-3 text-green-theme-900">
            Enroll
          </strong>

          <img
            className="h-5"
            src="/images/icons/arrow-right-green.svg"
            alt="Arrow Right"
          />
        </a>
      </footer> */}
        {course.isMiniTrack ? (
          <img
            className="w-28 h-full inline-block rounded-tr-md rounded-br-md"
            src="/images/icons/html-large.svg"
            alt={course.name}
          />
        ) : (
          <div className="bg-gray-200 p-4 flex justify-center items-center rounded-tr-md rounded-br-md">
            <figure className="grid grid-cols-2 gap-x-4 gap-y-4">
              <img className="w-16" src="/images/icons/html.svg" alt="HTML" />
              <img
                className="w-16"
                src="/images/icons/js-rounded.svg"
                alt="JS"
              />
              <img
                className="w-16"
                src="/images/icons/react-rounded.svg"
                alt="React"
              />
              <img className="w-16" src="/images/icons/css.svg" alt="CSS" />
            </figure>
          </div>
        )}
      </article>
    </Link>
  );
}

export default CourseCard;
