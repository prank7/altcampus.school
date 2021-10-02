import React from 'react';
import CourseModelContent from './CourseModelContent';
import CourseModelGraphics from './CourseModelGraphics';

function CourseModel(props) {
  return (
    <section className="mt-16">
      <div className="mx-auto px-3 course-model-item relative ">
        <div className="bg-white relative z-10">
          <article className="max-w-5xl mx-auto px-3 py-24 flex items-center justify-between relative z-10">
            <div className="max-w max-w-lg">
              <h2 className="font-bold text-royal-blue-800 text-4.5xl">
                All hands{' '}
                <strong className="text-green-theme-900">project based</strong>{' '}
                approach
              </h2>
              <CourseModelContent
                intro={
                  'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut'
                }
                action={'See Projects'}
              />
            </div>

            <CourseModelGraphics
              image={'/images/graphics-project.svg'}
              alt={'Graphics for Project'}
            />
          </article>
        </div>
      </div>
      <div className="bg-white">
        <article className="max-w-5xl mx-auto px-3 py-24 flex items-center justify-between relative z-10">
          <div className="max-w max-w-lg">
            <h2 className="font-bold text-royal-blue-800 text-4.5xl">
              <strong className="text-green-theme-900">Mentorship</strong> - So
              that you are wrong only once
            </h2>
            <CourseModelContent
              intro={
                'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut'
              }
              action={'Meet the team'}
            />
          </div>

          <CourseModelGraphics
            image={'/images/graphics-team.svg'}
            alt={'Graphics for Team'}
          />
        </article>
      </div>

      <div className="mx-auto px-3 course-model-item relative ">
        <div className="bg-white relative z-10">
          <article className="max-w-5xl mx-auto px-3 py-24 flex items-center justify-between relative z-10">
            <div className="max-w max-w-lg">
              <h2 className="font-bold text-royal-blue-800 text-4.5xl">
                Learn with community-
                <strong className="text-green-theme-900">
                  Cohort course
                </strong>{' '}
              </h2>
              <CourseModelContent
                intro={
                  'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut'
                }
                action={'Enroll Now'}
              />
            </div>

            <CourseModelGraphics
              image={'/images/graphics-cohort.svg'}
              alt={'Graphics for Cohort'}
            />
          </article>
        </div>
      </div>
    </section>
  );
}

export default CourseModel;
