import React from 'react';

function CourseDetails(props) {
  return (
    <section className="py-24 bg-royal-blue-100" id="course-details">
      <header className="text-center">
        <h2 className="font-bold text-5xl text-dark-blue-500">
          Like we said <br />
          Exhaustive Course Content
        </h2>
      </header>
      <div className="text-center md:flex md:justify-between py-4 mb-8">
        <div className="py-6 md:py-12 course-icon relative md:w-1/4 ">
          <div className="relative z-10 border-r border-dark-blue-100">
            <p className="text-6xl number-1 font-mukta">14</p>
            <p className="text-xl uppercase font-semibold text-dark-blue-600 font-lato">
              Modules
            </p>
          </div>
          <img
            className="inline-block absolute"
            src="/assets/media/modules.svg"
            alt="Modules"
          />
        </div>
        <div className="py-6 md:py-12 course-icon relative md:w-1/4">
          <div className="relative z-10 border-r border-dark-blue-100">
            <p className="text-6xl number-2 font-mukta">80+</p>
            <p className="text-xl uppercase font-semibold text-dark-blue-600 font-lato">
              Topics
            </p>
          </div>
          <img
            className="inline-block absolute"
            src="/assets/media/topic.svg"
            alt="Topics"
          />
        </div>
        <div className="py-6 md:py-12 course-icon relative md:w-1/4">
          <div className="relative z-10 border-r border-dark-blue-100">
            <p className="text-6xl number-3 font-mukta">200+</p>
            <p className="text-xl uppercase font-semibold text-dark-blue-600 font-lato">
              Exercises
            </p>
          </div>
          <img
            className="inline-block absolute"
            src="/assets/media/ex.svg"
            alt="Exercises"
          />
        </div>
        <div className="py-6 md:py-12 course-icon relative md:w-1/4">
          <div className="relative z-10">
            <p className="text-6xl number-4 font-mukta">40+</p>
            <p className="text-xl uppercase font-semibold text-dark-blue-600 font-lato">
              Projects
            </p>
          </div>
          <img
            className="inline-block absolute"
            src="/assets/media/project.svg"
            alt="Projects"
          />
        </div>
      </div>
      <footer className="text-center">
        <a
          className="text-md text-white bg-green-theme-500 hover:bg-green-theme-600 uppercase py-3 px-20 inline-block mt-12 rounded font-semibold tracking-widest btn-hover font-mukta"
          href="/curriculum"
        >
          Check our curriculum
        </a>
      </footer>
    </section>
  );
}

export default CourseDetails;
