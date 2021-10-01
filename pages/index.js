import React from 'react';
import Hero from '../components/Home/Hero';
import StartLearningCTA from '../components/Home/StartLearningCTA';
import Pricing from '../components/Home/Pricing';
// import TestimonialTweets from "../components/Home/TestimonialsTweets";
import ReadyToBuild from '../components/Home/SignupCTA';
import FAQ from '../components/Home/FAQ';
import LetsTalk from '../components/Home/LetsTalk';
import LayoutHome from '../components/Common/Layout';
import Head from 'next/head';
import ChosePace from '../components/Home/ChosePace';
import blogConfig from '../blog.config';
import ACStats from '../components/Home/ACStats';
import Alumni from '../components/Home/Alumni/Alumnis';

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
          <ReadyToBuild />
          {/* <FAQ />
          <LetsTalk /> */}
        </main>
      </LayoutHome>
    </>
  );
}

export default Home;
