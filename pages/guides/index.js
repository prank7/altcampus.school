import PostCard from '../../components/Community/PostCard';
import LayoutHome from '../../components/Common/Layout';
import { NextSeo } from 'next-seo';
import generateSitemap from '../../lib/generateSitemap';
import { getSortedGuidesData } from '../../lib/guides';
import { getCoursesWithBasicInfo } from '../../lib/courseData';

const Tutorials = ({ allPostsData, coursesWithBasicInfo }) => {
  var title = 'How to Learn Web Development and Get a Job - Blog | AltCampus';
  var description =
    'Insightful tips, techniques and posts on MERN stack and how to learn software developement and get a job';
  var url = 'https://altcampus.com/guides';

  return (
    <LayoutHome coursesWithBasicInfo={coursesWithBasicInfo}>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Cards posts={allPostsData} />
    </LayoutHome>
  );
};

function Cards({ posts }) {
  return (
    <div className="relative pt-16 pb-16 px-4 sm:px-6 lg:pt-32 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center">
          <h2 className="text-3xl max-w-4xl mx-auto tracking-tight font-extrabold text-gray-700 sm:text-4xl">
            The Ultimate Guides to Learn Web Development and Get a Job - Tips on
            Zero to Job
          </h2>
          {/* <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            On our blog here, we discuss how to get started learning full stack
            web development, building a portfolio and getting a job as a
            software developer.
          </p> */}
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} path="guides" />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedGuidesData();
  let coursesWithBasicInfo = await getCoursesWithBasicInfo();

  await generateSitemap();
  return {
    props: {
      allPostsData,
      coursesWithBasicInfo
    }
  };
}

export default Tutorials;
