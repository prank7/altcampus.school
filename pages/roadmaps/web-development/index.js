import React, { Component } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Layout from '../../../components/Layout';
import StackedList from '../../../components/StackedList';
import Footer from '../../../components/Home/Footer';
import { getAllRoadmapsInfo } from '../../../lib/roadmaps';
import generateSitemap from '../../../lib/generateSitemap';

function WebDevelopment({ roadmapsInfo }) {
  var title = 'Full Stack Web Development Learning Roadmap | AltCampus School';
  var description =
    "Full stack web development roadmap 2021. Detailed MERN stack roadmap and free resources from India's best coding bootcamp.";
  var url = 'https://altcampus.school/community/web-development';

  return (
    <Layout>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="col-span-1 sm:col-span-1 md:col-span-6 my-14 mx-8">
          <h1 className="text-center py-4 text-3xl font-bold text-gray-600">
            Full Stack Web Development Roadmap (MERN Stack)
          </h1>
          <p className="pt-4 text-center text-gray-500 text-md">
            Below you will find all the topics - arranged in step-by-step order
            - that you will need to cover to become a full-stack web developer.
            If you complete all of these you should achieve your goal within 6-8
            months (studying 6-8 hours a day). Get started today!
          </p>
        </div>
        <div className="mb-20 mx-8 col-span-1 md:col-start-2 md:col-span-4">
          <StackedList roadmapsInfo={roadmapsInfo} />
        </div>
      </div>
    </Layout>
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
