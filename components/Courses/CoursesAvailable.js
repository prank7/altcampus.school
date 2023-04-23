import Image from 'next/image';
import React from 'react';
import CoursesAvailableCard from './CourseAvailableCard';

function CoursesAvailable() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-8">
        <h4 className="text-xl text-gray-500 font-semibold text-center mb-8">
          This specific skill is part of multiple learning paths
        </h4>
        <>
          <CoursesAvailableCard />
          <CoursesAvailableCard />
          <CoursesAvailableCard />
        </>
      </div>
    </section>
  );
}

export default CoursesAvailable;
