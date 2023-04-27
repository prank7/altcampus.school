import React from 'react';
import { NextSeo } from 'next-seo';
import LayoutHome from '../../components/Common/Layout';
import CTA from '../../components/Home/SignupCTA';
import { getCourses } from '../../lib/courseData';
import ProjectCard from '../../components/Projects/ProjectCard';
import projectsData from './data.json';
import { getCoursesWithBasicInfo } from '../../lib/courseData';

function Projects(props) {
  var title = 'Projects | AltCampus';
  var description =
    "Sample projects that students at AltCampus build to learn HTML, CSS, JavaScript, React.js, Node.js, MongoDB, frontend development, backend development and MERN stack.";
  var url = 'https://altcampus.com/projects';

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
      <LayoutHome coursesWithBasicInfo={props.coursesWithBasicInfo}>
        <section className="py-32 md:pt-44 md:pb-14 bg-fancy bg-no-repeat">
          <article className="container mx-auto text-center px-8">
            <h1 className="text-5.5xl font-bold leading-tight text-royal-blue-800">
              Sneak Peak into <strong className="text-green-theme-900">Projects</strong> that{' '}
              <br /> students make
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
  let coursesWithBasicInfo = await getCoursesWithBasicInfo()
  
  return {
    props: {
      courses,
      coursesWithBasicInfo
    }
  };
};

export default Projects;
