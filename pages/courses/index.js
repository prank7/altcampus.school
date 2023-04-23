import React from 'react';
import { NextSeo } from 'next-seo';

import LayoutHome from '../../components/Common/Layout';
import Banner from '../../components/Courses/Banner';
import Courses from '../../components/Courses/CourseContainer';
import CTA from '../../components/Home/SignupCTA';
import { getAllAlumnisData } from '../../lib/airtableApi';
import { getCourses } from '../../lib/courseData';

function CoursePage({ alumnis, courses }) {
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
      <LayoutHome>
        <Banner />
        <Courses courses={courses} />
        <CTA
          titleA={'Not sure about the course structure?'}
          titleB={'Try our free course here'}
          action={'I am ready, Sign me up.'}
        />
      </LayoutHome>
    </>
  );
}

export const getStaticProps = async () => {
  const data = getAllAlumnisData();
  const courses = await getCourses();
  return {
    props: {
      alumnis: data,
      courses
    }
  };
};

export default CoursePage;
