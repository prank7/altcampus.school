import React from 'react';

function Banner(props) {
  return (
    <section className="hero py-16">
      <article className="container mx-auto text-center px-8">
        <h1 className="text-5xl font-bold hero-heading text-dark-blue-500">
          Placement Stories
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-gray-700 text-hero-subheading mt-4">
          Check our alumni stories how AltCampus School helped them to kick
          start their carreer in tech.
        </p>
        <div className="text-center">
          <img
            src="/images/icons/approved.svg"
            alt="Placed Icon"
            className="w-24 mt-8 mb-3 inline-block"
          />
        </div>
        <h2 className="text-4xl text-royal-blue-500 font-bold">
          <strong>Success Rate - 82.5%</strong>
        </h2>
      </article>
    </section>
  );
}

export default Banner;
