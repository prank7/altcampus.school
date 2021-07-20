const title = "AltCampus School - Learn programming online. Fullstack web development bootcamp based out of India.";
const description = "AltCampus is an online, immersive programming bootcamp that helps you learn full-stack web development and become job-ready. Learn MERN stack - JavaScript, Node.js, React.js by building projects at India's best coding bootcamp.";
const siteURL = 'https://altcampus.school';

module.exports = {
  siteMeta: {
    title,
    description,
    canonical: siteURL,
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: siteURL,
      site_name: 'AltCampus School',
      title,
      description,
      images: [
        {
          url: 'https://altcampus.school/assets/media/altcampus-school-og.png',
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
