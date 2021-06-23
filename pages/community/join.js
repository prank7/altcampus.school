import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import Footer from '../../components/Home/Footer';

export default function Join() {
  return (
    <Layout>
      <Head>
        <title>Join | AltCampus Community </title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-4 post-container">
        <div className="mx-12 col-span-1 md:col-start-2 md:col-span-4">
          <h1 className="text-center py-4 pt-8 text-4xl font-bold text-indigo-700">
            Join the Community
          </h1>
          <p className="mt-4 text-gray-700 text-lg mb-8 text-center">
            We are actively developing the community. Please subscribe below to
            get the latest posts, stories, roadmaps and other updates about
            learning how to be a good Software developer.
          </p>
        </div>

        <div className="mx-8 col-span-1 md:col-start-2 md:col-span-4">
          <iframe
            width="540"
            height="540"
            src="https://f2775d39.sibforms.com/serve/MUIEAPDdW349ZQvECysjg3C5sYrTzx9WS8K3ygyERwokv8u4yM2BCQbecX-Gpl5ks7-sAISlvCTh4u6wND1UyRwGdqLzXUqJ9Sl_XZ3HHlCp8Ug15LsrCrGbOLuuo1723zoxUSa1oj07h5OfcVRW7U9vewzgULJGa23enzWhsKGvFrNOUAFPztf5S0uetjW2p7vf-8hoXzDIfOIE"
            frameborder="0"
            scrolling="auto"
            allowfullscreen
            style={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
              maxWidth: '100%'
            }}
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
