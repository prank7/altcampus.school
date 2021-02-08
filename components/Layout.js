import Head from "next/head";
import Link from "next/link";
import Footer from "./Home/Footer";
import Navbar from "./Navbar";

const siteTitle = "AltCampus Community";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="AltCampus Community" />
        <meta
          property="og:image"
          content="/images/AltCampus-Community-OG.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <Navbar />
        {children}
        <div style={{ marginTop: '10rem'}}></div>
        <Footer />
      </main>
    </div>
  );
}
