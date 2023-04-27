import '../styles/index.css';
import { siteMeta } from '../blog.config';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { getCourses } from '../lib/courseData';

const GA_TRACKING_ID = 'G-2SJPKQTMLX';

function MyApp({ Component, pageProps, coursesWithBasicInfo }) {
  return (
    <>
      <DefaultSeo
        twitter={siteMeta.twitter}
        openGraph={siteMeta.openGraph}
        title={siteMeta.title}
        description={siteMeta.description}
      />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AltCampus" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />

        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=264397765165382&ev=PageView&noscript=1" />
            `
          }}
        />
      </Head>
      <Component {...pageProps} coursesWithBasicInfo={coursesWithBasicInfo}  />
    </>
  );
}


MyApp.getInitialProps = async (ctx) => {
  var courses = await getCourses();
  
  var coursesWithBasicInfo = courses.tracks.map((c, i) => {
    return {
      name: c.name, slug: c.slug, image: c.image, pricing: c.pricing, isMiniTrack: c.isMiniTrack, description: c.description
    }
  });

  return { coursesWithBasicInfo }
}


export default MyApp;
