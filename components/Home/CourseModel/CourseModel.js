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
                  Not only theory but their application…
                </h4>
                <h2 className="font-bold text-royal-blue-800 text-4.5xl">
                  All hands{' '}
                  <strong className="text-green-theme-900">
                    project based
                  </strong>{' '}
                  approach
                </h2>
                <CourseModelContent
                  intro="Get real-world programming skills - take part in our hackathons to learn and grow with community."
                  subIntro="We will also help you learn, create, clone and work on various commerce, Saas and other complex projects."
                  action="Project sample in action"
                />
              </div>

              <CourseModelGraphics
                image="/images/graphics-project.svg"
                alt="Graphics for Project"
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
                  Do it your own way…
                </h4>
                <h2 className="font-bold text-royal-blue-800 text-4.5xl">
                  Learn Alone or with{' '}
                  <strong className="text-green-theme-900">
                    Cohort course
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
                  An option to be guided…
                </h4>
                <h2 className="font-bold text-royal-blue-800 text-4.5xl">
                  <strong className="text-green-theme-900">Mentorship</strong> -
                  So that you are wrong only once
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
