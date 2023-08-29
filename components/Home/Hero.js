import React from 'react';
import globalData from '../../globalData';
import Link from 'next/link';

function Hero(props) {
  // var upcomingBatchDates = globalData.upcomingBatchDates;
  // var nextBatchDates = upcomingBatchDates.filter(
  //   (a) => new Date(a) >= new Date()
  // );
  // var immediateBatchDate = nextBatchDates[0]
  //   ? `Next cohort starts on ${new Date(nextBatchDates[0])
  //       .toDateString()
  //       .slice(4, 10)} OR Start learning at your own pace`
  //   : '';

  return (
    <section className="py-32 lg:py-40 bg-fancy bg-no-repeat">
      <article className="container mx-auto px-8 sm:px-3">
        <header className="lg:grid lg:grid-cols-2 gap-x-20 items-center justify-between">
          <h2 className="text-4xl sm:text-4.5xl md:text-5.5xl font-bold leading-tight col-span-1 text-royal-blue-800 lg:max-w-2xl">
            <strong className="md:block">Step by step courses </strong>
            <strong> for becoming a </strong>
            <strong className="text-green-theme-900">
              {' '}
              job ready web developer{' '}
            </strong>
          </h2>
          <div className="bg-white col-span-1 flex items-center justify-between shadow-lg-custom p-6 py-7 md:px-8 rounded-2xl mt-16 lg:mt-0 sm:ml-3.5 relative">
            <div className="md:-ml-12 sm:-ml-16 absolute md:static -top-8 left-1/2 transform md:transform-none -translate-x-1/2">
              <span className="text-center rounded-full text-5.5xl text-white block w-16 h-16 bg-gray-500 -shadow-md-custom pt-1 font-bold transform -scale-y-1">
                “
              </span>
            </div>
            <blockquote className="md:ml-6">
              <p className="text-base text-gray-500 leading-relaxed w-72 sm:mr-12 sm:w-auto">
                From a <b>dropout to getting a job as a programmer</b> - a
                path-breaking journey that AltCampus made me successful in.
                Profound learning! It's the <b>most well designed course</b> I
                have ever taken.
              </p>
            </blockquote>
            <figure className="text-center md:ml-8">
              <div className="w-auto md:w-24">
                <img
                  className="inline-block w-16 h-16 rounded-full object-cover"
                  src="/images/students/chaduvula.webp"
                  width="64"
                  height="64"
                  alt="Prasanth Chaduvula"
                />
                <figcaption className="mt-2 text-center">
                  <cite className="text-base not-italic text-royal-blue-800 font-semibold">
                    Prasanth Chaduvula
                  </cite>
                  <br />
                  <cite className="text-xxs not-italic text-gray-500 tracking-normal uppercase">
                    BigBinary
                  </cite>
                </figcaption>
              </div>
            </figure>
          </div>
        </header>
        <div className="text-xs uppercase font-medium space-x-4 text-royal-blue-800 mt-14 flex items-center justify-center lg:justify-start text-center">
          <strong className="font-medium">Start from scratch</strong>
          <span className="w-1.2 h-1.2 inline-block bg-gray-500 rounded-full"></span>
          <strong className="font-medium">Real world Project based</strong>
          <span className="w-1.2 h-1.2 inline-block bg-gray-500 rounded-full"></span>
          <strong className="font-medium"> 100% online</strong>
        </div>
        <footer className="lg:grid lg:grid-cols-5 items-center mt-11">
          <h1 className="sm:col-span-4 text-xl sm:text-2xl leading-normal font-normal text-royal-blue-800">
            <strong className="font-normal md:block">
              Master full-stack web development with the best courses on the
              internet.
            </strong>
            <strong className="font-normal">
              {' '}
              From zero to job-ready in MERN stack in just 6 months.
            </strong>
          </h1>
          <div className="text-center lg:text-right">
            <Link
              href="/courses"
              className="bg-green-theme-900 hover:bg-green-theme-700 transition duration-300 ease-in-out py-4 px-16 inline-block md:col-span-1 text-center text-white font-semibold text-sm rounded mt-8 lg:mt-0"
            >
              Browse courses
            </Link>
          </div>
        </footer>
      </article>
    </section>
  );
}

export default Hero;

/*
<h2 className="text-4xl sm:text-4.5xl md:text-5.5xl font-bold leading-tight col-span-1 text-royal-blue-800 max-w-2xl">
  <strong className="md:block">The best course for </strong>
  <strong> becoming a job ready </strong>
  <strong className="text-green-theme-900">  full stack web developer </strong>
</h2>

<h2 className="text-4xl sm:text-4.5xl md:text-5.5xl font-bold leading-tight col-span-1 text-royal-blue-800 max-w-2xl">
  <strong className="md:block">Step by step course to help </strong>
  <strong> you become a job ready </strong>
  <strong className="text-green-theme-900">  full stack web developer </strong>
</h2>

*/
