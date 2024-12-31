import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // experimental: {
  //   staleTimes: {
  //     dynamic: 30,
  //   },
  // },
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
