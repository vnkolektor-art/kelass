/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // nama repo kamu
  basePath: '/kelass',
  assetPrefix: '/kelass/',
};

export default nextConfig;
