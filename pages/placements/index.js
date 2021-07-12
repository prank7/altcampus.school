import React from 'react';
import LayoutHome from '../../components/Home/Layout';
import Head from 'next/head';
import Student from '../../components/Placement/student';
import ReadyToBuild from '../../components/Home/ReadyToBuildCTA';

function Placement() {
  return (
    <>
      <Head>
        <title>Placements | AltCampus Community </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <LayoutHome>
        <section className="hero py-16">
          <article className="container mx-auto text-center">
            <h1 className="text-5xl font-bold hero-heading text-dark-blue-500">
              Placement Stories
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-hero-subheading mt-4">
              Watch our alumni share how AltCampus School helped them start new
              careers in tech, and get ready to rewrite your own story.
            </p>
            <div className="text-center">
              <img
                src="/images/icons/approved.svg"
                alt="Placed Icon"
                className="w-12 inline-block"
              />
              <strong>Success 82.5%</strong>
            </div>
          </article>
        </section>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto grid grid-cols-6 gap-8 items-center">
            <p className="col-span-2 text-xl">
              A few companies where our Alumini are placed
            </p>
            <div className="col-span-4">
              <figure className="flex items-center flex-wrap">
                <img
                  className="w-32 m-4"
                  src="/images/hiring-partner/big-binary.svg"
                  alt="BigBinary"
                />
                <img
                  className="w-32 m-4"
                  src="/images/hiring-partner/cleartax.png"
                  alt="ClearTax"
                />
                <img
                  className="w-32 m-4"
                  src="/images/hiring-partner/loconav.png"
                  alt="LocoNav"
                />

                <img
                  className="w-32 m-4"
                  src="/images/hiring-partner/khelomore.svg"
                  alt="Khelomore"
                />
                <img
                  className="w-32 m-4"
                  src="/images/hiring-partner/big-binary.svg"
                  alt="BigBinary"
                />
                <img
                  className="w-32 m-4"
                  src="/images/hiring-partner/cleartax.png"
                  alt="ClearTax"
                />
                <img
                  className="w-32 m-4"
                  src="/images/hiring-partner/loconav.png"
                  alt="LocoNav"
                />
                <img
                  className="w-32 m-4"
                  src="/images/hiring-partner/khelomore.svg"
                  alt="Khelomore"
                />
              </figure>
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto ">
            <header>
              <h2 className="text-center text-4xl font-bold text-dark-blue-700 mb-8">
                Our Alumini
              </h2>
            </header>
            <div className="grid grid-cols-4 gap-8">
              <Student />
              <Student />
              <Student />
              <Student />
              <Student />
            </div>
          </div>
        </section>
        <ReadyToBuild />
      </LayoutHome>
    </>
  );
}

export default Placement;
