import React from 'react';
import { NextSeo } from 'next-seo';

import LayoutHome from '../../components/Common/Layout';
import Head from 'next/head';
import Student from '../../components/Placement/Student';
import Banner from '../../components/Placement/Banner';
import HiringPartners from '../../components/Placement/HiringPartners';
import CTA from '../../components/Home/SignupCTA';
import { getAllAlumnisData } from '../../lib/airtableApi';
import { getCoursesWithBasicInfo } from '../../lib/courseData';

function Placement({ alumnis, coursesWithBasicInfo }) {
  var title = 'AltCampus Placements';
  var description =
    "Placement stats and success stories from India's best programming bootcamp. AltCampus reviews and experiences shared by our students.";
  var url = 'https://altcampus.com/placements';

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
              url: 'https://altcampus.com/assets/media/placement-page.png',
              alt: title
            }
          ]
        }}
      />
      <LayoutHome coursesWithBasicInfo={coursesWithBasicInfo}>
        <Banner />
        <HiringPartners />
        <section className="py-16">
          <div className="container mx-auto px-8">
            <header className="text-center mb-24">
              <h2 className="text-4xl sm:text-5.5xl text-gray-500 font-bold">
                Meet some of our graduates
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

export const getStaticProps = async() => {
  let data = getAllAlumnisData();
  data = data.map((d) =>  {
    const relevantData = { name: d.name, slug: d.slug, image: d.image, role: d.role, company: d.company }
    return relevantData;
  })

  let coursesWithBasicInfo = await getCoursesWithBasicInfo()

  return {
    props: {
      alumnis: data,
      coursesWithBasicInfo
    }
  };
};

export default Placement;
