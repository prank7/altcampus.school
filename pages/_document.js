import Document, { Html, Head, Main, NextScript } from 'next/document';

const GA_TRACKING_ID = 'UA-121886584-4';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta
            name='description'
            content='AltCampus.school is an online, immersive program that helps you learn full-stack web development and
      become job-ready.'
          />
          <meta name='robots' content='index, follow' />
          <meta property='og:title' content='AltCampus School' />
          <meta
            property='og:description'
            content='AltCampus.school is an online, immersive program that helps you learn full-stack web development and become job-ready.'
          />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://altcampus.school' />
          <meta
            property='og:image'
            content='https://altcampus.school/assets/media/altcampus-school-og.png'
          />
          <meta property='og:image:type' content='image/png' />
          <meta property='og:image:width' content='900' />
          <meta property='og:image:height' content='485' />
          <meta name='twitter:card' content='summary_large_image'></meta>
          <meta
            name='twitter:description'
            content='AltCampus.school is an online, immersive program that helps you learn full-stack web development and
      become job-ready.'
          />

          <link
            rel='shortcut icon'
            type='image/png'
            href='/assets/media/favicon.png'
          />

          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Source+Sans+Pro:wght@200;400;600;700&family=Mukta:wght@300;400;500;600&display=swap'
            rel='stylesheet'
          />
          <script
            async
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
        <body className='antialiased'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
