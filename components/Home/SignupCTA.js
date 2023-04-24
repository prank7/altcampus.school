import React from 'react';

function Singup(props) {
  return (
    <section className="py-16 bg-royal-blue-800 bg-curve text-center md:text-left">
      <article className="container mx-auto px-8 sm:px-3 md:flex items-center font-bold justify-between">
        <h2 className="text-white text-3xl sm:text-4xl md:text-4.5xl md:leading-normal leading-normal max-w-4xl">
          <strong className="font-bold md:block">{props.titleA}</strong>{' '}
          <strong className="font-bold" dangerouslySetInnerHTML={{__html: props.titleB}}></strong>
        </h2>
        <a
          className="bg-green-theme-900 hover:bg-green-theme-700 transition duration-300 ease-in-out text-white text-center py-6 px-20 rounded text-lg font-semibold inline-block mt-8 md:mt-0"
          href="https://launchpad.altcampus.com/signup"
        >
          {props.action}
        </a>
      </article>
    </section>
  );
}

export default Singup;
