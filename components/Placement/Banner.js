import Image from 'next/image';
import React from 'react';

function Banner(props) {
  return (
    <section className="bg-blur pt-32 pb-16">
      <article className="container mx-auto text-center px-8">
        <h1 className="text-5xl font-bold hero-heading text-royal-blue-800">
          AltCampus Placements
        </h1>
        <h2 className="max-w-3xl mx-auto mt-8 font-Karla text-royal-blue-800 tracking-tight text-lg">
          Checkout our alumni stories and how AltCampus helped them to learn and
          get their first job as a Software developer. Learn how our web development courses are enabling folks to kickstart their career in
          tech.
        </h2>
        <div className="text-center">
          <figure className="w-24 mt-12 inline-block">
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
        <h3 className="text-4xl text-green-theme-900 font-bold mt-6">
          <strong>Our Success Rate - 86.4%</strong>
        </h3>
      </article>
    </section>
  );
}

export default Banner;
