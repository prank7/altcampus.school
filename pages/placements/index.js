import React from 'react';
import { NextSeo } from 'next-seo';

import LayoutHome from '../../components/Home/Layout';
import Head from 'next/head';
import Student from '../../components/Placement/Student';
import Banner from '../../components/Placement/Banner';
import HiringPartners from '../../components/Placement/HiringPartners';
import ReadyToBuild from '../../components/Home/ReadyToBuildCTA';
import { getAllAlumnisData } from '../../lib/airtableApi';

function Placement({ alumnis }) {
  var title = 'AltCampus Placements | AltCampus School';
  var description =
    "Placement stats and success stories from India's best programming bootcamp. AltCampus reviews and experiences shared by our students.";
  var url = 'https://altcampus.school/placements';

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: 'https://altcampus.school/assets/media/placement-page.png',
              alt: title
            }
          ]
        }}
      />
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

export const getStaticProps = () => {
  const data = getAllAlumnisData();
  return {
    props: {
      alumnis: data
    }
  };
};

export default Placement;
