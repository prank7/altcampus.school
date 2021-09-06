import React from 'react';
import { NextSeo } from 'next-seo';
import StackedList from '../../../components/StackedList';
import { getAllRoadmapsInfo } from '../../../lib/roadmaps';
import generateSitemap from '../../../lib/generateSitemap';
import LayoutHome from '../../../components/Home/Layout';

function WebDevelopment({ roadmapsInfo }) {
  var title = 'Full Stack Web Development Learning Roadmap | AltCampus School';
  var description =
    "Full stack web development roadmap 2021. Detailed MERN stack roadmap and free resources from India's best coding bootcamp.";
  var url = 'https://altcampus.school/community/web-development';

  return (
    <LayoutHome>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <div className="w-full h-full bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mx-8">
            <h1 className="text-center py-4 text-4xl font-bold text-gray-600">
              Your Roadmap to Becoming a Full-Stack Web Developer (MERN Stack)
            </h1>
            <p className="pb-16 pt-6 text-center text-gray-500 text-md">
              Below you will find all the topics - arranged in step-by-step
              order - that you will need to cover to become a full-stack web
              developer. If you complete all of these, you should achieve your
              goal within 6-8 months (studying 6-8 hours a day). Get started
              today!
            </p>
          </div>
          <div className="mx-8 mb-8">
            <StackedList roadmapsInfo={roadmapsInfo} />
          </div>
        </div>
      </div>
    </LayoutHome>
  );
}

export async function getStaticProps() {
  const roadmapsInfo = getAllRoadmapsInfo();

  await generateSitemap();
  return {
    props: {
      roadmapsInfo
    }
  };
}
export default WebDevelopment;
