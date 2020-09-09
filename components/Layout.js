import Head from 'next/head'
import Link from 'next/link'
import Navbar from './Navbar';

const siteTitle = "AltCampus Community"

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="AltCampus Community"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <Navbar />
        {children}
      </main>
    </div>
  )
}