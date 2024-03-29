import Head from 'next/head';
import LayoutHome from '../../components/Common/Layout';
import Banner from '../../components/Student/Banner';
import Sidebar from '../../components/Student/Sidebar';
import About from '../../components/Student/About';
import Project from '../../components/Student/Project';
import Blog from '../../components/Student/Blog';
import Story from '../../components/Student/Story';
import CTA from '../../components/Home/SignupCTA';
import StudentExperience from '../../components/Student/StudentExperience';
import { getCoursesWithBasicInfo } from '../../lib/courseData';

import {
  getAllAlumnisData,
  getIndividualAlumniData
} from '../../lib/airtableApi';
import { NextSeo } from 'next-seo';

export default function student({ alumniData, coursesWithBasicInfo }) {
  // console.log(alumniData);
  if (!alumniData) return null;
  var title = `${alumniData.name} | AltCampus`;
  var description = `Placed as ${alumniData.role} at ${alumniData.company} after completing AltCampus course.`;
  var url = `https://altcampus.com/placements/${alumniData.slug}`;

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
              url: alumniData.image[0].url,
              alt: title
            }
          ]
        }}
      />
      <Head>
        <title>{alumniData.name} | AltCampus Alumni </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <LayoutHome coursesWithBasicInfo={coursesWithBasicInfo}>
        <Banner {...alumniData} />
        <section className="bg-royal-blue-100  py-16">
          <div className="container mx-auto px-8 md:grid items-start md:grid-cols-9 gap-16">
            <Sidebar {...alumniData} />
            <div className="md:col-span-6">
              <article>
                <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">
                  About
                </h2>
                <About {...alumniData} />
              </article>

              <article>
                <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">
                  AltCampus Review
                </h2>
                <StudentExperience {...alumniData} />
              </article>
              <article>
                <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">
                  {alumniData.interviewLink ? 'Story' : ''}
                </h2>
                {alumniData.interviewLink ? (
                  <Story interviewLink={alumniData.interviewLink} />
                ) : (
                  ''
                )}
              </article>
              <article>
                <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">
                  {alumniData.projects[0].title ? 'Projects' : ''}
                </h2>
                {alumniData.projects.map((project) => {
                  return !project.title ? (
                    ''
                  ) : (
                    <Project key={project.title} project={project} />
                  );
                })}
              </article>
              <article>
                <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">
                  {alumniData.blogPosts[0].title ? 'Blog Posts' : ''}
                </h2>
                {alumniData.blogPosts.map((blog) => {
                  return !blog.title ? (
                    ''
                  ) : (
                    <Blog blog={blog} key={blog.title} />
                  );
                })}
              </article>
            </div>
          </div>
        </section>
        <CTA
          titleA={'Ready to write your own story? '}
          titleB={'Get started now.'}
          action={'Sign up Now!.'}
        />
      </LayoutHome>
    </>
  );
}

export const getStaticPaths = () => {
  const allAlumnisData = getAllAlumnisData();

  return {
    paths:
      allAlumnisData.map((alumni) => {
        return { params: { username: alumni.slug } };
      }) || [],
    fallback: true
  };
};

export const getStaticProps = async(props) => {
  const { username } = props.params;
  const alumniData = getIndividualAlumniData(username);
  let coursesWithBasicInfo = await getCoursesWithBasicInfo()
  return {
    props: {
      alumniData,
      coursesWithBasicInfo
    }
  };
};
