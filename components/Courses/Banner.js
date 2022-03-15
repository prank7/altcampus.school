import Image from 'next/image';
import React from 'react';

function Banner(props) {
  return (
    <section className="py-32 md:pt-44 md:pb-14 bg-fancy bg-no-repeat">
      <article className="container mx-auto text-center px-8">
        <h1 className="text-5.5xl font-bold leading-tight text-royal-blue-800">
          <strong className="text-green-theme-900">Courses</strong> for <br />{' '}
          every learner
        </h1>
      </article>
    </section>
  );
}

export default Banner;
