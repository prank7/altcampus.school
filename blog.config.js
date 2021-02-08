const title = 'AltCampus School | Everything you need to become a Software Developer';
const description =
  'AltCampus.school is an online, immersive program that helps you learn full-stack web development and become job-ready.';
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
          alt: title,
          width: 1280,
          height: 720
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
