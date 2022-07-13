/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/trending/?page=1",
        permanent: true,
      },
      {
        source: "/genre",
        destination: "/trending/?page=1",
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
