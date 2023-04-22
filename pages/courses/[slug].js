import { getCourseSlugs, getCourseData } from '../../lib/courseData';
import PostCTA from '../../components/Community/PostCTA';
import Banner from '../../components/Courses/Banner';
import Courses from '../../components/Courses/CourseContainer';
import CTA from '../../components/Home/SignupCTA';
import { NextSeo } from 'next-seo';
import LayoutHome from '../../components/Common/Layout';

export default function IndividualCoursePage({ course }) {

  var title = 'AltCampus Placements | AltCampus School';
  var description =
    "Placement stats and success stories from India's best programming bootcamp. AltCampus reviews and experiences shared by our students.";
  var url = 'https://altcampus.school/placements';

  console.log(course.modules)
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
        <Banner />
        <div>{course.name + "-" + course.description}</div>
        <div>
          {course.modules.map((m, i) => {
            return (
              <div key={i}>
                <h3 className='text-lg font-bold'>{m.name}</h3>
                <div>
                  {m.topics.map((t, j) => {
                    return (
                      <div key={j}>
                        <h4>{t.name}</h4>
                        
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
          <div>
            <a className='bg-green-theme-900 hover:bg-green-theme-700 text-white rounded font-semibold py-3 px-8'
              href={`https://launchpad.altcampus.com/signup?course=${course.name}&currency=INR`}>Buy Course Now</a>
          </div>
        </div>
        
        <CTA
          titleA={'Not sure about the course structure?'}
          titleB={'Try our free course here'}
          action={'I am ready, Sign me up.'}
        />
      </LayoutHome>
    </>
  )
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
