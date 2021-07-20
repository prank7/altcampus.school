import Head from "next/head";
import { NextSeo } from 'next-seo';

import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Footer from "../../components/Home/Footer";

export default function Community() {

  var title = "Community of Web developers | AltCampus School";
  var description = "One of the best communities for learning software developement- Free roadmap, content and peers. Join India's best web development bootcamp's thriving community.";
  var url = "https://altcampus.school/community/web-development";

  return (
    <Layout>
      <Head>
        <title>AltCampus Community </title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NextSeo 
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description
        }}
      />

      <Hero />

      <div className="mx-16 py-8">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide"></h2>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li className="col-span-1 bg-white rounded-lg shadow">
            <Card
              imageURL="/images/icons/roadmap.svg"
              title="Roadmap"
              subTitle="Stay on track"
              cta="Explore"
              link="/community/web-development"
            />
          </li>

          <li className="col-span-1 bg-white rounded-lg shadow">
            <Card
              imageURL="/images/icons/tutorials.svg"
              title="Posts"
              subTitle="Read, learn and build using the posts"
              cta="Read"
              link="/community/posts"
            />
          </li>

          <li className="col-span-1 bg-white rounded-lg shadow">
            <Card
              imageURL="/images/icons/stories.svg"
              title="Stories"
              subTitle="Read success stories of students"
              cta="Read"
              link="/community/stories"
            />
          </li>
        </ul>
      </div>
    </Layout>
  );
}
