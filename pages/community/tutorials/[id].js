import { getAllPostIds, getPostData } from "../../../lib/posts";
import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title + " |" + " AltCampus School"}</title>
        <meta
          property="og:image"
          content={
            postData.img || ""
          }
        />
        <meta
          property="og:description"
          content={
            postData.description ||
            "AltCampus School"
          }
        />
        <meta
          name="description"
          content={
            postData.description ||
            "AltCampus School"
          }
        />
      </Head>

      <section className="mx-8 md:mx-16 grid grid-cols-12 gap-4 post-container">
        <div className=" col-span-12 sm:col-start-3 sm:col-span-8 md:px-6 ">
          <h2 className="mt-16 my-4 font-bold text-indigo-700 text-3xl">
            {postData.title}
          </h2>
          <div
            className="prose "
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
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
