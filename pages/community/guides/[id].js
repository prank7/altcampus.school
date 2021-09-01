import Layout from '../../../components/Layout';
import Head from 'next/head';
import PostCTA from '../../../components/Community/PostCTA';
import PostCard from '../../../components/Community/PostCard';
import { NextSeo } from 'next-seo';
import { TwitterAltIcon, FacebookIcon } from '../../../components/Icons';
import authors from '../../../lib/author.json';
import Image from 'next/image';
import {
  getAllGuideIds,
  getGuideData,
  getRelatedGuides
} from '../../../lib/guides';

export default function Post({ guideData, relatedGuides = [] }) {
  let authorInfo = authors[guideData.author || 'altcampus'];

  return (
    <Layout>
      {guideData.scriptTag ? (
        <Head>
          <script type="text/javascript" src={guideData.scriptTag}></script>
        </Head>
      ) : null}
      <NextSeo
        title={guideData.title + ' |' + ' AltCampus School'}
        description={guideData.description}
        openGraph={{
          title: guideData.title + ' |' + ' AltCampus School',
          url: 'https://altcampus.school/community/guides/' + guideData.id,
          description: guideData.description,
          images: [
            {
              url: guideData.photo,
              alt: guideData.title
            }
          ]
        }}
        twitter={{
          handle: '@altcampus',
          site: '@altcampus',
          cardType: 'summary_large_image'
        }}
      />

      <section className="container mx-auto mb-16 px-8 md:px-0">
        <div className="max-w-screen-md mx-auto">
          <article>
            <header>
              <h1 className="mt-16 mb-8 font-bold text-indigo-700 text-4xl">
                {guideData.title}
              </h1>
              {guideData.hideCover || !guideData.photo ? null : (
                <div className="relative w-full py-8">
                  <Image
                    // className="w-full h-full"
                    layout="responsive"
                    src={guideData.photo}
                    alt=""
                    width="1600"
                    height="900"
                  />
                </div>
              )}
            </header>

            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: guideData.contentHtml
              }}
            />
          </article>
          {guideData.cta ? <PostCTA ctaText={guideData.ctaText} /> : null}

          <footer className="flex items-center justify-between mt-8">
            <div className="flex items-center space-x-2 lg:space-x-4">
              <img
                className="w-12 h-12 rounded-full lg:w-12 lg:h-12"
                src={authorInfo.avatar}
                alt={authorInfo.name}
              />
              <div className="font-medium text-lg leading-6 space-y-1">
                <cite className="font-bold not-italic">{authorInfo.name}</cite>
                <a
                  href={`https://twitter.com/${authorInfo.twitter}`}
                  target="_blank"
                >
                  <strong className="text-indigo-600 block font-normal">
                    {`@` + authorInfo.twitter}
                  </strong>
                </a>
              </div>
            </div>

            <div>
              <p className="text-md text-gray-800 font-semibold">Share</p>
              <div className="flex items-center space-x-2">
                <a
                  className="twitter-share-button"
                  href={`https://twitter.com/intent/tweet?text=${
                    guideData.title + ' - @AltCampus'
                  }&url=${`https://altcampus.school/community/posts/${guideData.id}`}`}
                >
                  <TwitterAltIcon className="h-8 w-8" />
                  <span className="sr-only">Share to Twitter</span>
                </a>
                <a
                  className="twitter-share-button"
                  href={`https://facebook.com/sharer/sharer.php?u=${`https://altcampus.school/community/posts/${guideData.id}`}`}
                >
                  <FacebookIcon className="h-8 w-8" />
                  <span className="sr-only">Share to Facebook</span>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </section>
      <section>
        <header className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-dotted border-gray-300 sm:max-w-2xl mx-auto" />
          </div>
          <div className="relative flex justify-center">
            <h4 className="px-3 bg-white text-lg font-medium text-gray-900">
              Other Posts
            </h4>
          </div>
        </header>
        <div className="container mx-auto px-8 my-12 grid gap-8 md:gap-4 md:grid-cols-3">
          {relatedGuides.map((post) => (
            <PostCard key={post.id} post={post} related path="guides" />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllGuideIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const guideData = await getGuideData(params.id);
  const relatedGuides = await getRelatedGuides(params.id);
  return {
    props: {
      guideData,
      relatedGuides
    }
  };
}
