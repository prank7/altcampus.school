import React from 'react';
import LayoutHome from '../../components/Home/Layout';
import Head from 'next/head';

function Placement() {
  return (
    <LayoutHome>
      <Head>
        <title>Placements | AltCampus Community </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
    </LayoutHome>
  );
}

export default Placement;
