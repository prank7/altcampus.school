import React from 'react';
import CourseModelContent from './CourseModelContent';
import CourseModelGraphics from './CourseModelGraphics';

function CourseModel(props) {
  return (
    <section className="mt-8">
      <div className="relative">
        <div className="bg-white relative z-10">
          <div className="container mx-auto px-8 sm:px-3">
            <article className="max-w-5xl mx-auto pb-10 sm:pb-16 sm:flex items-center justify-between relative z-10">
              <div className="max-w-lg">
                <h4 className="text-xl text-gray-500 mb-6">
                  Learn by doing. Less theory, more practice
                </h4>
                <h2 className="font-bold text-royal-blue-800 text-4.5xl">
                  Hands on{' '}
                  <strong className="text-green-theme-900">
                    project based
                  </strong>{' '}
                  learning approach
                </h2>
                <CourseModelContent
                  intro={
                    'Our assignments help you learn by building small, real world usecases with progressively increasing complexity. '
                  }
                  subIntro={
                    'Learn by building projects like chrome extension, e-commerce store, blogging app and more.'
                  }
                  action={'Project sample in action'}
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
                  Your speed may vary. Learn at {' '}
                  <strong className="text-green-theme-900">
                    your own pace
                  </strong>
                </h2>
                <CourseModelContent
                  intro={
                    'Our courses are very well thought out and content is pre-recorded, allowing you to move at your own pace without having to worry about catching up with a cohort and giving you the liberty to rewatch it again.'
                  }
                  subIntro={`It doesn't mean you have no support. You will have access to our forums where you can connect with other students and ask questions that the community will help you out with.`}
                  action={'Enroll Now'}
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
                  Start small
                </h4>
                <h2 className="font-bold text-royal-blue-800 text-4.5xl">
                  <strong className="text-green-theme-900">Small courses if you cant take all</strong> -
                  So that you are wrong only once
                </h2>
                <CourseModelContent
                  intro={
                    'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut'
                  }
                  action={'Meet the team'}
                />
              </div>
              <CourseModelGraphics
                image={'/images/graphics-cohort.svg'}
                alt={'Graphics for Cohort'}
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseModel;
