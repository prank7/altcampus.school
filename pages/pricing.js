import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Pricing from '../components/Home/Pricing';

import LayoutHome from '../components/Common/Layout';

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
