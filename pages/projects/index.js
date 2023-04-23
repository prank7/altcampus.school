import React from 'react';
import { NextSeo } from 'next-seo';
import LayoutHome from '../../components/Common/Layout';
import CTA from '../../components/Home/SignupCTA';
import { getCourses } from '../../lib/courseData';
import ProjectCard from '../../components/Projects/ProjectCard';
import projectsData from './data.json';

function Projects() {
  var title = 'Projects | AltCampus School';
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
      import React from 'react'; import ProjectCard from './ProjectCard'; export
      default App;
      <LayoutHome>
        <section className="py-32 md:pt-44 md:pb-14 bg-fancy bg-no-repeat">
          <article className="container mx-auto text-center px-8">
            <h1 className="text-5.5xl font-bold leading-tight text-royal-blue-800">
              <strong className="text-green-theme-900">Projects</strong> to make{' '}
              <br /> while learning
            </h1>
          </article>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto py-10 pb-20">
          {projectsData.map((project) => (
            <ProjectCard
              projectName={project.name}
              projectImage={project.image}
              githubLink={project.github}
              liveLink={project.live}
              stackList={project.stack}
            />
          ))}
        </div>
        <CTA
          titleA="Not sure about the course structure?"
          titleB="Try our free course here"
          action="I am ready, Sign me up."
        />
      </LayoutHome>
    </>
  );
}

export const getStaticProps = async () => {
  const courses = await getCourses();
  return {
    props: {
      courses
    }
  };
};

export default Projects;
