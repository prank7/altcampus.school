import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Masonry from 'react-masonry-css';

import LayoutHome from '../components/Common/Layout';
import { getTweets } from '../lib/twitter';
import Tweet from '../components/Tweet';

const breakpointColumnsObj = {
  default: 3,
  1280: 3,
  1024: 2,
  768: 2,
  640: 1
};

function WallOfLove({ tweets }) {
  var title = 'Wall Of Love | AltCampus School';
  var description =
    'AltCampus is one of the best programming bootcamps in India. Learn how it helps you get a job as a full stack web developer.';
  var url = 'https://altcampus.com/wall-of-love';

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
        <main className="max-w-7xl mx-auto px-8 py-20">
          <h1 className="text-center text-dark-blue-500 text-5xl font-semibold mb-16">
            What people are saying!
          </h1>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {tweets.map((tweet) => (
              <Tweet key={tweet.id} {...tweet} />
            ))}
          </Masonry>
        </main>
      </LayoutHome>
    </>
  );
}

export async function getStaticProps() {
  const tweets = await getTweets([
    '1098640557096734720',
    '1102619238395633664',
    '1113998003130589184',
    '1117468286579556353',
    '1117813990699065346',
    '1120008211937947648',
    '1135593381948616704',
    '1137640136676597760',
    '1143563405871050752',
    '1166902883423412224',
    '1182209428730171397',
    '1207326123735994368',
    '1223221999427653632',
    '1279668263069216769',
    '1298936563007516672',
    '1315360091407749120',
    '1315696357181587456',
    '1324336961893486595',
    '1328388068831764481',
    '1052896689017810944',
    '1331617753946460160',
    '1361225375750049794',
    '1273610636728000512',
    '1289081007682068482',
    '1293085198762913800',
    '1297202218760695809',
    '1299757818124279808',
    '1303734085077012480',
    '1305846997740478465',
    '1305853817011888128',
    '1315291174291165184',
    '1323971267133779968',
    '1328266301362429958',
    '1338742091908849665',
    '1340710574091427841',
    '1343213944312193026',
    '1348351216581963776',
    '1358158163153833984',
    '1360608162034839553',
    '1360986135363678208',
    '1364493882579320832',
    '1369389232058417152',
    '1381908538423799808',
    '1384876756344184836',
    '1388375830586281984',
    '1388545509753827330',
    '1338742094987407361',
    '1401243585966530560',
    '1391820153382260737',
    '1408003170681294852',
    '1427367547347750928',
    '1410650906996051972',
    '1360871839984095234'
  ]);

  return { props: { tweets } };
}

export default WallOfLove;
