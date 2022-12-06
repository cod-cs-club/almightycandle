module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/web',
        permanent: false,
      },
    ];
  },
};