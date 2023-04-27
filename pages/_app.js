import '../styles/index.css';
import { siteMeta } from '../blog.config';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

const GA_TRACKING_ID = 'G-2SJPKQTMLX';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
