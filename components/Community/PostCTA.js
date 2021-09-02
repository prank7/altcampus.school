import Link from 'next/link';
import React from 'react';

function PostCTA(props) {
  return (
    <section className="cta py-16 mt-12 rounded-sm">
      <div className="container mx-auto px-4">
        <div className="md:px-4 text-center md:text-left md:flex md:items-center md:justify-center ">
          <h3 className="text-2xl text-white md:max-w-lg md:mr-4 font-bold">
            {props.ctaText}
          </h3>

          <a
            className="mt-4 md:mt-0 bg-white tracking-wider uppercase text-dark-blue-500 py-3 px-4 inline-block rounded shadow-md btn-hover font-semibold text-md"
            href="https://altcampus.school"
          >
            START LEARNING
          </a>
        </div>
      </div>
    </section>
  );
}

export default PostCTA;
