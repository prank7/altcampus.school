import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Masonry from 'react-masonry-css';

import LayoutHome from '../components/Home/Layout';
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
  var url = 'https://altcampus.school/wall-of-love';

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
    '1360871839984095234',
    '1427257886086877184',
    '1427367547347750928',
    '1419917434148982794',
    '1408003170681294852',
    '1402876685653970945',
    '1401243585966530560',
    '1392900802402951168',
    '1410650906996051972',
    '1390632182746550272',
    '1388545509753827330',
    '1391820153382260737',
    '1388375830586281984',
    '1384876756344184836',
    '1382977667037761538',
    '1381908538423799808',
    '1369389232058417152',
    '1364493882579320832',
    '1360986135363678208',
    '1360608162034839553',
    '1358158163153833984',
    '1348351216581963776',
    '1343213944312193026',
    '1340710574091427841',
    '1338742091908849665',
    '1338742094987407361',
    '1337322781344612354',
    '1328266301362429958',
    '1323971267133779968',
    '1321522270125264896',
    '1315291174291165184',
    '1305853817011888128',
    '1305846997740478465',
    '1303734085077012480',
    '1299757818124279808',
    '1297978179294904321',
    '1297202218760695809',
    '1293085198762913800',
    '1292184829010669568',
    '1289081007682068482',
    '1273610636728000512',
    '1270398313368391681',
    '1361225375750049794',
    '1331617753946460160',
    '1052896689017810944',
    '1328388068831764481',
    '1324336961893486595',
    '1315696357181587456',
    '1315360091407749120',
    '1313993389499654147',
    '1298936563007516672',
    '1279668263069216769',
    '1223221999427653632',
    '1207326123735994368',
    '1182209428730171397',
    '1166902883423412224',
    '1143563405871050752',
    '1137640136676597760',
    '1135593381948616704',
    '1120008211937947648',
    '1117813990699065346',
    '1117468286579556353',
    '1113998003130589184',
    '1102619238395633664',
    '1098640557096734720'
  ]);

  return { props: { tweets } };
}

export default WallOfLove;
