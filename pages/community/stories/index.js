import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { getSortedPostsData } from '../../../lib/stories';
import { NextSeo } from 'next-seo';

const Stories = ({ allPostsData }) => {
  var title = 'Success Stories | AltCampus School';
  var description =
    'Placement and success stories from AltCampus. Stories from one of the best placement records among programming bootcamps in India';
  var url = 'https://altcampus.school/community/stories';

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

      <div className="relative bg-gray-200 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-8 pb-16">
          <div className="text-center">
            <h2 className="text-3xl max-w-4xl mx-auto tracking-tight font-extrabold text-gray-700 sm:text-4xl">
              Placement Stories - Getting Software Jobs After Learning at Our
              Bootcamp
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-4 bg-gray-200">
          <div className="mx-8 col-span-1 md:col-start-2 md:col-span-4">
            {allPostsData.map(
              ({ id, name, company, date, title, studentPhoto, blurb }) => (
                <div key={id} className="mb-8">
                  <Link
                    href={`/community/stories/[id]`}
                    as={`/community/stories/${id}`}
                  >
                    <figure
                      className="bg-gray-100 rounded-xl flex p-2"
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        className="w-32 h-32"
                        src={studentPhoto}
                        alt=""
                        width="384"
                        height="512"
                      />
                      <div className="my-auto px-4">
                        <blockquote>
                          <p className="font-semibold text-green-theme-600 text-xl hover:text-green-theme-500">
                            {title}
                          </p>
                        </blockquote>
                        <figcaption className="pt-4">
                          <div>
                            <h5 className="text-md font-semibold text-gray-700">
                              {name}
                            </h5>
                          </div>
                          <div>
                            <h5 className="text-sm text-gray-600">{`‍Placed at ${company}`}</h5>
                          </div>
                        </figcaption>
                      </div>
                    </figure>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default Stories;
