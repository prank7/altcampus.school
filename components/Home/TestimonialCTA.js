import React from 'react';

function Testimonial(props) {
  return (
    <section className="py-16 bg-royal-blue-800 bg-curve relative">
      <article className="container mx-auto px-8 sm:px-3 justify-between md:flex items-center">
        <img
          className="absolute z-10 bottom-0 hidden md:inline-block"
          src="/images/students/komal-no-bg.png"
          alt="Komal"
        />
        <div className="text-center mb-12 md:mb-0">
          <img
            className="inline-block md:hidden"
            src="/images/students/komal.png"
            alt="Komal"
          />
        </div>

        <div className="md:ml-80 pl-20">
          <header>
            <blockquote className="font-Karla text-xl relative">
              <p className="text-opacity-60 text-royal-blue-200">
                Feel proud to have done this amazing course. AltCampus provided
                me a platform to realize my potential, to take a step-by-step
                approach with keen focus on learning and building stuff.
                <br />
                <br />
                The countless assignments and projects that I did made me a
                confident and job ready developer. Extremely proud of being an
                alumni of AltCampus and grateful for whatever & wherever I am
                today.
              </p>
              <cite className="not-italic inline-block mt-6">
                <strong className="text-md text-royal-blue-200">
                  Komal Raj{' '}
                </strong>
                <strong className="uppercase text-xs text-opacity-50 text-royal-blue-200 ml-2">
                  KheloMore Sports Private Limited Mumbai
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
              Ready to change your life like Komal ?
            </h3>
            <a
              className="bg-green-theme-900 hover:bg-green-theme-700 transition duration-300 ease-in-out text-white text-center py-4 px-12 rounded text-sm font-semibold inline-block mt-8 md:mt-0"
              href="https://launchpad.altcampus.com/signup"
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
