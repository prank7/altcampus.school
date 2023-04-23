import React, { useEffect } from 'react';
import Hero from '../components/Home/Hero';
import StartLearningCTA from '../components/Home/StartLearningCTA';
import Pricing from '../components/Home/Pricing';
// import TestimonialTweets from "../components/Home/TestimonialsTweets";
import CTA from '../components/Home/SignupCTA';
import FAQ from '../components/Home/FAQ';
import LetsTalk from '../components/Home/LetsTalk';
import LayoutHome from '../components/Common/Layout';
import Head from 'next/head';
import blogConfig from '../blog.config';
import ACStats from '../components/Home/ACStats';
import Alumni from '../components/Home/Alumni/Alumnis';
import CourseStack from '../components/Home/CourseStack';
import CourseModel from '../components/Home/CourseModel/CourseModel';
import TestimonialCTA from '../components/Home/TestimonialCTA';
import WallOfLove from '../components/Home/WallOfLove';
import Blog from '../components/Home/Blog';
import { getTweets } from '../lib/twitter';
import Checklist from '../components/Home/ChecklistCTA';
import { getCourses } from '../lib/courseData';

function Home(props) {
  useEffect(() => {
    const s = document.createElement('script');
    s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    s.setAttribute('async', 'true');
    document.head.appendChild(s);
  }, []);

  return (
    <>
      <Head>
        <title>{blogConfig.siteMeta.title}</title>
      </Head>
      <LayoutHome>
        <main>
          <Hero />
          <ACStats />
          <Alumni />
          <CTA
            titleA="Tired of searching for"
            titleB="the best tutorials on the internet? Stop it."
            action="Sign Up Now!"
          />
          <CourseStack />
          <section>
            <CourseModel />
          </section>
          <TestimonialCTA />
          <Pricing courses={props.courses} />
          <WallOfLove tweets={props.tweets} />
          <Checklist />
          <FAQ />
          <Blog />
          <CTA
            titleA="Ready to take the"
            titleB="world of programming by storm?"
            action="I am ready, Sign me up."
          />
          {/* <LetsTalk /> */}
        </main>
      </LayoutHome>
    </>
  );
}

export async function getStaticProps() {
  const tweets = await getTweets([
    '1474600021140008961',
    '1430470361422864391',
    '1117468286579556353',
    '1447431422780719110',
    '1391820153382260737',
    '1427367547347750928',
    '1410650906996051972',
    '1495804079439855625',
    '1120008211937947648'
  ]);

  const courses = await getCourses();

  return { props: { tweets, courses } };
}

export default Home;
