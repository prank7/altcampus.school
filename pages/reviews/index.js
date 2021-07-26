import React from 'react';
import { NextSeo } from 'next-seo';

import LayoutHome from '../../components/Home/Layout';

import ReadyToBuild from '../../components/Home/ReadyToBuildCTA';
import { getAllAlumnisData } from '../../lib/airtableApi';
import Banner from '../../components/Reviews/Banner';
import ReviewCard from '../../components/Reviews/ReviewCard';

import { Masonry } from 'masonic';

const getColumnCount = () => {
  if (!process.browser) {
    // Client-side-only code
    return 1;
  }

  const width = window.innerWidth;
  console.log(width);
  switch (true) {
    case width < 640:
      return 1;

    case width < 1024:
      return 2;

    case width > 1024:
      return 3;

    default:
      return 1;
  }
};

const MasonryCard = ({ data: alumni }) => {
  return <ReviewCard key={alumni.name} {...alumni} />;
};

function Reviews({ alumnis }) {
  var title = 'AltCampus Reviews | AltCampus School';
  var description = 'AltCampus reviews and experiences shared by our students.';
  var url = 'https://altcampus.school/reviews';

  console.log(getColumnCount());
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: 'https://altcampus.school/assets/media/placement-page.png',
              alt: title
            }
          ]
        }}
      />
      <LayoutHome>
        <Banner />
        <section className="py-16">
          <div className="container mx-auto px-8">
            {/* <header>
              <h2 className="text-center text-dark-blue-500 text-5xl font-semibold mb-8">
                Our Alumni
              </h2>
            </header> */}
            {/* <div className="grid md:grid-cols-2 xl:grid-cols-3  gap-8">
              {alumnis.map((alumni) => {
                return <ReviewCard key={alumni.name} {...alumni} />;
              })}
            </div> */}
            <Masonry
              columnCount={getColumnCount()}
              columnGutter={32}
              items={alumnis}
              render={MasonryCard}
            />
          </div>
        </section>
        <ReadyToBuild />
      </LayoutHome>
    </>
  );
}

export const getStaticProps = () => {
  const data = getAllAlumnisData();
  return {
    props: {
      alumnis: data.filter((alumni) =>
        alumni.experienceAtAltCampus
          ? alumni.experienceAtAltCampus.length > 10
          : false
      )
    }
  };
};

export default Reviews;
