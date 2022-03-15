import React from 'react';
import { NextSeo } from 'next-seo';

import LayoutHome from '../../components/Common/Layout';
import Banner from '../../components/Courses/Banner';
import Courses from '../../components/Courses/CourseContainer';
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
        <Courses />
        <CTA
          titleA={'Not sure about the course structure?'}
          titleB={'Try our free course here'}
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
