import { createContext, useState } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { getAllRoadmapIds, getRoadmapData } from '../../../lib/roadmaps';
import Layout from '../../../components/Layout';
import PostCTA from '../../../components/Community/PostCTA';
import authors from '../../../lib/author.json';
import { MDXRemote } from 'next-mdx-remote';
import Topics from '../../../components/roadmap/Topics';
import Modal from '../../../components/roadmap/Modal';

export let ModalContext = createContext(false);

const components = {
  a: Link,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
  Topics,
  Modal
};
export default function Post({ postData }) {
  let [open, setOpen] = useState(false);
  let authorInfo = authors[postData.author || 'altcampus'];

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
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
          <header className="bg-gray-100 py-12 md:py-24">
            <div className="container container mx-auto px-8 md:px-24">
              <strong className="uppercase text-gray-400 font-semibold">
                Step by step
              </strong>
              <h1 className="text-5xl text-royal-blue-800 mt-2 font-extrabold max-w-screen-md">
                {postData.title}
              </h1>
              <p className="text-lg text-gray-500 mt-4 max-w-screen-md">
                {postData.description}
              </p>
            </div>
          </header>

          <section className="prose bg-white pt-12 pb-4">
            <article className="container md:max-w-screen-lg mx-auto px-8 md:px-24">
              <MDXRemote {...postData.contentHtml} components={components} />
            </article>
          </section>

          <section className="flex items-center justify-center pb-16">
            <ul className="flex items-center space-x-2">
              <li className="mx-4">
                <a
                  className="flex border px-4 py-1 rounded-md border-royal-blue-500 items-center btn-hover"
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
                  className="flex border px-4 py-1 rounded-md border-royal-blue-500 items-center btn-hover"
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
          {postData.cta ? <PostCTA ctaText={postData.ctaText} /> : null}
        </main>
      </Layout>
    </ModalContext.Provider>
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