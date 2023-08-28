// next.config.js
module.exports = {
  images: {
    domains: [
      'dl.airtable.com',
      'avatars.githubusercontent.com',
      'avatars0.githubusercontent.com',
      'avatars1.githubusercontent.com',
      'avatars2.githubusercontent.com',
      'altcampus.com',
      'altcampus.school',
      'pbs.twimg.com',
      'abs.twimg.com',
      'altcampus.sfo3.digitaloceanspaces.com'
    ]
  },

  async redirects() {
    return [
      {
        source: '/community/posts/:path*',
        destination: '/posts/:path*',
        permanent: true
      },
      {
        source: '/community/stories/:path*',
        destination: '/stories/:path*',
        permanent: true
      },
      {
        source: '/community/guides/:path*',
        destination: '/guides/:path*',
        permanent: true
      }
    ];
  }
};
