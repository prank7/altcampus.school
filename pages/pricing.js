import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Pricing from '../components/Home/Pricing';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import LayoutHome from '../components/Home/Layout';

function PricingPage(props) {
  var title = 'Pricing | AltCampus School';
  var description =
    'AltCampus Course Cost is better than ISA based bootcamps, you pay less in long term. Get started learning web development for free with EMI now.';
  var url = 'https://altcampus.school/pricing';

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <LayoutHome>
        <Pricing />
      </LayoutHome>
    </>
  );
}

export default PricingPage;
