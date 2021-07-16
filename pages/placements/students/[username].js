import Head from 'next/head';
import LayoutHome from '../../../components/Home/Layout';
import Banner from '../../../components/Student/Banner';
import Sidebar from '../../../components/Student/Sidebar';
import About from '../../../components/Student/About';
import Project from '../../../components/Student/Project';
import Blog from '../../../components/Student/Blog';
import Story from '../../../components/Student/Story';
import ReadyToWriteStory from '../../../components/Home/ReadyToWriteStory';
import StudentExperience from '../../../components/Student/StudentExperience';
import {
  getAllAlumnisData,
  getIndividualAlumniData
} from '../../../lib/airtableApi';

export default function student({ alumniData }) {
  // console.log(alumniData);
  return (
    <div>
      <Head>
        <title>{alumniData.name} | AltCampus Community </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <LayoutHome>
        <Banner {...alumniData} />
        <section className=" bg-royal-blue-100  py-16">
          <div className="container mx-auto px-8 grid items-start grid-cols-9 gap-16">
            <Sidebar {...alumniData} />
            <div className="col-span-6">
              <About {...alumniData} />
              <article>
                <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">
                 Experience at AltCampus
                </h2>
                <StudentExperience {...alumniData} />
              </article>
              <article>
                <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">
                  {alumniData.interviewLink
                    ? 'Story'
                    : ''}
                </h2>
                {alumniData.interviewLink ? (
                  <Story interviewLink={alumniData.interviewLink} />
                ) : (
                  ""
                )}
              </article>
              <article>
                <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">
                  {alumniData.projects[0].title ? "Projects" : ''}
                </h2>
                {
                  alumniData.projects.map((project) =>
                  {
                    return (
                      !project.title ? "" : <Project key={project.title} project={project} />
                    )
                       
                  })
                }
              </article>
              <article>
                <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">
                  {alumniData.blogPosts[0].title ? "Blog Posts" : ''}
                </h2>
                {
                  alumniData.blogPosts.map((blog) =>
                  {
                    return (
                      !blog.title ? "" : <Blog blog={blog} key={blog.title} />
                    )
                  })
                 }
              </article>
            </div>
          </div>
        </section>
        <ReadyToWriteStory />
      </LayoutHome>
    </div>
  );
}

export const getStaticPaths = async () => {
  const allAlumnisData = await getAllAlumnisData();

  return {
    paths:
      allAlumnisData.map((alumni) => {
        return { params: { username: alumni.username } };
      }) || [],
    fallback: true
  };
};

export const getStaticProps = async (props) => {
  const { username } = props.params;
  const alumniData = await getIndividualAlumniData(username);
  return {
    props: {
      alumniData
    }
  };
};
