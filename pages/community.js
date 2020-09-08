import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";

export default function Community() {
  return (
    <div className="">
      <Head>
        <title>AltCampus Community</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <Hero />

      <div className="mx-16 py-8">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide"></h2>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li className="col-span-1 bg-white rounded-lg shadow">
            <Card
              imageURL="https://cdn.coda.io/icons/svg/color/ingredients-list.svg"
              title="Roadmap"
              subTitle="Get a direction."
              cta="Explore"
            />
          </li>

          <li className="col-span-1 bg-white rounded-lg shadow">
            <Card
              imageURL="https://cdn.coda.io/icons/svg/color/e-learning.svg"
              title="Tutorials"
              subTitle="Read, learn and build using the tutorials."
              cta="Read"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
