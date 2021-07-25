import { getAllRoadmapIds, getRoadmapData } from '../../../lib/roadmaps';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import PostCTA from '../../../components/Community/PostCTA';
import { NextSeo } from 'next-seo';
import { TwitterAltIcon, FacebookIcon } from '../../../components/Icons';
import authors from '../../../lib/author.json';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Link from 'next/link';
import Topics from '../../../components/roadmap/Topics';

const components = {
  a: Link,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
  Topics
};
export default function Post({ postData }) {
  let authorInfo = authors[postData.author || 'altcampus'];

  return (
    <Layout>
      {postData.scriptTag ? (
        <Head>
          <script type="text/javascript" src={postData.scriptTag}></script>
        </Head>
      ) : null}
      <NextSeo
        title={postData.title + ' |' + ' AltCampus School'}
        description={postData.description}
        openGraph={{
          title: postData.title + ' |' + ' AltCampus School',
          url: 'https://altcampus.school/community/posts/' + postData.id,
          description: postData.description,
          images: [
            {
              url: postData.photo,
              alt: postData.title
            }
          ]
        }}
        twitter={{
          handle: '@altcampus',
          site: '@altcampus',
          cardType: 'summary_large_image'
        }}
      />

      <section className="mx-8 md:mx-16 grid grid-cols-12 gap-4 post-container mb-16">
        <div className=" col-span-12 sm:col-start-3 sm:col-span-8 md:px-6 ">
          <h2 className="mt-16 my-4 font-bold text-indigo-700 text-4xl">
            {postData.title}
          </h2>

          {/* <div
            className=""
            dangerouslySetInnerHTML={{
              __html: postData.contentHtml
            }}
          > */}
          <div className="prose">
            <MDXRemote {...postData.contentHtml} components={components} />
          </div>
          {/* </div> */}
          {postData.cta ? <PostCTA ctaText={postData.ctaText} /> : null}
          <div className="flex items-center justify-center mt-8">
            <div>
              <p className="text-md text-gray-800 font-semibold">Share</p>
              <div className="flex items-center space-x-2">
                <a
                  className="twitter-share-button"
                  href={`https://twitter.com/intent/tweet?text=${
                    postData.title + ' - @AltCampus'
                  }&url=${`https://altcampus.school/community/posts/${postData.id}`}`}
                >
                  <TwitterAltIcon className="h-8 w-8" />
                  <span className="sr-only">Share to Twitter</span>
                </a>
                <a
                  className="twitter-share-button"
                  href={`https://facebook.com/sharer/sharer.php?u=${`https://altcampus.school/community/posts/${postData.id}`}`}
                >
                  <FacebookIcon className="h-8 w-8" />
                  <span className="sr-only">Share to Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllRoadmapIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getRoadmapData(params.id);

  return {
    props: {
      postData
    }
  };
}
