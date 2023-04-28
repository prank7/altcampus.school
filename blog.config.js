const title = "AltCampus - Learn programming online. Fullstack web development courses in MERN stack.";
const description = "AltCampus offers online, immersive programming courses that helps you learn full-stack web development and become job-ready. Learn MERN stack - JavaScript, Node.js, React.js by building projects. Better than bootcamps.";
const siteURL = 'https://altcampus.com';

module.exports = {
  siteMeta: {
    title,
    description,
    canonical: siteURL,
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: siteURL,
      site_name: 'AltCampus',
      title,
      description,
      images: [
        {
          url: 'https://altcampus.com/assets/media/altcampus-com-og.png',
          alt: title
        }
      ]
    },
    twitter: {
      handle: '@altcampus',
      site: '@altcampus',
      cardType: 'summary_large_image'
    }
  }
};
