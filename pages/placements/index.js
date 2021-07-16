import React from 'react';
import LayoutHome from '../../components/Home/Layout';
import Head from 'next/head';
import Student from '../../components/Placement/Student';
import Banner from '../../components/Placement/Banner';
import HiringPartners from '../../components/Placement/HiringPartners';
import ReadyToBuild from '../../components/Home/ReadyToBuildCTA';
import { getAllAlumnisData } from '../../lib/airtableApi';

function Placement({ alumnis }) {
  // console.log(alumnis);
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
          <div className="container mx-auto px-8">
            <header>
              <h2 className="text-center text-dark-blue-500 text-5xl font-semibold mb-8">
                Our Alumni
              </h2>
            </header>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8">
              {alumnis.map((alumni) => {
                return <Student key={alumni.name} {...alumni} />;
              })}
            </div>
          </div>
        </section>
        <ReadyToBuild />
      </LayoutHome>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await getAllAlumnisData();
  return {
    props: {
      alumnis: data
    }
  };
};

export default Placement;
