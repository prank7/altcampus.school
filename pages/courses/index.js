import React from 'react';
import { NextSeo } from 'next-seo';

import LayoutHome from '../../components/Common/Layout';
import Banner from '../../components/Courses/Banner';
import Courses from '../../components/Courses/CourseContainer';
import CTA from '../../components/Home/SignupCTA';
import { getAllAlumnisData } from '../../lib/airtableApi';
import { getCourses } from '../../lib/courseData';

function CoursePage({ alumnis, courses, coursesWithBasicInfo }) {
  var title = 'Web Development Courses | AltCampus';
  var description =
    "The Best Web Development Courses - HTML & CSS, JavaScript, React.js, Node.js, MongoDB, Frontend Development, Backend Development and Full Stack MERN Development";
  var url = 'https://altcampus.com/courses';
  
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
  let courses = await getCourses();

  courses = courses.tracks.map((c) => {
    var estimatedTimeToComplete = c.modules.reduce((acc, cur) => acc + cur.estimatedTimeToComplete, 0);

    return {
      name: c.name, 
      slug: c.slug, 
      isMiniTrack: c.isMiniTrack || false, 
      pricing: c.pricing,
      image: c.image, 
      description: c.description,
      estimatedTimeToComplete
    }
  })

  return {
    props: {
      courses: courses
    }
  };
};

export default CoursePage;
