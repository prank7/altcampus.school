import Image from 'next/image';
import React from 'react';
import CourseCard from './CourseCard';

function CourseContainer(props) {
  return (
    <section className="py-32 md:pt-8 md:pb-24 bg-white">
      <div className="container mx-auto px-8">
        <header className="flex justify-center space-x-3 mb-6">
          <button className="border-2 border-solid text-royal-blue-800 border-royal-blue-800 rounded-full px-11 py-3">
            Specific Skills
          </button>
          <button className="border-2 border-solid text-royal-blue-800 border-royal-blue-800 rounded-full px-11 py-3">
            Guided Paths
          </button>
        </header>
        {
          props.courses.tracks.map((course, i) => {
            return <CourseCard key={i} course={course} />
          })
        }
      </div>
    </section>
  );
}

export default CourseContainer;
