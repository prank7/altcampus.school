const title = 'AltCampus School - Learn programming online. Fullstack web development bootcamp in India.';
const description = "AltCampus is an online, immersive program that helps you learn full-stack web development and become job-ready. Learn JavaScript, Node.js, React.js by building projects at India's best coding bootcamp.";
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
