import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { getSortedPostsData } from '../../../lib/stories';

const Stories = ({ allPostsData }) => {
  return (
    <Layout>
      <Head>
        <title>AltCampus Community | Stories</title>
      </Head>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-4">
        <div className="mx-8 col-span-1 md:col-start-2 md:col-span-4">
          <h1 className="text-center py-4 pt-8 text-4xl font-bold text-gray-700">
            Success Stories
          </h1>
        </div>
        <div className="mx-8 col-span-1 md:col-start-2 md:col-span-4">
          {allPostsData.map(({ id, name, company, date, title,studentPhoto, blurb }) => (
            <div key={id} className="mb-8">
              <Link
                href={`/community/stories/[id]`}
                as={`/community/stories/${id}`}
              >
                <figure class="bg-gray-100 rounded-xl flex p-2" style={{cursor: 'pointer'}}>
                  <img class="w-32 h-32" src={studentPhoto} alt="" width="384" height="512" />
                  <div class="my-auto px-4">
                    <blockquote>
                      <p class="text-lg font-semibold text-green-theme-600 text-xl">
                        {title}
                      </p>
                    </blockquote>
                    <figcaption class="pt-4">
                      <div>
                        <h5 className="text-md font-semibold text-gray-700">{name}</h5>
                      </div>
                      <div>
                        <h5 className="text-sm text-gray-600">{`‍Placed in ${company}`}</h5>
                      </div>
                    </figcaption>
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

export default Stories;