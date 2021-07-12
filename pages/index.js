import React from "react";
import Hero from "../components/Home/Hero";
import KeyFeatures from "../components/Home/KeyFeatures";
import CourseDetails from "../components/Home/CourseDetails";
import Testimonials from "../components/Home/Testimonials";
import StartLearningCTA from "../components/Home/StartLearningCTA";
import Pricing from "../components/Home/Pricing";
// import TestimonialTweets from "../components/Home/TestimonialsTweets";
import ReadyToBuild from "../components/Home/ReadyToBuildCTA";
import FAQ from "../components/Home/FAQ";
import LetsTalk from "../components/Home/LetsTalk";
import LayoutHome from "../components/Home/Layout";
import Head from "next/head";
import Link from "next/link";

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
          AltCampus School - Learn programming online. Fullstack web development bootcamp in India.
        </title>
      </Head>
      <LayoutHome>
        <main>
          <Hero />
          <KeyFeatures />
          <CourseDetails />
          <Testimonials />
          <StartLearningCTA />
          <article className="bg-dark-blue-100 py-24">
            <h3 className="text-4xl text-center text-green-theme-500 font-bold">
              Pick Your Pace
            </h3>
            <div className="mx-auto md:flex md:items-center px-16">
              
              <div className=" mb-8 md:mb-0 md:w-2/5 text-center md:text-left">
                <h3 className="text-3xl text-green-theme-500 font-bold">
                  Self Paced
                </h3>
                <h6 className="text-2xl text-dark-blue-500 mt-1 mb-5 font-mukta">
                  Learn at your own pace, along with the community of peers. 
                </h6>
                <div>
                  <p className="text-lg feature-desc leading-relaxed">
                    - Most suited for people wanting to learn fullstack web development part time
                    - Mentorship is still available in form of daily doubt clearing sessions everyday between 6-7pm IST.
                    - Can ask questions anytime via Slack
                    - Personal code review and one-to-one checkpoints feedback
                    - Job placement support
                    - Access to mentorship for 9 months from the day of enrollment
                    - Access to content for lifetime
                    - Access to hackathons, demo sessions, workshops, and community events.
                    - Enroll now, pay later using EMI. <Link className="underline" href="/apply-for-emi"><a href="/apply-for-emi">Apply here to avail.</a></Link>
                  </p>
                </div>
              </div>
              <div className="md:w-3/5">
                <h3 className="text-3xl text-green-theme-500 font-bold">
                  Cohort
                </h3>
                <h6 className="text-2xl text-dark-blue-500 mt-1 mb-5 font-mukta">
                  Learn along with other students in a group. 
                </h6>
                <div>
                  <p className="text-lg feature-desc leading-relaxed">
                    - Most suited for people wanting to learn fullstack web development full time
                    - Required to put in 6-8 hours of effort everyday
                    - Maximum 15 students in a cohort
                    - Daily live mentor session, starts at 10am IST (Monday-Friday).
                    - Can ask questions anytime via Slack
                    - Personal code review and one-to-one checkpoints feedback
                    - Job placement support
                    - Access to mentorship for 9 months from the day of enrollment
                    - hackathons, demo sessions, workshops, and community events.
                    - Enroll now, pay later using EMI. <Link className="underline" href="/apply-for-emi"><a href="/apply-for-emi">Apply here to avail.</a></Link>
                  </p>
                </div>
                <div>
                  <h4>Upcoming batches</h4>
                  <ul>
                    <li>
                      <p>25th July</p>
                      <a 
                      className='mt-4 md:mt-0 bg-white tracking-wider uppercase text-dark-blue-500 py-3 px-12 inline-block rounded shadow-md btn-hover font-semibold sm:ml-10'
                      target='_blank'
                      rel='noopener'
                      href='https://launchpad.altcampus.school/signup?utm_source=pick-your-pace'>Enroll now</a>
                    </li>
                    <li>
                      <p>16th August</p>
                      <a 
                      className='mt-4 md:mt-0 bg-white tracking-wider uppercase text-dark-blue-500 py-3 px-12 inline-block rounded shadow-md btn-hover font-semibold sm:ml-10'
                      target='_blank'
                      rel='noopener'
                      href='https://launchpad.altcampus.school/signup?utm_source=pick-your-pace'>Enroll now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
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
