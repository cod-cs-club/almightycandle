module.exports = {
  async redirects() {
    return [
      {
        source: '/web',
        destination: '/',
        permanent: false,
      },
    ];
  },
};