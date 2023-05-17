// next.config.js
module.exports = {
  images: {
    domains: [
      'dl.airtable.com',
      'avatars.githubusercontent.com',
      'avatars0.githubusercontent.com',
      'avatars1.githubusercontent.com',
      'avatars2.githubusercontent.com',
      'pbs.twimg.com',
      'abs.twimg.com'
    ]
  },

  async redirects() {
    return [
      {
        source: '/:path*',
        destination: `https://altcampus.com/:path*`,
      }
    ];
  }
};
