import { getCourseSlugs, getCourseData } from '../../lib/courseData';
import PostCTA from '../../components/Community/PostCTA';
import Banner from '../../components/Courses/Banner';
import Courses from '../../components/Courses/CourseContainer';
import CTA from '../../components/Home/SignupCTA';
import { NextSeo } from 'next-seo';
import LayoutHome from '../../components/Common/Layout';
import CourseBanner from '../../components/Courses/CourseBanner';
import ParentTracks from '../../components/Courses/ParentTracks';
import CourseBenefit from '../../components/Courses/CourseBenefit';
import CourseFeedback from '../../components/Courses/CourseFeedback';
import ModuleList from '../../components/Courses/ModuleList';
import { getCoursesWithBasicInfo } from '../../lib/courseData';

export default function IndividualCoursePage({ course, coursesWithBasicInfo }) {
  var title = `${course.name} Course | AltCampus`;
  var description =
    `The best ${course.name} course on the internet. Learn ${course.name} properly with step-by-step course content, videos, exercises, assignments and projects.`;
  var url = `https://altcampus.com/courses/${course.slug}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: 'https://altcampus.com/assets/media/placement-page.png',
              alt: title
            }
          ]
        }}
      />
      <LayoutHome coursesWithBasicInfo={coursesWithBasicInfo}>
        <CourseBanner
          course={course}
        />

        {/* For Track Course */}
        <ModuleList course={course} />

        {/* For Specific Course */}
        {
          course.isMiniTrack ?
          <ParentTracks course={course} /> : null
        }
        {/* <CourseBenefit /> */}

        {/* <div>
          {course.modules.map((m, i) => {
            return (
              <div key={i}>
                <h3 className="text-lg font-bold">{m.name}</h3>
                <div>
                  {m.topics.map((t, j) => {
                    return (
                      <div key={j}>
                        <h4>{t.name}</h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div>
            <a
              className="bg-green-theme-900 hover:bg-green-theme-700 text-white rounded font-semibold py-3 px-8"
              href={`https://launchpad.altcampus.com/signup?course=${course.slug}&currency=INR`}
            >
              Buy Course Now
            </a>
          </div>
        </div> */}
        <CourseFeedback />
        <CTA
          titleA={'This course is 25% pocket friendly '}
          titleB={'when compared to other platforms'}
          action={`Enroll Now`}
          course={course}
        />
      </LayoutHome>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getCourseSlugs();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const course = await getCourseData(params.slug);
  const coursesWithBasicInfo = await getCoursesWithBasicInfo();
  return {
    props: {
      course,
      coursesWithBasicInfo
    }
  };
}
