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
import Checklist from '../components/Home/ChecklistCTA';
import tweets from '../data/tweets.json';
import { getCourses, getCoursesWithBasicInfo } from '../lib/courseData';
import Image from 'next/image';

function Home(props) {
  // useEffect(() => {
  //   const s = document.createElement('script');
  //   s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  //   s.setAttribute('async', 'true');
  //   document.head.appendChild(s);
  // }, []);

  return (
    <>
      <Head>
        <title>{blogConfig.siteMeta.title}</title>
      </Head>
      <LayoutHome coursesWithBasicInfo={props.coursesWithBasicInfo}>
        <main>
          <Hero />
          <ACStats />
          <Alumni />
          <CTA
            titleA="Tired of looking for the best tutorials"
            titleB="on the internet? <br/> Your search ends here."
            action="Start Learning Now"
          />
          <CourseStack />

          <CourseModel />

          <TestimonialCTA />
          <Pricing courses={props.coursesWithBasicInfo} />
          <WallOfLove tweets={tweets} />
          <Checklist />
          <FAQ />
          <Blog />
          <section className="py-16 bg-royal-blue-800 bg-curve text-center md:text-left">
            {/* <article className="flex items-center bg-white py-4 pr-6 pl-14 shadow-lg-custom rounded-2xl relative z-10 ml-6 mt-10">
              <div className="font-Karla text-base text-gray-500 leading-relaxed mr-6">
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      "Hands down the best course I have ever done. From not knowing anything about web development to landing a great job, AltCampus' detailed course content, and projects made me a skilled web developer and helped me build a good portfolio that got me a job."
                  }}
                ></p>
                <span className="absolute -left-8 -top-3 transform">
                  <span className="text-center rounded-full text-8xl text-green-theme-900 block w-16 h-16 transform -scale-y-1 font-Sora font-semibold text-opacity-50">
                    “
                  </span>
                </span>
              </div>
              <aside className="text-center">
                <Image
                  className="rounded-full min-w-max object-cover"
                  height="60"
                  width="60"
                  src={'/images/students/harshaan-sq.svg'}
                  alt="AltCampus Placed Student Testimonial"
                />
                <div className="">
                  <h4 className="text-royal-blue-800 font-semibold text-base">
                    Abhishek
                  </h4>
                  <h6 className="text-xxs text-gray-500 uppercase font-normal mt-1">
                    Goswami
                  </h6>
                </div>
              </aside>

              <a
                className="bg-green-theme-900 hover:bg-green-theme-700 transition duration-300 ease-in-out text-white text-center py-6 px-20 rounded text-sm font-semibold inline-block mt-8 md:mt-0"
                href="https://launchpad.altcampus.com/signup"
              >
                Start Learning Now
              </a>
            </article> */}
            <article className="lg:flex justify-center space-x-8 items-center container mx-auto px-8">
              <div className="max-w-3xl bg-white col-span-1 flex items-center shadow-lg-custom py-7 pr-8 pl-8 rounded-2xl mt-8 md:mt-0 sm:ml-3.5">
                <div className="-ml-12 sm:-ml-16">
                  <span className="text-center rounded-full text-5.5xl text-white block w-16 h-16 bg-gray-500 -shadow-md-custom pt-1 font-bold transform -scale-y-1">
                    “
                  </span>
                </div>
                <blockquote className="ml-6">
                  <p className="text-base text-gray-500 leading-relaxed">
                    Hands down the best course I have ever done. From not
                    knowing anything about web development to landing a great
                    job, AltCampus' detailed course content, and projects made
                    me a skilled web developer and helped me build a good
                    portfolio that got me a job.
                  </p>
                </blockquote>
                <figure className="text-center ml-6 md:ml-8">
                  <div className="w-16 md:w-24">
                    <img
                      className="inline-block w-16 h-16 rounded-full object-cover"
                      src="/images/students/abhishek-sonal.webp"
                      alt="Abhishek Kumar"
                      width="64"
                      height="64"
                    />
                    <figcaption className="mt-2">
                      <cite className="text-base not-italic text-royal-blue-800 font-semibold">
                        Abhishek
                      </cite>
                      <br />
                      <cite className="text-xxs not-italic text-gray-500 tracking-normal uppercase">
                        Lancesoft
                      </cite>
                    </figcaption>
                  </div>
                </figure>
              </div>
              <div className="text-center">
                <a
                  className="bg-green-theme-900 hover:bg-green-theme-700 transition duration-300 ease-in-out text-white text-center py-6 px-20 rounded text-sm font-semibold inline-block mt-8 lg:mt-0"
                  href="https://launchpad.altcampus.com/signup"
                >
                  Start Learning Now
                </a>
              </div>
            </article>
          </section>
          {/* <CTA
            titleA="Ready to take the"
            titleB="world of programming by storm?"
            action="I am ready, Sign me up."
          /> */}
          {/* <LetsTalk /> */}
        </main>
      </LayoutHome>
    </>
  );
}

export async function getStaticProps() {
  // const tweets = await getTweets([
  //   '1474600021140008961',
  //   '1447431422780719110',
  //   '1391820153382260737',
  //   '1117468286579556353',
  //   '1495804079439855625',
  //   '1430470361422864391',
  //   '1427367547347750928',
  //   '1120008211937947648',
  //   '1410650906996051972'
  // ]);

  const coursesWithBasicInfo = await getCoursesWithBasicInfo();
  return { props: { coursesWithBasicInfo } };
}

export default Home;
