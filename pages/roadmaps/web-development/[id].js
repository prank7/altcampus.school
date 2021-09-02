import { createContext, useState } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';

import { getAllRoadmapIds, getRoadmapData } from '../../../lib/roadmaps';
import LayoutHome from '../../../components/Home/Layout';
import PostCTA from '../../../components/Community/PostCTA';
import authors from '../../../lib/author.json';
import Topics from '../../../components/roadmap/Topics';
import Modal from '../../../components/roadmap/Modal';

export let ModalContext = createContext(false);

const components = {
  a: Link,
  Head,
  Topics,
  Modal
};
export default function Post({ roadmapData }) {
  let [open, setOpen] = useState(false);
  let [modalType, setModalType] = useState('paid');

  return (
    <ModalContext.Provider value={{ open, setOpen, modalType, setModalType }}>
      <LayoutHome>
        {roadmapData.scriptTag ? (
          <Head>
            <script type="text/javascript" src={roadmapData.scriptTag}></script>
          </Head>
        ) : null}
        <NextSeo
          title={`${roadmapData.title} | AltCampus School'`}
          description={roadmapData.description}
          openGraph={{
            title: `${roadmapData.title} Roadmap | AltCampus School`,
            url:
              'https://altcampus.school/roadmaps/web-development/' +
              roadmapData.id,
            description: roadmapData.description,
            images: [
              {
                url: `https://altcampus.school${roadmapData.photo}`,
                alt: roadmapData.title
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
                {roadmapData.title} Roadmap
              </h1>
              <p className="text-lg text-gray-500 mt-4 max-w-screen-md">
                {roadmapData.description}
              </p>
            </div>
          </header>

          <section className="prose bg-white pt-12 pb-4">
            <article className="container md:max-w-screen-lg mx-auto px-8 md:px-24">
              <Modal />
              <MDXRemote {...roadmapData.contentHtml} components={components} />
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
                    roadmapData.title + ' - @AltCampus'
                  }&url=${`https://altcampus.school/posts/${roadmapData.id}`}`}
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
                  href={`https://facebook.com/sharer/sharer.php?u=${`https://altcampus.school/posts/${roadmapData.id}`}`}
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
          {roadmapData.cta ? <PostCTA ctaText={roadmapData.ctaText} /> : null}
        </main>
      </LayoutHome>
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
  const roadmapData = await getRoadmapData(params.id);

  return {
    props: {
      roadmapData
    }
  };
}
