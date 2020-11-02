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
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-4">
        <div className="col-span-1 sm:col-span-1 md:col-span-6">
          <h1 className="text-center py-4 pt-8 text-3xl font-bold text-indigo-600">
            Tutorials
          </h1>
        </div>
        <div className="col-span-1 md:col-start-2 md:col-span-4">
          {allPostsData.map(({ id, date, title, blurb }) => (
            <div key={id} className="mb-8">
              <Link
                href={`/community/tutorials/[id]`}
                as={`/community/tutorials/${id}`}
              >
                <a>
                  <h2 className="text-2xl text-indigo-700 mb-2">
                    {title}
                  </h2>
                  <p>
                    {blurb} . . . <a className="">[Read more]</a>
                  </p>
                </a>
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