import React from 'react';
import globalData from '../../globalData';

function Hero(props) {
  var upcomingBatchDates = globalData.upcomingBatchDates;
  var nextBatchDates = upcomingBatchDates.filter(
    (a) => new Date(a) >= new Date()
  );
  var immediateBatchDate = nextBatchDates[0]
    ? `Next cohort starts on ${new Date(nextBatchDates[0])
        .toDateString()
        .slice(4, 10)} OR Start learning at your own pace`
    : '';

  return (
    <section className="py-32 md:py-40 bg-fancy bg-no-repeat">
      <article className="container mx-auto px-8 sm:px-3">
        <header className="md:grid md:grid-cols-2 gap-x-20 items-center justify-between">
        <h2 className="text-4xl sm:text-4.5xl md:text-5.5xl font-bold leading-tight col-span-1 text-royal-blue-800 max-w-2xl">
          <strong className="md:block">Step by step course </strong>
          <strong> to help you become a  </strong>
          <strong className="text-green-theme-900"> job ready web developer </strong>
        </h2>
          <div className="bg-white col-span-1 flex items-center shadow-lg-custom py-7 pr-8 pl-8 rounded-2xl mt-8 md:mt-0 sm:ml-3.5">
            <div className="-ml-12 sm:-ml-16">
              <span className="text-center rounded-full text-5.5xl text-white block w-16 h-16 bg-gray-500 -shadow-md-custom pt-1 font-bold transform -scale-y-1">
                “
              </span>
            </div>
            <blockquote className="ml-6">
              <p className="text-base text-gray-500 leading-relaxed">
                From a <b>dropout to getting a job as a programmer</b> - 
                a path-breaking journey that AltCampus made me successful in. 
                Profound learning! It's the <b>most well designed course</b> I have ever taken.
              </p>
            </blockquote>
            <figure className="text-center ml-6 md:ml-8">
              <div className="w-16 md:w-24">
                <img
                  className="inline-block w-16 h-16 rounded-full object-cover"
                  src="/images/students/chaduvula.svg"
                  alt="Prasanth Chaduvula"
                />
                <figcaption className="mt-2">
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
        <h5 className="text-xs uppercase font-medium space-x-4 text-royal-blue-800 mt-14 flex items-center justify-center md:justify-start">
          <strong className="font-medium">Start from Basics</strong>
          <span className="w-1.2 h-1.2 inline-block bg-gray-500 rounded-full"></span>
          <strong className="font-medium">Real world Project based</strong>
          <span className="w-1.2 h-1.2 inline-block bg-gray-500 rounded-full"></span>
          <strong className="font-medium"> Community Learning Support</strong>
        </h5>
        <footer className="md:grid md:grid-cols-5 items-center mt-11">
          <h1 className="sm:col-span-4 text-xl sm:text-2xl leading-normal font-normal text-royal-blue-800">
            <strong className="font-normal md:block">
            One of the best courses on the internet for learning full-stack web development.
            </strong>
            <strong className="font-normal">
              {' '}
              Start from zero and become job ready in MERN stack within 6 months.
            </strong>
          </h1>
          <div className="text-center md:text-right">
            <a
              href="https://try.altcampus.school/"
              className="bg-green-theme-900 hover:bg-green-theme-700 transition duration-300 ease-in-out py-4 px-16 inline-block md:col-span-1 text-center text-white font-semibold text-sm rounded mt-8 md:mt-0"
            >
              Start For Free
            </a>
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