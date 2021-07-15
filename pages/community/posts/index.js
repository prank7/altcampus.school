import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { getSortedPostsData } from '../../../lib/posts';
import { NextSeo } from 'next-seo';
import generateSitemap from '../../../lib/generateSitemap';


const Tutorials = ({ allPostsData }) => {

  var title = "How to Learn Web Development and Get a Job - Blog | AltCampus School";
  var description="Insightful tips, techniques and posts on how to learn software developement and get a job";
  var url = "https://altcampus.school/community/posts";

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
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-4 post-container">
        <div className="mx-8 col-span-1 md:col-start-2 md:col-span-4">
          <h1 className="text-center py-4 pt-8 text-4xl font-bold text-gray-700">
            How to Learn Web Development and Get a Job - Tips on Zero to Job
          </h1>
          <h2 className="pt-2 text-2xl text-gray-600 pb-6 text-center">On our blog here, we discuss how to get started learning full stack web development, building a portfolio and getting a job as a software developer.</h2>
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
                      src={photo}
                      alt=""
                      width="240"
                      height="144"
                    />
                  </div>
                  <div className="hidden sm:block sm:relative sm:w-48 sm:h-27 sm:flex-0">
                    <Image
                      // className="w-full h-full"
                      layout="fill"
                      src={photo}
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
                  </div>
                </figure>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  await generateSitemap();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Tutorials;