import React, { Component } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Layout from '../../../components/Layout';
import StackedList from '../../../components/StackedList';
import Footer from '../../../components/Home/Footer';

class WebDevelopment extends Component {
  render() {
    var title =
      'Full Stack Web Development Learning Roadmap | AltCampus School';
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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-4 mb-16">
          <div className="col-span-1 sm:col-span-1 md:col-span-6">
            <h1 className="text-center py-4 pt-8 text-3xl font-bold text-indigo-600">
              Full Stack Web Development Roadmap (MERN Stack)
            </h1>
          </div>
          <div className="mx-8 col-span-1 md:col-start-2 md:col-span-4">
            <StackedList />
          </div>
          {/* <div className="col-span-1 w-full">
            <div className="bg-white shadow overflow-hidden sm:rounded-md px-4 py-4">
              <h1 className="font-semibold text-xl">Contributors</h1>
            </div>
          </div> */}
        </div>
      </Layout>
    );
  }
}

export default WebDevelopment;
