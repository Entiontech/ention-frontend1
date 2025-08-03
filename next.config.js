/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  
  // Aggressive image optimization
  images: {
    domains: [
      "picsum.photos",
      "rukminim1.flixcart.com",
      "media.graphassets.com",
      "efdwsxatehjhvmlqjcyc.supabase.co",
      'images.unsplash.com',
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Aggressive optimization
    unoptimized: false,
    loader: 'default',
    quality: 85, // Slightly reduced for faster loading
  },

  // Enhanced performance optimizations
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion', 'swiper'],
    scrollRestoration: true, // Better scroll performance
    legacyBrowsers: false, // Disable legacy browser support for better performance
  },

  // Compression
  compress: true,

  // Enhanced caching headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Video caching
      {
        source: '/(.*)\\.(mp4|webm|ogg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
    ];
  },

  // Enhanced webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
          },
        },
      };

      // Enable tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }

    // Optimize for performance
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    return config;
  },

  // Enable SWC minification for faster builds
  swcMinify: true,

  // Optimize for production
  productionBrowserSourceMaps: false,

  // Enable static optimization
  trailingSlash: false,
  
  // Optimize for faster loading
  poweredByHeader: false,
  
  // Enable HTTP/2 Server Push
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/assets/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
