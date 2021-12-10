import React from 'react';
import { NextSeo } from 'next-seo';

import LayoutHome from '../../components/Common/Layout';
import Head from 'next/head';
import Student from '../../components/Placement/Student';
import Banner from '../../components/Placement/Banner';
import HiringPartners from '../../components/Placement/HiringPartners';
import CTA from '../../components/Home/SignupCTA';
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
            <header className="text-center mb-24">
              <h2 className="text-4xl sm:text-5.5xl text-gray-500 font-bold">
                Meet our graduates
              </h2>
            </header>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8">
              {alumnis.map((alumni) => {
                return <Student key={alumni.name} {...alumni} />;
              })}
            </div>
          </div>
        </section>
        <CTA
          titleA={'Ready to take the'}
          titleB={'world of programming by storm?'}
          action={'I am ready, Sign me up.'}
        />
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
