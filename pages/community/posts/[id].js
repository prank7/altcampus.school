import {
  getAllPostIds,
  getPostData,
  getRelatedPosts
} from '../../../lib/posts';
import Layout from '../../../components/Layout';
import Head from 'next/head';
import PostCTA from '../../../components/Community/PostCTA';
import PostCard from '../../../components/Community/PostCard';
import { NextSeo } from 'next-seo';
import { TwitterAltIcon, FacebookIcon } from '../../../components/Icons';
import authors from '../../../lib/author.json';
import Image from 'next/image';

export default function Post({ postData, relatedPosts = [] }) {
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

      <section className="container mx-auto mb-16 px-8 md:px-0">
        <div className="max-w-screen-md mx-auto">
          <article>
            <header>
              <h1 className="mt-16 mb-8 font-bold text-indigo-700 text-4xl">
                {postData.title}
              </h1>
              {postData.hideCover || !postData.photo ? null : (
                <div className="relative w-full py-8">
                  <Image
                    // className="w-full h-full"
                    layout="responsive"
                    src={postData.photo}
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
                __html: postData.contentHtml
              }}
            />
          </article>
          {postData.cta ? <PostCTA ctaText={postData.ctaText} /> : null}

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
          {relatedPosts.map((post) => (
            <PostCard key={post.id} post={post} related />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const relatedPosts = await getRelatedPosts(params.id);
  return {
    props: {
      postData,
      relatedPosts
    }
  };
}
