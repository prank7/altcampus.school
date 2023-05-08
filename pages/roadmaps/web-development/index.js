import React from 'react';
import { NextSeo } from 'next-seo';
import StackedList from '../../../components/StackedList';
import { getAllRoadmapsInfo } from '../../../lib/roadmaps';
import generateSitemap from '../../../lib/generateSitemap';
import LayoutHome from '../../../components/Common/Layout';
import { getCoursesWithBasicInfo } from '../../../lib/courseData';

function WebDevelopment({ roadmapsInfo, coursesWithBasicInfo }) {
  var title =
    'MERN Stack Stack Web Development Learning Roadmap 2023 | AltCampus';
  var description =
    'Full stack web development roadmap 2023. Detailed MERN stack roadmap and free resources from the best web development course on the internet.';
  var url = 'https://altcampus.com/community/web-development';

  return (
    <LayoutHome coursesWithBasicInfo={coursesWithBasicInfo}>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <div className="w-full h-full pb-12 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mx-8">
            <h1 className="text-center py-4 text-4xl font-bold text-gray-600">
              Your Roadmap to Becoming a Full-Stack Web Developer (MERN Stack)
              in 2023
            </h1>
            <p className="pb-16 pt-6 text-center text-gray-500 text-md">
              Below you will find all the topics - arranged in step-by-step
              order - that you will need to cover to become a full-stack web
              developer. If you complete all of these, you should achieve your
              goal within 6-8 months (studying 6-8 hours a day). Get started
              today!
            </p>
          </div>
          <section className="mx-8 mb-8">
            <StackedList roadmapsInfo={roadmapsInfo} />
          </section>
        </div>
      </div>
    </LayoutHome>
  );
}

export async function getStaticProps() {
  const roadmapsInfo = getAllRoadmapsInfo();
  let coursesWithBasicInfo = await getCoursesWithBasicInfo();

  await generateSitemap();
  return {
    props: {
      roadmapsInfo,
      coursesWithBasicInfo
    }
  };
}
export default WebDevelopment;
