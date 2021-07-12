import React from 'react';
import LayoutHome from '../../components/Home/Layout';
import Head from 'next/head';
import Student from '../../components/Placement/student';

function Placement() {
  return (
    <div>
      <Head>
        <title>Placements | AltCampus Community </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <LayoutHome>
        <section className="bg-royal-blue-100 py-16">
          <article className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">Placement Record</h1>
          </article>
        </section>
        <section className="py-16">
          <div className="container mx-auto grid grid-cols-4 gap-8">
            <Student />
            <Student />
            <Student />
            <Student />
            <Student />
          </div>
        </section>
      </LayoutHome>
    </div>
  );
}

export default Placement;
