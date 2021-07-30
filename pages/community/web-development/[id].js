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

      <main className="">
        <header className="container mx-auto px-24 py-24">
          <strong className="uppercase text-gray-300 font-semibold">
            Step by step
          </strong>
          <h1 className="text-6xl text-royal-blue-800 mt-2 font-extrabold">
            {postData.title}
          </h1>
          <p className="text-lg text-gray-600 mt-4">{postData.description}</p>
        </header>

        <section className="prose bg-gray-100 pt-12 pb-4">
          <article className="max-w-screen-lg mx-auto px-24">
            <MDXRemote {...postData.contentHtml} components={components} />
          </article>
        </section>

        {postData.cta ? <PostCTA ctaText={postData.ctaText} /> : null}
        <section className="flex items-center justify-center py-16">
          <ul className="flex items-center space-x-2">
            <li className="mx-4">
              <a
                className="flex border px-4 py-1 rounded-md border-royal-blue-500 items-center"
                target="_blank"
                style={{ color: '#40A8F5', borderColor: '#40A8F5' }}
                href={`https://twitter.com/intent/tweet?text=${
                  postData.title + ' - @AltCampus'
                }&url=${`https://altcampus.school/community/posts/${postData.id}`}`}
              >
                <img
                  className="h-5"
                  src="/images/icons/tweet-share.svg"
                  alt="Tweeter"
                />
                <span className="inline-block ml-2 font-semibold text-sm">
                  Tweet
                </span>
              </a>
            </li>
            <li className="mx-4">
              <a
                className="flex border px-4 py-1 rounded-md border-royal-blue-500 items-center"
                style={{ color: '#4460A0', borderColor: '#4460A0' }}
                href={`https://facebook.com/sharer/sharer.php?u=${`https://altcampus.school/community/posts/${postData.id}`}`}
              >
                <img
                  className="h-5"
                  src="/images/icons/fb-share.svg"
                  alt="Facebook"
                />
                <span className="inline-block ml-2 font-semibold text-sm">
                  Share
                </span>
              </a>
            </li>
          </ul>
        </section>
      </main>
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
