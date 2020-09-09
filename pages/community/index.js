import Head from "next/head";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function Community() {
  return (
    <Layout>
      <Head>
        <title>AltCampus Community </title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Hero />

      <div className="mx-16 py-8">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide"></h2>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li className="col-span-1 bg-white rounded-lg shadow">
            <Card
              imageURL="/images/icons/roadmap.svg"
              title="Roadmap"
              subTitle="Get a direction."
              cta="Explore"
              link="/community/web-development"
            />
          </li>

          <li className="col-span-1 bg-white rounded-lg shadow">
            <Card
              imageURL="/images/icons/tutorials.svg"
              title="Tutorials"
              subTitle="Read, learn and build using the tutorials."
              cta="Read"
              link="/community/tutorials"
            />
          </li>

          <li className="col-span-1 bg-white rounded-lg shadow">
            <Card
              imageURL="/images/icons/stories.svg"
              title="Stories"
              subTitle="Read success stories of students."
              cta="Read"
              link="/community/stories"
            />
          </li>
        </ul>
      </div>
    </Layout>
  );
}
