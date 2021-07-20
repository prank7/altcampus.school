import React from 'react';

function Student(props) {
  return (
    <section className="hero py-16">
      <article className="container mx-auto text-center px-8">
        <h1 className="text-5xl font-bold hero-heading text-dark-blue-500">
          AltCampus Placements
        </h1>
        <h2 className="max-w-3xl mx-auto text-xl text-gray-700 text-hero-subheading mt-4">
          Checkout our alumni stories and how AltCampus helped them to learn and get their first job as a Software developer. Learn how India's finest programming bootcamp is enabling folks to kickstart their career in tech. 
        </h2>
        <div className="text-center">
          <img
            src="/images/icons/approved.svg"
            alt="Placed Icon"
            className="w-24 mt-8 mb-3 inline-block"
          />
        </div>
        <h3 className="text-4xl text-royal-blue-500 font-bold">
          <strong>Our Placement Success Rate - 86.4%</strong>
        </h3>
      </article>
    </section>
  );
}

export default Student;
