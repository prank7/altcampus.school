import React from 'react';
import globalData from '../../globalData';

function Hero(props) {

  var upcomingBatchDates = globalData.upcomingBatchDates;
  var nextBatchDates = upcomingBatchDates.filter((a) => new Date(a) >= new Date());
  var immediateBatchDate = nextBatchDates[0] ? `Next cohort starts on ${new Date(nextBatchDates[0]).toDateString().slice(4, 10)} OR Start learning at your own pace` : '';

  return (
    <section className="hero text-center py-20 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div>
          <h1 className="hero-heading font-bold text-dark-blue-500 md:px-12 md:max-w-4xl mx-auto leading-custom">
            Everything you need to become a software developer
          </h1>
          <h3 className="text-xl md:text-2xl text-hero-subheading my-10 font-source  md:max-w-4xl mx-auto px-4">
            An online programming bootcamp designed to help you learn full-stack
            web development and become job-ready
          </h3>
          <div className="font-medium flex justify-center items-center text-hero-tags">
            <h5 className="text-sm md:text-lg font-mukta">100% online</h5>
            <span className="w-2 h-2 bg-dark-blue-300 mx-6 rounded-full"></span>
            <h5 className="text-sm md:text-lg font-mukta">Project based</h5>
            <span className="w-2 h-2 bg-dark-blue-300 mx-6 rounded-full"></span>
            <h5 className="text-sm md:text-lg font-mukta">Mentorship</h5>
          </div>
          <div className="mt-8">
            <p className="text-lg italic text-royal-blue-600 ">
              {immediateBatchDate}
            </p>
          </div>
          <div>
            <a
              href="https://try.altcampus.school?utm_source=hero_cta"
              className="text-md text-white bg-green-theme-500 hover:bg-green-theme-600 uppercase py-3 px-20 inline-block mt-12 rounded font-semibold tracking-widest btn-hover font-mukta"
            >
              Start Learning For Free
            </a>
          </div>
        </div>
        <img
          className="absolute right-0 top-0 hero-image"
          src="/assets/media/bg-hero1.svg"
          alt="Hero Bg"
        />
      </div>
    </section>
  );
}

export default Hero;
