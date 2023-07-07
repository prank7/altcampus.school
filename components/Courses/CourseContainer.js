import Image from 'next/image';
import React, { useState } from 'react';
import CourseCard from './CourseCard';

function CourseContainer(props) {
  var orderedTracks = props.courses.filter((t) => !t.isMiniTrack);
  orderedTracks = orderedTracks.concat(
    props.courses
      .filter((t) => t.isMiniTrack)
      .sort((a, b) => a.pricing.standard.INR > b.pricing.standard.INR)
  );

  const [courseFilter, setCourseFilter] = useState('all');

  switch (courseFilter) {
    case 'miniTracks':
      orderedTracks = orderedTracks.filter((o) => o.isMiniTrack);
      break;
    case 'fullTracks':
      orderedTracks = orderedTracks.filter((o) => !o.isMiniTrack);
      break;
    default:
      break;
  }

  return (
    <section className="py-32 md:pt-8 md:pb-24 bg-white">
      <div className="container mx-auto px-8 grid md:grid-cols-8">
        <aside className="hidden md:block col-span-3 lg:col-span-2 pr-4 lg:pr-8">
          <div className="flex flex-col gap-y-4 pr-16">
            <button
              onClick={() => setCourseFilter('all')}
              className={`${
                courseFilter == 'all' ? 'btn-active ' : ''
              } inline-block lg:max-w-min rounded-full px-10 py-4 border border-royal-blue-800 transition-all duration-200 hover:bg-royal-blue-800 hover:text-white`}
            >
              All
            </button>
            <button
              onClick={() => setCourseFilter('miniTracks')}
              className={`${
                courseFilter == 'miniTracks' ? 'btn-active ' : ''
              } border-2 inline-block  border-solid text-royal-blue-800 border-royal-blue-800 rounded-full px-11 py-3 transition-all duration-200 hover:bg-royal-blue-800 hover:text-white`}
            >
              Specific Skills
            </button>
            <button
              onClick={() => setCourseFilter('fullTracks')}
              className={`${
                courseFilter == 'fullTracks' ? 'btn-active ' : ''
              } border-2 inline-block border-solid text-royal-blue-800 border-royal-blue-800 rounded-full px-11 py-3 transition-all duration-200 hover:bg-royal-blue-800 hover:text-white`}
            >
              Learning Tracks
            </button>
          </div>
          {/* <hr className="border-royal-blue-200 my-8" /> */}
          {/* <div>
            <h5 className="text-base font-semibold text-gray-500">
              Course duration
            </h5>
            <form className="mt-8 space-y-4">
              <fieldset className="overflow-hidden relative">
                <input
                  name="course-duration"
                  className="select-duration"
                  id="short"
                  type="checkbox"
                />
                <label
                  className="flex items-center cursor-pointer"
                  htmlFor="short"
                >
                  <div className="w-5 h-5 rounded-md border border-royal-blue-800 flex justify-center items-center">
                    <div className="dot w-2 h-2 bg-royal-blue-800 hidden"></div>
                  </div>
                  <span className="ml-2 text-royal-blue-800 text-base font-medium">
                    4-8 weeks
                  </span>
                </label>
              </fieldset>
              <fieldset className="overflow-hidden relative">
                <input
                  name="course-duration"
                  className="select-duration"
                  id="medium"
                  type="checkbox"
                />
                <label
                  className="flex items-center cursor-pointer"
                  htmlFor="medium"
                >
                  <div className="w-5 h-5 rounded-md border border-royal-blue-800 flex justify-center items-center">
                    <div className="dot w-2 h-2 bg-royal-blue-800 hidden"></div>
                  </div>
                  <span className="ml-2 text-royal-blue-800 text-base font-medium">
                    8-16 weeks
                  </span>
                </label>
              </fieldset>
              <fieldset className="overflow-hidden relative">
                <input
                  name="course-duration"
                  className="select-duration"
                  id="long"
                  type="checkbox"
                />
                <label
                  className="flex items-center cursor-pointer"
                  htmlFor="long"
                >
                  <div className="w-5 h-5 rounded-md border border-royal-blue-800 flex justify-center items-center">
                    <div className="dot w-2 h-2 bg-royal-blue-800 hidden"></div>
                  </div>
                  <span className="ml-2 text-royal-blue-800 text-base font-medium">
                    16-32 weeks
                  </span>
                </label>
              </fieldset>
              <fieldset className="overflow-hidden relative">
                <input
                  name="course-duration"
                  className="select-duration"
                  id="x-long"
                  type="checkbox"
                />
                <label
                  className="flex items-center cursor-pointer"
                  htmlFor="x-long"
                >
                  <div className="w-5 h-5 rounded-md border border-royal-blue-800 flex justify-center items-center">
                    <div className="dot w-2 h-2 bg-royal-blue-800 hidden"></div>
                  </div>
                  <span className="ml-2 text-royal-blue-800 text-base font-medium">
                    32-64 weeks
                  </span>
                </label>
              </fieldset>
            </form>
          </div> */}
        </aside>
        <div className="col-span-5 lg:col-span-6 grid lg:grid-cols-2 lg:pl-12 gap-8">
          {orderedTracks.map((course, i) => {
            return <CourseCard key={i} course={course} currency={props.currency} symbol={props.symbol} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default CourseContainer;
