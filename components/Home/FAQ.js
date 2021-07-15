import React from 'react';
import Link from 'next/link';

function FAQ(props) {
  return (
    <section id='faqs' className='py-24 bg-royal-blue-100'>
      <div className='max-w-3xl mx-auto px-8'>
        <header className='text-center mb-12'>
          <h3 className='font-bold text-4xl text-dark-blue-500'>FAQs</h3>
        </header>

        <div className=''>
          <div>
            <h3 className='text-green-theme-700 font-semibold text-2xl'>
              Q. Who is it for?
            </h3>
            <p className='font-medium text-dark-blue-300 pt-2 pb-8 text-lg'>
              <b className='text-2xl mr-3'>A.</b>
              AltCampus is an online programming bootcamp for recent college graduates, students taking gap year, dropouts,
              professionals looking to switch careers, anyone learning web
              development but needs right environment and guidance. No prior
              programming knowledge required.
            </p>
          </div>

          <div>
            <h3 className='text-green-theme-700 font-semibold text-2xl'>
              Q. Does AltCampus help me get a job?
            </h3>
            <p className='font-medium text-dark-blue-300 pt-2 pb-8 text-lg'>
              <b className='text-2xl mr-3'>A.</b>
              Yes. AltCampus does help in job placements. We help you at every stage. We help you build strong
              portfolio, prepare for interviews, and put you in touch with companies
              for interview.
            </p>
          </div>

          <div>
            <h3 className='text-green-theme-700 font-semibold text-2xl'>
              Q. I don't have enough money to enroll right now, can I buy now and pay later?
            </h3>
            <p className='font-medium text-dark-blue-300 pt-2 pb-8 text-lg'>
              <b className='text-2xl mr-3'>A.</b>
              Yes. AltCampus has partnered with Mihuru to provide you EMI based loan to enroll in the course. Please 
              <Link href="/apply-for-emi"><a className='text-royal-blue-500 font-semibold underline hover:no-underline' href="/apply-for-emi"> apply here</a></Link> to avail it.
            </p>
          </div>

          <div>
            <h3 className='text-green-theme-700 font-semibold text-2xl'>
              Q. Can I get a demo before I signup?
            </h3>
            <p className='font-medium text-dark-blue-300 pt-2 pb-8 text-lg'>
              <b className='text-2xl mr-3'>A.</b>
              Yes, you can try the free version of the program {' '}
              <a
                className='text-royal-blue-500 font-semibold underline hover:no-underline'
                href='https://try.altcampus.school'
              >
               here.
              </a>
            </p>
          </div>

          <div>
            <h3 className='text-green-theme-700 font-semibold text-2xl'>
              Q. How does the entire process work?
            </h3>
            <p className='font-medium text-dark-blue-300 pt-2 pb-8 text-lg'>
              <b className='text-2xl mr-3'>A.</b>
              You can read about it here -{' '}
              <a
                className='text-royal-blue-500 font-semibold underline hover:no-underline'
                href='how-it-works/'
              >
                How it works.
              </a>
            </p>
          </div>

          <div>
            <h3 className='text-green-theme-700 font-semibold text-2xl'>
              Q. Is this course self-paced or cohort based?
            </h3>
            <p className='font-medium text-dark-blue-300 pt-2 pb-1 text-lg'>
              <b className='text-2xl mr-3'>A.</b>
              We provide both the options. You can join a cohort or you can opt to do it at your own pace. 
              The mentorship in either case will be available for 9 months. 
            </p>
            <p className='font-medium text-dark-blue-300 pt-2 pb-8 text-lg'>
              It's easier to stay motivated and learn with a group of students, so if you want accountability, can put in 6-8 hours/day and really want to finish the course then we recommend that you join a cohort. 
            </p>
          </div>

          <div>
            <h3 className='text-green-theme-700 font-semibold text-2xl'>
              Q. How many students are there in a cohort?
            </h3>
            <p className='font-medium text-dark-blue-300 pt-2 pb-8 text-lg'>
              <b className='text-2xl mr-3'>A.</b>
              Maximum 15 students.
            </p>
          </div>

          <div>
            <h3 className='text-green-theme-700 font-semibold text-2xl'>
              Q. How long does it take to learn full stack web development and finish the course?
            </h3>
            <p className='font-medium text-dark-blue-300 pt-2 pb-8 text-lg'>
              <b className='text-2xl mr-3'>A.</b>
              In a cohort, it takes about 6-7 months to finish the AltCampus course. In self paced, it depends on the time and dedication of the learner. Students usually finish the course in anywhere between 5 to 9 months. Mentorship in either options is available till 9 months.
            </p>
          </div>

          <div>
            <h3 className='text-green-theme-700 font-semibold text-2xl'>
              Q. Do I get to interact with mentors live?
            </h3>
            <p className='font-medium text-dark-blue-300 pt-2 pb-8 text-lg'>
              <b className='text-2xl mr-3'>A.</b>
              Yes, every working day mentors in all modules hold live, office
              hour sessions where you can ask your doubts and work on problems
              you are facing.
            </p>
          </div>

          <div>
            <h3 className='text-green-theme-700 font-semibold text-2xl'>
              Q. How can I interact with other students in the community?
            </h3>
            <p className='font-medium text-dark-blue-300 pt-2 pb-8 text-lg'>
              <b className='text-2xl mr-3'>A.</b>
              Our custom platform helps you match with your peers and we have a
              private Slack group where you can interact with peers and get live
              help from mentors.
            </p>
          </div>

          <div>
            <h3 className='text-green-theme-700 font-semibold text-2xl'>
              Q. I am based outside India, can I still enroll in this course?
            </h3>
            <p className='font-medium text-dark-blue-300 pt-2 pb-8 text-lg'>
              <b className='text-2xl mr-3'>A.</b>
              Yes. You can enroll in it no matter where you are from. If need be,
              mentors hold office hours two times in 24 hours to accomodate all
              timezones.
            </p>
          </div>

          </div>
      </div>
    </section>
  );
}

export default FAQ;
