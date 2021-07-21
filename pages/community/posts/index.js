import Image from 'next/image';
import tinytime from 'tinytime';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { getSortedPostsData } from '../../../lib/posts';
import { NextSeo } from 'next-seo';
import generateSitemap from '../../../lib/generateSitemap';
import authors from '../../../lib/author.json';

let dateFormatter = tinytime('{MMMM} {DD}, {YYYY}');

const Tutorials = ({ allPostsData }) => {
  var title =
    'How to Learn Web Development and Get a Job - Blog | AltCampus School';
  var description =
    'Insightful tips, techniques and posts on how to learn software developement and get a job';
  var url = 'https://altcampus.school/community/posts';

  return (
    <Layout>
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
    </Layout>
  );
};

function Cards({ posts }) {
  return (
    <div className="relative bg-gray-200 pt-16 pb-16 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="text-center">
          <h2 className="text-3xl max-w-4xl mx-auto tracking-tight font-extrabold text-gray-700 sm:text-4xl">
            How to Learn Web Development and Get a Job - Tips on Zero to Job
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            On our blog here, we discuss how to get started learning full stack
            web development, building a portfolio and getting a job as a
            software developer.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => {
            let author = authors[post.author || 'altcampus'];
            return (
              <div
                key={post.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {/* <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a> */}
                    </p>
                    <Link href={`/community/posts/${post.id}`}>
                      <a className="block mt-2">
                        <p className="text-xl font-extrabold text-gray-800 hover:underline">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-600">
                          {post.description}
                        </p>
                      </a>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{author?.name}</span>
                      <div className="relative h-10 w-10 ">
                        <Image
                          className="rounded-full"
                          src={author?.avatar}
                          layout="fill"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 font-semibold">
                        {author.name}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-600">
                        <time dateTime={post.date}>
                          {dateFormatter.render(new Date(post.date))}
                        </time>
                        {/* <span aria-hidden="true">&middot;</span> */}
                        {/* <span>{post.readingTime} read</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  await generateSitemap();
  return {
    props: {
      allPostsData
    }
  };
}

export default Tutorials;
