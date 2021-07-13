import React from 'react';
import LayoutHome from '../../components/Home/Layout';
import Head from 'next/head';
import Student from '../../components/Placement/Student';
import Banner from '../../components/Placement/Banner';
import HiringPartners from '../../components/Placement/HiringPartners';
import ReadyToBuild from '../../components/Home/ReadyToBuildCTA';

function Placement() {
  return (
    <>
      <Head>
        <title>Placements | AltCampus Community </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <LayoutHome>
        <Banner />
        <HiringPartners />
        <section className="py-16">
          <div className="container mx-auto ">
            <header>
              <h2 className="text-center text-dark-blue-500 text-5xl font-semibold mb-8">
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
