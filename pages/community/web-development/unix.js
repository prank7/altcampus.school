import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Layout from '../../../components/Layout';

export default function Unix() {
  return (
    <Layout>
      <Head>
        <title>AltCampus Community </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <section>
        <div className="container mx-auto px-8">
          <h1>Unix and Git Road</h1>
        </div>
      </section>
    </Layout>
  );
}
