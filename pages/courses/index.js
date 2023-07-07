import React, { useState } from 'react';
import { NextSeo } from 'next-seo';

import LayoutHome from '../../components/Common/Layout';
import Banner from '../../components/Courses/Banner';
import Courses from '../../components/Courses/CourseContainer';
import CTA from '../../components/Home/SignupCTA';
import { getAllAlumnisData } from '../../lib/airtableApi';
import { getCourses } from '../../lib/courseData';
import { getCoursesWithBasicInfo } from '../../lib/courseData';
import CurrencyToggle from '../../components/Common/CurrencyToggle';

function CoursePage({ alumnis, courses, coursesWithBasicInfo }) {
  var title = 'Web Development Courses | AltCampus';
  var description =
    'The Best Web Development Courses - HTML & CSS, JavaScript, React.js, Node.js, MongoDB, Frontend Development, Backend Development and Full Stack MERN Development';
  var url = 'https://altcampus.com/courses';

  const [currency, setCurrency] = useState('INR');
  const symbol = currency === 'INR' ? '₹' : '$';

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
        <section className="py-32 md:pt-44 md:pb-14 bg-fancy bg-no-repeat">
          <article className="container mx-auto text-center px-8">
            <h1 className="text-5.5xl font-bold leading-tight text-royal-blue-800">
              Explore Our <strong className="text-green-theme-900">Web Development</strong> <br />{' '}Courses
            </h1>
          </article>
          <div className="flex items-center justify-center mt-8">
            <CurrencyToggle setComponentCurrency={setCurrency} />
          </div>
          
        </section>
        <Courses courses={courses} currency={currency} symbol={symbol} />
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
    var estimatedTimeToComplete = c.modules.reduce(
      (acc, cur) => acc + cur.estimatedTimeToComplete,
      0
    );

    return {
      name: c.name,
      slug: c.slug,
      isMiniTrack: c.isMiniTrack || false,
      pricing: c.pricing,
      image: c.image,
      description: c.description,
      estimatedTimeToComplete
    };
  });

  let coursesWithBasicInfo = await getCoursesWithBasicInfo();

  return {
    props: {
      courses: courses,
      coursesWithBasicInfo
    }
  };
};

export default CoursePage;
