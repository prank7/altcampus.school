import Image from 'next/image';
import React from 'react';

function Banner(props) {
  return (
    <section className="hero py-16">
      <article className="container mx-auto text-center px-8">
        <h1 className="text-5xl font-bold hero-heading text-dark-blue-500">
          AltCampus Placements
        </h1>
        <h2 className="max-w-3xl mx-auto text-lg text-gray-800 text-hero-subheading mt-4">
          Checkout our alumni stories and how AltCampus helped them to learn and
          get their first job as a Software developer. Learn how India's finest
          programming bootcamp is enabling folks to kickstart their career in
          tech.
        </h2>
        <div className="text-center">
          <figure className="w-24 mt-8 mb-3 inline-block">
            <Image
              layout="responsive"
              src="/images/icons/success-rate.png"
              alt="Success Rate Stamp"
              height={100}
              width={100}
              // className=""
            />
          </figure>
        </div>
        <h3 className="text-4xl text-royal-blue-500 font-bold">
          <strong>Our Placement Success Rate - 86.4%</strong>
        </h3>
      </article>
    </section>
  );
}

export default Banner;
