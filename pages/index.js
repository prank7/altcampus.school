import React from 'react';
import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import KeyFeatures from '../components/Home/KeyFeatures';
import CourseDetails from '../components/Home/CourseDetails';
import StartLearningCTA from '../components/Home/StartLearningCTA';
import Pricing from '../components/Home/Pricing';
import TestimonialTweets from '../components/Home/TestimonialsTweets';
import ReadyToBuild from '../components/Home/ReadyToBuildCTA';
import FAQ from '../components/Home/FAQ';
import LetsTalk from '../components/Home/LetsTalk';
import Footer from '../components/Home/Footer';

function Home(props) {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <KeyFeatures />
        <CourseDetails />
        <StartLearningCTA />
        <Pricing />
        <TestimonialTweets />
        <ReadyToBuild />
        <FAQ />
        <LetsTalk />
        <Footer />
      </main>
    </>
  );
}

export default Home;
