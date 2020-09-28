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
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Source+Sans+Pro:wght@200;300;400;600;700&display=swap'
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
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.addEventListener("load", (event) => {
                let twitterScript = document.createElement("script");
                twitterScript.setAttribute(
                  "src",
                  "https://platform.twitter.com/widgets.js"
                );
                twitterScript.setAttribute("async", "true");
                document.getElementById("twitter").appendChild(twitterScript);
              });
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
