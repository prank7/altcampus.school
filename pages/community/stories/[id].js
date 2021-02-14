import { getAllPostIds, getPostData } from "../../../lib/stories";
import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import PostCTA from '../../../components/Community/PostCTA';
import { NextSeo} from 'next-seo';

export default function Post({ postData }) {
  return (
    <Layout>
      <NextSeo
        title={postData.title + " |" + " AltCampus School"}
        description={postData.description}        
        openGraph={{
          title: postData.title + " |" + " AltCampus School",
          url: 'https://altcampus.school/community/stories/'+postData.id,
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
          <h2 className="mt-16 my-4 font-bold text-green-theme-600 text-3xl">
            {postData.title}
          </h2>
          <div
            className="prose "
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />

          {
            postData.cta ?
              <PostCTA ctaText={postData.ctaText} />
            : null
          }

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
