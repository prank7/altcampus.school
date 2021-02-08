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
      </Head>
      <main>
        <Navbar />
        {children}
        <div style={{ marginTop: '6rem'}}></div>
        <Footer />
      </main>
    </div>
  );
}
