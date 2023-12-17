/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  redirects() {
    return [
      {
        source: '/',
        destination: '/leaves',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
