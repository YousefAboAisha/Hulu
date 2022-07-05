/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/trending",
        permanent: true,
      },
      {
        source: "/genre",
        destination: "/trending",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
  "fontawesome-svg-core": {
    license: "free",
  },
};

module.exports = nextConfig;
