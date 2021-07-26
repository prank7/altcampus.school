import Image from 'next/image';
import React from 'react';

function Banner(props) {
  return (
    <section className="hero py-16">
      <article className="container mx-auto text-center px-8">
        <h1 className="text-5xl font-bold hero-heading text-dark-blue-500">
          AltCampus Reviews
        </h1>
        <h2 className="max-w-3xl mx-auto text-lg text-gray-800 text-hero-subheading mt-4">
          Checkout what our Alumni are saying about AltCampus
        </h2>
      </article>
    </section>
  );
}

export default Banner;
