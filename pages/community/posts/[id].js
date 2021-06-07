import { getAllPostIds, getPostData } from "../../../lib/posts";
import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import PostCTA from "../../../components/Community/PostCTA";
import { NextSeo } from 'next-seo';
import { TwitterAltIcon } from "../../../components/Icons";
import Image from "next/image";

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.scriptTag ? 
        <Head>
          <script type="text/javascript" src={postData.scriptTag}></script> 
        </Head> 
      : null}
      <NextSeo
        title={postData.title + " |" + " AltCampus School"}
        description={postData.description}        
        openGraph={{
          title: postData.title + " |" + " AltCampus School",
          url: 'https://altcampus.school/community/posts/'+postData.id,
          description: postData.description,
          images: [
            {
              url: postData.photo,
              alt: postData.title,
            }
          ]
        }}
        twitter={{
          handle: '@altcampus',
          site: '@altcampus',
          cardType: 'summary_large_image',
        }}
      />

      <section className="mx-8 md:mx-16 grid grid-cols-12 gap-4 post-container">
        <div className=" col-span-12 sm:col-start-3 sm:col-span-8 md:px-6 ">
          <h2 className="mt-16 my-4 font-bold text-indigo-700 text-4xl">
            {postData.title}
          </h2>
          {
            postData.hideCover ?
              null
            : (
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
            )
          }
          <div
            className="prose "
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
          {
            postData.cta ?
              <PostCTA ctaText={postData.ctaText} />
            : null
          }

          <div className="mt-4">
            <hr className="mt-4" />
            <p className="pt-2 text-xl text-gray-900 font-semibold">Share</p>
            <a class="twitter-share-button"
              href={`https://twitter.com/intent/tweet?text=${postData.title + ' - @AltCampus'}&url=${`https://altcampus.school/community/posts/${postData.id}`}`}>
              <TwitterAltIcon className="h-6 w-6" />
              <span className="sr-only">Share to Twitter</span>
            </a>
          </div>

        </div>
      </section>

    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
