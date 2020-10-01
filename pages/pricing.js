import React from 'react';
import Pricing from '../components/Home/Pricing';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import LayoutHome from '../components/Home/Layout';
import Head from "next/head";

function PricingPage(props) {
  return (
    <>
      <Head>
        <title>Pricing Policy | AltCampus School</title>
      </Head>
      <LayoutHome>
        <Pricing />
      </LayoutHome>
    </>
  );
}

export default PricingPage;
