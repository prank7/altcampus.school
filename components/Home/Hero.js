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
    <section className="py-40 bg-fancy bg-no-repeat">
      <article className="container mx-auto px-3">
        <header className="grid grid-cols-2 gap-x-20 items-center">
          <h2 className="text-5.5xl font-bold leading-tight col-span-1 text-royal-blue-800">
            <strong>
              Everything you <br /> need to become a
            </strong>
            <br />
            <strong className="text-green-theme-900">Software Developer</strong>
          </h2>
          <div className="bg-white col-span-1 flex items-center shadow-lg-custom py-7 pr-8 pl-8 rounded-2xl">
            <div className="-ml-16">
              <span className="text-center rounded-full text-5.5xl text-white block w-16 h-16 bg-gray-500 -shadow-md-custom pt-1 font-bold transform -scale-y-1">
                “
              </span>
            </div>
            <blockquote className="ml-6">
              <p className="text-base text-gray-500 leading-relaxed">
                Altcampus is where my search ended for the perfect bootcamp like
                course. I finally landed a job! Thanks to them!
              </p>
            </blockquote>
            <figure className="text-center ml-11">
              <div className="w-24">
                <img
                  className="inline-block"
                  src="/images/students/sachin.svg"
                  alt="Sachin Kumaar"
                />
                <figcaption className="mt-2">
                  <cite className="text-base not-italic text-royal-blue-800 font-semibold">
                    Sachin
                  </cite>
                  <br />
                  <cite className="text-xxs not-italic text-gray-500 tracking-normal uppercase">
                    Cleartax
                  </cite>
                </figcaption>
              </div>
            </figure>
          </div>
        </header>
        <h5 className="text-xs uppercase font-medium space-x-4 text-royal-blue-800 mt-14 flex items-center">
          <strong className="font-medium">100% Online</strong>
          <span className="w-1.2 h-1.2 inline-block bg-gray-500 rounded-full"></span>
          <strong className="font-medium">Project based</strong>
          <span className="w-1.2 h-1.2 inline-block bg-gray-500 rounded-full"></span>
          <strong className="font-medium"> Mentorship</strong>
        </h5>
        <footer className="grid grid-cols-5 items-center mt-11">
          <h1 className="col-span-4 text-2xl leading-normal font-normal text-royal-blue-800">
            An online programming bootcamp designed <br /> to help you learn
            full-stack web development and become job-ready !
          </h1>
          <a
            href="https://try.altcampus.school/"
            className="bg-green-theme-900 py-4 inline-block col-span-1 text-center text-white font-semibold text-sm rounded"
          >
            Start For Free
          </a>
        </footer>
      </article>
    </section>
  );
}

export default Hero;
