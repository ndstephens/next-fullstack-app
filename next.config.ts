import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    reactRemoveProperties: true,
    // removeConsole: {
    //   exclude: ['error'],
    // },
  },
  poweredByHeader: false,
  // experimental: {
  //   typedRoutes: true,
  // },
};

export default nextConfig;
