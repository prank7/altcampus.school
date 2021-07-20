import "../styles/index.css";
import { siteMeta } from '../blog.config';
import { DefaultSeo } from 'next-seo';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='robots' content='index, follow' />
        <meta name="author" content="AltCampus" />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
      </Head>
      <DefaultSeo
        twitter={siteMeta.twitter}
        openGraph={siteMeta.openGraph}
        title={siteMeta.title}
        description={siteMeta.description}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
