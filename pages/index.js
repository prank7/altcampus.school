import React from 'react';
import Hero from '../components/Home/Hero';
import KeyFeatures from '../components/Home/KeyFeatures';
import CourseDetails from '../components/Home/CourseDetails';
import Testimonials from '../components/Home/Testimonials';
import StartLearningCTA from '../components/Home/StartLearningCTA';
import Pricing from '../components/Home/Pricing';
// import TestimonialTweets from "../components/Home/TestimonialsTweets";
import ReadyToBuild from '../components/Home/ReadyToBuildCTA';
import FAQ from '../components/Home/FAQ';
import LetsTalk from '../components/Home/LetsTalk';
import LayoutHome from '../components/Home/Layout';
import Head from 'next/head';
import ChosePace from '../components/Home/ChosePace';
import blogConfig from '../blog.config';

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
        <title>
          {blogConfig.siteMeta.title}
        </title>
      </Head>
      <LayoutHome>
        <main>
          <Hero />
          <KeyFeatures />
          <CourseDetails />
          <Testimonials />
          <StartLearningCTA />
          <ChosePace />
          <Pricing />
          {/* <TestimonialTweets /> */}
          <ReadyToBuild />
          <FAQ />
          <LetsTalk />
        </main>
      </LayoutHome>
    </>
  );
}

export default Home;
