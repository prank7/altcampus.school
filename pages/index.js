import React from 'react';
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

function Home(props) {
  // React.useEffect(() => {
  //   const s = document.createElement("script");
  //   s.setAttribute("src", "https://platform.twitter.com/widgets.js");
  //   s.setAttribute("async", "true");
  //   document.head.appendChild(s);
  // }, []);

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
          {/* <ChosePace />
          <Pricing /> */}
          {/* <TestimonialTweets /> */}
          <CTA
            titleA={'Land your dream job'}
            titleB={'of which you will be more proud !'}
            action={'Sign Up Now!'}
          />
          <CourseStack />
          <section>
            <CourseModel />
          </section>
          <TestimonialCTA
            titleA={'Ready to take the'}
            titleB={'world of programming by storm?'}
            action={'I am ready, Sign me up!'}
          />
          <Pricing />
          <WallOfLove />
          <CTA
            titleA={'Ready to take the'}
            titleB={'world of programming by storm?'}
            action={'I am ready, Sign me up!'}
          />
          {/* <FAQ />
          <LetsTalk /> */}
        </main>
      </LayoutHome>
    </>
  );
}

export default Home;
