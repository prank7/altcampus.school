import React from 'react';
import CourseModelContent from './CourseModelContent';
import CourseModelGraphics from './CourseModelGraphics';

function CourseModel() {
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
                  Your speed may vary. Learn at{' '}
                  <strong className="text-green-theme-900">
                    your own pace
                  </strong>
                </h2>
                <CourseModelContent
                  intro="Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut"
                  action="Enroll Now"
                />
              </div>

              <CourseModelGraphics
                image="/images/graphics-team.svg"
                alt="Graphics for Team"
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
                  intro="Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut"
                  action="Meet the team"
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
    </section>
  );
}

export default CourseModel;
