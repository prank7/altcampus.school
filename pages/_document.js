import Document, { Html, Main, Head, NextScript } from 'next/document';
import { FB_PIXEL_ID } from '../lib/fpixel';

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="AltCampus" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
          <link
            rel="shortcut icon"
            type="image/png"
            href="/assets/media/favicon.png"
          />

          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin="true"
          />
          {/* Karla & Sora Font Family */}
          <link
            href="https://fonts.googleapis.com/css2?family=Karla&family=Sora:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
