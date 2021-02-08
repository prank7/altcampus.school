import Head from "next/head";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Footer from "../../components/Home/Footer";

export default function Join() {
  return (
    <Layout>
      <Head>
        <title>Join | AltCampus Community </title>
        <link rel="icon" href="/favicon.png" />
        <script async data-uid="c6d807439c" src="https://dprank.ck.page/c6d807439c/index.js"></script>
      </Head>

      <div className="mx-8 md:mx-16 grid grid-cols-12 gap-4 post-container">
        <div className="mx-8 col-span-1 md:col-start-3 md:col-span-8">
          <h1 className="text-center py-4 pt-8 text-4xl font-bold text-indigo-700">
            Join the Community
          </h1>
          <p className="mt-4 text-gray-700 text-lg mb-8">We are actively developing the community. Please subscribe below to get the latest posts, stories, roadmaps and other updates about learning how to be a good Software developer.</p>
        </div>
        <div className="mx-8 col-span-1 md:col-start-3 md:col-span-8">
          <script async data-uid="c6d807439c" src="https://dprank.ck.page/c6d807439c/index.js"></script>
        </div>
      </div>
      

    </Layout>
  );
}


