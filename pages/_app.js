import '../styles/index.css';
import { siteMeta } from '../blog.config';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as fpixel from '../lib/fpixel';
import * as gtag from '../lib/gtag';
import { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps, coursesWithBasicInfo }) {
  const router = useRouter();
  const site = 'https://altcampus.com';
  const canonicalURL = site + useRouter().asPath;

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fpixel.pageview();
    const handleRouteChange = (url) => {
      gtag.pageview(url);
      fpixel.pageview();
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
        <link rel="canonical" href={canonicalURL} />
      </Head>
      
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `
        }}
      />
      
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fpixel.FB_PIXEL_ID});
          `
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;