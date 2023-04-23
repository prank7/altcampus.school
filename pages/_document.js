import Document, { Html, Main, Head, NextScript } from 'next/document';

const GA_TRACKING_ID = 'UA-121886584-4';

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, pathname: ctx.asPath };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="AltCampus" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <link rel="canonical" href={`https://altcampus.com${this.props.pathname}`} />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/assets/media/favicon.png"
          />

          {/* <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Source+Sans+Pro:wght@200;400;600;700&family=Mukta:wght@300;400;500;600&display=swap"
            rel="preload"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Source+Sans+Pro:wght@200;400;600;700&family=Mukta:wght@300;400;500;600&display=swap"
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
            `
            }}
          /> */}
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
