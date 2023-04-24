import Image from 'next/image';
import React from 'react';
import CourseCard from './CourseCard';

function CourseContainer(props) {
  return (
    <section className="py-32 md:pt-8 md:pb-24 bg-white">
      <div className="container mx-auto px-8 grid grid-cols-8">
        <aside className="col-span-2 pr-12">
          <div className="flex flex-col gap-y-4 pr-16">
            <button className="btn-active inline-block max-w-min rounded-full px-10 py-4 border border-royal-blue-800">
              All
            </button>
            <button className="border-2 inline-block  border-solid text-royal-blue-800 border-royal-blue-800 rounded-full px-11 py-3">
              Specific Skills
            </button>
            <button className="border-2 inline-block border-solid text-royal-blue-800 border-royal-blue-800 rounded-full px-11 py-3">
              Guided Paths
            </button>
          </div>
          <hr className="border-royal-blue-200 my-8" />
          <div>
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
          </div>
        </aside>
        <div className="col-span-6 grid grid-cols-2 pl-12 gap-8">
          {props.courses.tracks.map((course, i) => {
            return <CourseCard key={i} course={course} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default CourseContainer;
