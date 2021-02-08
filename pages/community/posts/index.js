import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { getSortedPostsData } from '../../../lib/posts';

const Tutorials = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>AltCampus Community | Tutorials</title>
      </Head>
      <div className="mx-8 md:mx-16 grid grid-cols-12 gap-4 post-container">
        <div className="mx-8 col-span-1 md:col-start-3 md:col-span-8">
          <h1 className="text-center py-4 pt-8 text-4xl font-bold text-gray-700">
            Posts
          </h1>
        </div>
        <div className="mx-8 col-span-1 md:col-start-3 md:col-span-8">
          {allPostsData.map(({ id, date, photo, title, blurb }) => (
            <div key={id} className="mb-8">
              <Link
                href={`/community/posts/[id]`}
                as={`/community/posts/${id}`}
              >
                <figure class="bg-gray-100 rounded-xl flex p-2" style={{cursor: 'pointer'}}>
                  <img class="w-40" src={photo} alt="" width="384" height="512" />
                  <div class="my-auto px-4">
                    <blockquote>
                      <p class="text-lg font-semibold text-indigo-600 text-2xl">
                        {title}
                      </p>
                    </blockquote>
                    {/* <figcaption class="pt-4">
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
  return {
    props: {
      allPostsData,
    },
  };
}

export default Tutorials;