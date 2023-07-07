import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import courseData from '../../data/course.json';

function CourseCard({ course, currency, symbol }) {

  console.log(course, 'CRORHH')

  let estimatedTime = course.estimatedTimeToComplete;
  const lowerNumOfWeeks = Math.floor(estimatedTime/(60*4*5)); // 3 hours - 5 days a week
  const upperNumOfWeeks = Math.ceil(estimatedTime/(60*3*4)); // 3 hours - 4 days a week

  return (
    <Link href={'/courses/' + course.slug}>
      <article className="rounded-lg grid grid-cols-8 border border-gray-200 hover:border-royal-blue-600 transition-all duration-500 cursor-pointer">
        <div className="p-4 col-span-6">
          <h2 className="text-xl font-semibold text-royal-blue-800">
            {course.name}
          </h2>
          <p className="text-sm text-gray-600 font-Karla mt-2">
            {course.description}
          </p>
          {course.isMiniTrack ? (
            <div className="flex items-center mt-4 text-gray-500 gap-x-2">
              <strong className="inline-block bg-gold-400 bg-opacity-40 p-2 rounded-md font-medium text-yellow-900 text-xs">
                Specific Skill 🌟
              </strong>
              <span>•</span>
              <strong className="text-gray-500 font-semibold text-xs">
                {lowerNumOfWeeks}-{upperNumOfWeeks} weeks
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
              <strong className="flex items-center bg-green-200 bg-opacity-40 p-2 rounded-md font-medium text-green-900 text-xs">
                Learning Track
                <img
                  className="inline-block ml-1"
                  src="/images/icons/learning-path.svg"
                  alt=""
                />
              </strong>
              <span>•</span>
              <strong className="text-gray-500 font-semibold text-xs">
                {lowerNumOfWeeks}-{upperNumOfWeeks} weeks
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
        {course.isMiniTrack ? (
          <div className="col-span-2 bg-gray-200 px-4 flex justify-center items-center rounded-tr-md rounded-br-md">
            <img
              className="w-32 h-full inline-block rounded-tr-md rounded-br-md"
              src={ course.image || "/images/icons/html-large.svg"}
              alt={course.name}
            />
          </div>
        ) : (
          <div className="col-span-2 bg-gray-200 p-2 flex justify-center items-center rounded-tr-md rounded-br-md">
            <figure className="grid grid-cols-2 gap-x-1 gap-y-1">
              {
                courseData.tracks[course.name].moduleImages.map((image) => { 
                  return <img className="w-24" src={image} alt={course.name} />
                })
              }
            </figure>
          </div>
        )}
        {/* <footer className="col-span-8 px-5 py-2 border-t flex items-center align-middle justify-between ">
          <strong className="font-semibold mr-3 text-green-theme-900">
            Enroll Now
          </strong>
          <img
            className="h-2"
            src="/images/icons/arrow-right-green.svg"
            alt="Arrow Right"
          />
        </footer> */}
      </article>
    </Link>
  );
}

export default CourseCard;
