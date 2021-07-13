import Head from 'next/head';
import LayoutHome from '../../components/Home/Layout';
import Banner from '../../components/Student/Banner';
import Sidebar from '../../components/Student/Sidebar';
import About from '../../components/Student/About';
import Project from '../../components/Student/Project';
import Blog from '../../components/Student/Blog';
import Story from '../../components/Student/Story';
import ReadyToWriteStory from '../../components/Home/ReadyToWriteStory';

export default function student() {
  return (
    <div>
      <Head>
        <title>Harshaan Nihaal Khan | AltCampus Community </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <LayoutHome>
        <Banner />
        <section className=" bg-royal-blue-100  py-16">
          <div className="container mx-auto grid items-start grid-cols-9 gap-16">
            <Sidebar />
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
                <Project />
                <Project />
              </article>
              <article>
                <h2 className="text-dark-blue-600 text-4xl font-bold mb-2">
                  Blog Posts
                </h2>
                <Blog />
                <Blog />
              </article>
            </div>
          </div>
        </section>
        <ReadyToWriteStory />
      </LayoutHome>
    </div>
  );
}
