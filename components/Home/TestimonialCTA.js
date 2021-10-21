import React from 'react';

function Testimonial(props) {
  return (
    <section className="py-16 bg-royal-blue-800 bg-curve relative">
      <article className="container mx-auto px-8 sm:px-3 justify-between flex items-center">
        <img
          className="absolute z-10 bottom-0 hidden md:inline-block"
          src="/images/students/jonas.svg"
          alt="Komal"
        />
        <div className="md:ml-80 pl-12">
          <header>
            <blockquote className="font-Karla text-xl relative">
              <p className="text-opacity-60 text-royal-blue-200">
                In the starting days, I was searching for the best courses
                available online within my budget. A friend told me about
                Altcampus. It has the best mentors and the best course content.
                I landed a job immediately after completing my course. It
                changed my life!
              </p>
              <cite className="not-italic inline-block mt-6">
                <strong className="text-md text-royal-blue-200">
                  Sarthak Pathak{' '}
                </strong>
                <strong className="uppercase text-xs text-opacity-50 text-royal-blue-200 ml-2">
                  SDE at BIGBinary
                </strong>
              </cite>
              <div className="absolute -top-9 -left-14 md:-top-5 md:-left-20">
                <span className="text-center rounded-full text-7xl md:text-9xl text-green-theme-900 block w-16 h-16 transform -scale-y-1 font-Sora font-semibold">
                  “
                </span>
              </div>
            </blockquote>
          </header>
          <footer className="md:flex justify-between items-end mt-12">
            <h3 className="text-royal-blue-200 text text-4.5xl font-bold max-w-xl">
              Ready to change your life like Sarthak ?
            </h3>
            <a
              className="bg-green-theme-900 text-white text-center py-4 px-12 rounded text-sm font-semibold inline-block mt-8 md:mt-0"
              href="#"
            >
              Sign Up Now
            </a>
          </footer>
        </div>
      </article>
    </section>
  );
}

export default Testimonial;
