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
      {/* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-4 post-container">
        <div className="mx-8 col-span-1 md:col-start-2 md:col-span-4">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              How to Learn Web Development and Get a Job - Tips on Zero to Job
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              On our blog here, we discuss how to get started learning full
              stack web development, building a portfolio and getting a job as a
              software developer.
            </p>
          </div>
        </div>
        <div className="mx-8 col-span-1 md:col-start-2 md:col-span-4">
          {allPostsData.map(({ id, date, photo, title, blurb }) => (
            <div key={id} className="mb-8">
              <Link
                href={`/community/posts/[id]`}
                as={`/community/posts/${id}`}
              >
                <figure
                  className=" bg-gray-100 rounded-xl sm:flex p-3 sm:items-center"
                  style={{ cursor: 'pointer' }}
                >
                  <div className="relative sm:hidden w-full">
                    <Image
                      // className="w-full h-full"
                      layout="responsive"
                      src={
                        photo || '/images/posts/4-common-situations-in-git.jpeg'
                      }
                      alt=""
                      width="240"
                      height="144"
                    />
                  </div>
                  <div className="hidden sm:block sm:relative sm:w-48 sm:h-27 sm:flex-0">
                    <Image
                      // className="w-full h-full"
                      layout="fill"
                      src={
                        photo || '/images/posts/4-common-situations-in-git.jpeg'
                      }
                      alt=""
                      // width="240"
                      // height="160"
                    />
                  </div>
                  <div className="my-auto py-3 sm:pt-0 sm:pl-8 flex-1">
                    <h2 className="font-semibold text-indigo-600 text-3xl sm:text-2xl">
                      {title}
                    </h2>
                    {/* <figcaption className="pt-4">
                      <div>
                        <h5 className="text-md font-semibold text-gray-700">{name}</h5>
                      </div>
                      <div>
                        <h5 className="text-sm text-gray-600">{`‍Placed in ${company}`}</h5>
                      </div>
                    </figcaption> */}
      {/* </div>
                </figure>
              </Link>
            </div>
          ))}
        </div>
      </div>  */}
    </Layout>
  );
};

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  }
];

function Cards({ posts }) {
  return (
    <div className="relative bg-gray-200 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl max-w-4xl mx-auto tracking-tight font-extrabold text-gray-900 sm:text-4xl">
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
                <div className="flex-shrink-0">
                  {/* <img
                    className="h-48 w-full object-cover"
                    src={post.photo}
                    alt=""
                  /> */}
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      {/* <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a> */}
                    </p>
                    <Link href={`/community/posts/${post.id}`}>
                      <a className="block mt-2">
                        <p className="text-xl font-extrabold text-gray-900">
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
                      <img
                        className="h-10 w-10 rounded-full"
                        src={author?.avatar}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 font-semibold">
                        {author.name}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-600">
                        <time dateTime={post.date}>
                          {dateFormatter.render(new Date(post.date))}
                        </time>
                        <span aria-hidden="true">&middot;</span>
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
