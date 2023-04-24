import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function CourseCard({ course }) {
  return (
    <article className="shadow-xs-custom p-6 rounded-lg">
      <header className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold text-royal-blue-800">
            <Link href={'/courses/' + course.slug}>{course.name}</Link>
          </h2>

          <strong className="font-mukta text-xs text-royal-blue-800 bg-royal-blue-200 px-2 py-1 inline-block rounded-sm mt-2">
            {course.isMiniTrack ? 'Individual Module' : 'Track'}
          </strong>
          <figure className="flex space-x-2 mt-3">
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
          </figure>
        </div>
        <div>
          <h3 className="text-royal-blue-800 font-bold text-base">
            {'₹' + course.pricing.standard.INR}
          </h3>
        </div>
      </header>
      <footer className="flex justify-between mt-6 items-start">
        <p className="max-w-sm text-royal-blue-800 text-base font-Karla">
          Learn all the required skills like HTML, CSS, JS & React to be a
          industry fit Front-End Developer.
        </p>
        {/* <a
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
        </a> */}
      </footer>
    </article>
  );
}

export default CourseCard;
