import "../styles/index.css";
import { siteMeta } from '../blog.config';
import { DefaultSeo } from 'next-seo';
import Head from "next/head";

const GA_TRACKING_ID = 'UA-121886584-4';

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
      <Head>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta name='robots' content='index, follow' />
          <meta name="author" content="AltCampus" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <link
            rel='shortcut icon'
            type='image/png'
            href='/assets/media/favicon.png'
          />

          <link rel='preconnect' href='https://fonts.googleapis.com' crossOrigin="true"/>
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Source+Sans+Pro:wght@200;400;600;700&family=Mukta:wght@300;400;500;600&display=swap'
            rel="preload"
            as="style"
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Source+Sans+Pro:wght@200;400;600;700&family=Mukta:wght@300;400;500;600&display=swap'
            rel="stylesheet"
          />

          <script
            async={true}
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
            `,
            }}
          />
        </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
