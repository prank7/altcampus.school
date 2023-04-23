import { getCourseSlugs, getCourseData } from '../../lib/courseData';
import PostCTA from '../../components/Community/PostCTA';
import Banner from '../../components/Courses/Banner';
import Courses from '../../components/Courses/CourseContainer';
import CTA from '../../components/Home/SignupCTA';
import { NextSeo } from 'next-seo';
import LayoutHome from '../../components/Common/Layout';
import CourseBanner from '../../components/Courses/CourseBanner';
import CoursesAvailable from '../../components/Courses/CoursesAvailable';
import CourseBenefit from '../../components/Courses/CourseBenefit';
import CourseFeedback from '../../components/Courses/CourseFeedback';
import TrackList from '../../components/Courses/TrackList';

export default function IndividualCoursePage({ course }) {
  var title = 'AltCampus Placements | AltCampus School';
  var description =
    "Placement stats and success stories from India's best programming bootcamp. AltCampus reviews and experiences shared by our students.";
  var url = 'https://altcampus.school/placements';

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
              url: 'https://altcampus.school/assets/media/placement-page.png',
              alt: title
            }
          ]
        }}
      />
      <LayoutHome>
        <CourseBanner
          course={course}
        />

        {/* For Specific Course */}
        <CoursesAvailable />

        {/* For Track Course */}
        <TrackList />
        <CourseBenefit />

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
          action={'Enroll for $5K'}
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
  return {
    props: {
      course
    }
  };
}
