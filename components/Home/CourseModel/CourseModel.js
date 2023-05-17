import React from 'react';
import CourseModelContent from './CourseModelContent';
import CourseModelGraphics from './CourseModelGraphics';
import Link from 'next/link';

function CourseModel() {
  return (
    <>
      <section className="mt-8 pt-20 pb-40">
        <div className="container mx-auto px-8 sm:px-3">
          <header>
            <h2 className="text-center font-bold text-royal-blue-800 text-4xl leading-snug">
              We don’t just do it differently, <br />{' '}
              <span className="text-green-theme-900">We do it right</span>
            </h2>
          </header>
          <div className="grid lg:grid-cols-3 gap-8">
            <article className="">
              <header>
                <CourseModelGraphics
                  image={'/images/learn-by-doing.webp'}
                  alt={'Learn MERN stack web development by building projects'}
                />
              </header>
              <div className="">
                <strong className="text-lg font-normal inline-block text-gray-500 mb-6">
                  Learn by doing. Less theory, more practice
                </strong>
                <h3 className="font-bold text-royal-blue-800 text-2xl">
                  Step-by-step, hands on{' '}
                  <strong className="text-green-theme-900">
                    project based
                  </strong>{' '}
                  learning
                </h3>
                <CourseModelContent
                  intro={
                    'Our assignments and projects help you learn by building small, real world usecases with progressively increasing complexity. '
                  }
                  subIntro={
                    'Learn by building projects like chrome extension, e-commerce store, blogging app and more.'
                  }
                  action={'Student Projects in action'}
                  cta={`/projects`}
                />
              </div>
            </article>

            <article className="">
              <header>
                <CourseModelGraphics
                  image={'/images/learning-pace.webp'}
                  alt={'No catching up with others, learn at your own pace'}
                />
              </header>
              <div className="">
                <strong className="inline-block font-normal text-lg text-gray-500 mb-6">
                  Hurry is worry. No catching up with others
                </strong>
                <h3 className="font-bold text-royal-blue-800 text-2xl">
                  Your speed may vary. Learn at{' '}
                  <strong className="text-green-theme-900">
                    your own pace
                  </strong>
                </h3>
                <CourseModelContent
                  intro={
                    'Our courses are well thought out and pre-recorded, allowing you to move at your own pace and doing it whenever you want - day or night, part-time or full-time. No catching up with a cohort.'
                  }
                  subIntro={`To keep you on track, our custom learning platform tailors todos for you depending on how many hours you want to put in everyday.`}
                  action={'Checkout Our Courses'}
                  cta={`/courses`}
                />
              </div>
            </article>

            <article className="">
              <header>
                <CourseModelGraphics
                  image="/images/get-help.webp"
                  alt="Don't be stuck, community Forum to answer your queries"
                />
              </header>
              <div className="">
                <strong className="inline-block font-normal text-lg text-gray-500 mb-6">
                  Don't be stuck. Get the help you need
                </strong>
                <h3 className="font-bold text-royal-blue-800 text-2xl">
                  <strong className="text-green-theme-900">
                    Community Forum{' '}
                  </strong>
                  to answer your queries
                </h3>
                <CourseModelContent
                  intro={
                    'Our courses are thorough and pretty comprehensive. However, when stuck you can ask your queries in the community forum where other students and instructors will answer them.'
                  }
                  subIntro={`We encourage students to connect with other students, seek help and help others to make it an immersive learning experience.`}
                  action={'Our Student Reviews'}
                  cta={'/wall-of-love'}
                />
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* <section className="mt-8">
      <div className="relative">
        <div className="bg-white relative z-10">
          <div className="container mx-auto px-8 sm:px-3">
            <article className="max-w-5xl mx-auto pb-10 sm:pb-16 sm:flex items-center justify-between relative z-10">
              <div className="max-w-lg">
                <h4 className="text-xl text-gray-500 mb-6">
                  Learn by doing. Less theory, more practice
                </h4>
                <h2 className="font-bold text-royal-blue-800 text-4.5xl">
                  Step-by-step, hands on{' '}
                  <strong className="text-green-theme-900">
                    project based
                  </strong>{' '}
                  learning
                </h2>
                <CourseModelContent
                  intro={
                    'Our assignments and projects help you learn by building small, real world usecases with progressively increasing complexity. '
                  }
                  subIntro={
                    'Learn by building projects like chrome extension, e-commerce store, blogging app and more.'
                  }
                  action={'Student Projects in action'}
                  cta={`/projects`}
                />
              </div>

              <CourseModelGraphics
                image={'/images/graphics-team.svg'}
                alt={'Learn MERN stack web development by building projects'}
              />
            </article>
          </div>
        </div>
      </div>
      <div className="blur-before relative z-10">
        <div className="bg-white relative z-10">
          <div className="container mx-auto px-8 sm:px-3">
            <article className="max-w-5xl mx-auto pt-12 pb-10 sm:pb-16 sm:flex items-center justify-between relative z-10">
              <div className="max-w-xl">
                <h4 className="text-xl text-gray-500 mb-6">
                  Hurry is worry. No catching up with others
                </h4>
                <h2 className="font-bold text-royal-blue-800 text-4.5xl">
                  Your speed may vary. Learn at{' '}
                  <strong className="text-green-theme-900">
                    your own pace
                  </strong>
                </h2>
                <CourseModelContent
                  intro={
                    'Our courses are well thought out and pre-recorded, allowing you to move at your own pace and doing it whenever you want - day or night, part-time or full-time. No catching up with a cohort.'
                  }
                  subIntro={`To keep you on track, our custom learning platform tailors todos for you depending on how many hours you want to put in everyday.`}
                  action={'Enroll Now'}
                  cta={`/`}
                />
              </div>

              <CourseModelGraphics
                image={'/images/graphics-project.svg'}
                alt={'Graphics for Team'}
              />
            </article>
          </div>
        </div>
      </div>

      <div className="blur-before relative z-10">
        <div className="bg-white relative z-10">
          <div className="container mx-auto px-8 sm:px-3">
            <article className="max-w-5xl mx-auto pt-12 pb-10 sm:pb-40 sm:flex items-center justify-between relative z-10">
              <div className="max-w max-w-lg">
                <h4 className="text-xl text-gray-500 mb-6">
                  Don't be stuck. Get the help you need
                </h4>
                <h2 className="font-bold text-royal-blue-800 text-4.5xl">
                  <strong className="text-green-theme-900">
                    Community Forum{' '}
                  </strong>
                  to answer your queries
                </h2>
                <CourseModelContent
                  intro={
                    'Our courses are thorough and pretty comprehensive. However, when stuck you can ask your queries in the community forum where other students and instructors will answer them.'
                  }
                  subIntro={`We encourage students to connect with other students, seek help and help others to make it an immersive learning experience.`}
                  action={'Meet the team'}
                />
              </div>
              <CourseModelGraphics
                image="/images/graphics-cohort.svg"
                alt="Graphics for Cohort"
              />
            </article>
          </div>
        </div>
      </div>
    </section> */}
    </>
  );
}

export default CourseModel;
