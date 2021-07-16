import Head from 'next/head';
import LayoutHome from '../../../components/Home/Layout';
import Banner from '../../../components/Student/Banner';
import Sidebar from '../../../components/Student/Sidebar';
import About from '../../../components/Student/About';
import Project from '../../../components/Student/Project';
import Blog from '../../../components/Student/Blog';
import Story from '../../../components/Student/Story';
import ReadyToWriteStory from '../../../components/Home/ReadyToWriteStory';
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
              <About />
              <article>
                <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">
                  Story
                </h2>
                <Story />
              </article>
              <article>
                <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">
                  Projects
                </h2>
                {alumniData.projects.split(',').map((project) => {
                  return <Project key={project} {...project} />;
                })}
              </article>
              <article>
                <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">
                  Blog Posts
                </h2>
                {alumniData.blogPosts.split(',').map((blog) => {
                  return <Blog key={blog} {...blog} />;
                })}
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
      allAlumnisData.map(
        (alumni) => {
          return {params: {username: alumni.username}}
        }
      ) || [],
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
